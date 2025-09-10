import localDidFile from "./dids.json";

export const getDids = async (url: string) => {
  type DIDFile = {
    config: {
      domain: string;
      defaults: string;
    };
    handles: {
      [handle: string]: string;
    };
  };
  let DidsList: DIDFile;
  if (url) {
    try {
      const download = await fetch(url);
      const blob = await download.blob();
      const jsonString = await blob.text();
      DidsList = JSON.parse(jsonString);
    } catch (error: any) {
      throw new Error(
        `Cannot fetch DIDs list from custom url '${url}'. Error: ${error.message}`
      );
    }
  } else {
    DidsList = localDidFile;
  }
  return DidsList;
};
