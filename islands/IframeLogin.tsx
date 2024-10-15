import { useEffect } from "preact/hooks";
import { cssContent } from "../static/signaturesLogin.ts";

interface Props {
  src?: string;
}

const runOnMount = (cssLink: string) => {
  globalThis.onload = () => {
    const iFrame = document.getElementById("proxy-loader") as HTMLIFrameElement;
    if (!iFrame) {
      return console.error("Couldn't find iframe");
    }

    // Adiciona o link para o CSS dentro do iframe após o carregamento
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = cssLink;
    iFrame.contentDocument?.head.appendChild(link); // Insere o link do CSS no <head> do iframe
  };
};

const onLoad = (event) => {
  const url = (document.getElementById("proxy-loader") as HTMLIFrameElement)?.src;
  console.log({ event, url })
}

export default function ProxyIframe({ src }: Props) {
  useEffect(() => {
    // Passe o caminho do CSS para o iframe
    runOnMount(cssContent);
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

