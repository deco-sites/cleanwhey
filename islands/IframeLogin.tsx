import { useEffect } from "preact/hooks";

interface Props {
  src?: string;
}

const applyCssToIframe = (cssString: string) => {
  const iFrame = document.getElementById("proxy-loader") as HTMLIFrameElement;
  if (!iFrame || !iFrame.contentDocument) {
    return console.error("Couldn't find iframe or access its content");
  }

  // Adiciona o bloco de estilos ao <head> do iframe
  const style = document.createElement("style");
  style.type = "text/css";
  style.appendChild(document.createTextNode(cssString));
  iFrame.contentDocument.head.appendChild(style);
};

export default function ProxyIframe({ src }: { src?: string }) {
  useEffect(() => {
    // Passe o caminho do CSS para o iframe
    applyCssToIframe("../static/signaturesLogin.ts");
  }, []);

  return (
    <>
      <iframe
        id="proxy-loader"
        style="width:100%;border:none;overflow:hidden"
        src={src}
        className={"min-h-[calc(100vh-300px)] h-fit "}
      ></iframe>
    </>
  );
}

