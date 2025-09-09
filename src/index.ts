import { Hono } from "hono";
import { dids } from "./utils/dids";
import { getSubstringBetweenCharacters } from "./utils/utils";

const app = new Hono();

app.all("/test/:handle", (c) => {
  const getDids = dids();
  const domain = (getDids as any).domain;
  const testHandle = c.req.param('handle');
  const url = `https://${testHandle}.${domain}/.well-known/atproto-did`;
  const host = getSubstringBetweenCharacters(url, "//", "/");
  const handle = getSubstringBetweenCharacters(host, "", `.${domain}`);
  const did = (getDids as any)[handle];
  return c.text(`${did}`);
});

app.all("/.well-known/atproto-did", (c) => {
  const getDids = dids();
  const domain = (getDids as any).domain;
  const url = c.req.url;
  const host = getSubstringBetweenCharacters(url, "//", "/");
  const handle = getSubstringBetweenCharacters(host, "", `.${domain}`);
  const did = (getDids as any)[handle];
  return c.text(`${did}`);
});

app.all("/*", (c) => {
  const getDids = dids();
  return c.redirect((getDids as any).default, 301);
});


export default app;
