import { useEffect } from "preact/hooks";

interface Props {
  src?: string;
}

const runOnMount = () => {
  globalThis.onload = () => {
    const iFrame = document.getElementById("proxy-loader") as HTMLIFrameElement;
    if (!iFrame) {
      return console.error("Couldn't find iframe");
    }
  };
};

const onLoad = (event) => {
  const url = (document.getElementById("proxy-loader") as HTMLIFrameElement)?.contentWindow.location.href;
  console.log({ event, url })
}

export default function ProxyIframe({ src }: Props) {
  useEffect(() => {
    runOnMount();
  }, []);

  return (
    <>
      <iframe
        id="proxy-loader"
        style="min-height:500px;width:100%;border:none;overflow:hidden"
        src={src}
        className={"min-h-[calc(100vh-300px)] h-fit "}
        onload={onLoad}
      ></iframe>
    </>
  );
}

