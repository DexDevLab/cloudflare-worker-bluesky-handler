import { Hono } from "hono";
import { getDids } from "./getDids";

type Bindings = {
  DID_LIST_URL: string;
  MY_KV: KVNamespace;
};

const app = new Hono<{ Bindings: Bindings }>();

app.all("/test/:handle?", async (c) => {
  try {
    const testHandle: any = c.req.param("handle");
    const dids = await getDids(c.env.DID_LIST_URL);
    if (testHandle) {
      const did = dids.handles[testHandle];
      return c.text(`${did}`);
    }
    return c.json(getDids);
  } catch (error: any) {
    return c.json({
      status: 500,
      data: `${error.message}`,
    });
  }
});

app.all("/.well-known/atproto-did", async (c) => {
  try {
    const dids = await getDids(c.env.DID_LIST_URL);
    const domain = dids.config.domain;
    const url = c.req.url;
    const prefix = `https://`;
    const suffix = `.${domain}${c.req.path}`;
    const handle = url.replace(prefix, "").replace(suffix, "");
    const did = dids.handles[handle];
    if (typeof did === "undefined") {
      return c.text(
        `Error: The requested handle or DID cannot be found under defined domain '*.${domain}'`
      );
    }
    return c.text(`${did}`);
  } catch (error: any) {
    return c.text(`${error.message}`);
  }
});

app.all("/*", async (c) => {
  try {
    const dids = await getDids(c.env.DID_LIST_URL);
    return c.redirect(dids.config.defaults, 301);
  } catch (error: any) {
    return c.json({
      status: 500,
      data: `${error.message}`,
    });
  }
});

export default app;
