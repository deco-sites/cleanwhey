import { useEffect } from "preact/hooks";

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

export default function ProxyIframe({ src }: { src?: string }) {
  useEffect(() => {
    // Passe o caminho do CSS para o iframe
    runOnMount("../static/signaturesLogin.ts");
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

