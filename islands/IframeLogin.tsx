import { useEffect } from "preact/hooks";
import { cssContent } from "../static/signaturesLogin.ts"; 

interface Props {
  src?: string;
}

const runOnMount = (customCss: string) => {
  globalThis.onload = () => {
    const iFrame = document.getElementById("proxy-loader") as HTMLIFrameElement;
    if (!iFrame) {
      return console.error("Couldn't find iframe");
    }
    iFrame.height = `${iFrame.contentWindow?.document.body.scrollHeight}`;

    // Adiciona o CSS ao iframe após o carregamento
    const style = document.createElement("style");
    style.textContent = customCss;
    iFrame.contentDocument?.head.appendChild(style); // Insere o CSS no <head> do iframe
  };
};

export default function ProxyIframe({ src }: Props) {
  useEffect(() => {
    runOnMount(cssContent);
  }, []);

  return (
    <>
      <script
        dangerouslySetInnerHTML={{ __html: `(${runOnMount.toString()})("${cssContent}");` }}
      ></script>
      <iframe
        id="proxy-loader"
        style="width:100%;border:none;overflow:hidden"
        src={src}
        className={"min-h-[calc(100vh-300px)] h-fit "}
        // onload='javascript:(function(o){o.style.height=o.contentWindow.document.body.scrollHeight+"px";}(this));'
      ></iframe>
    </>
  );
}
