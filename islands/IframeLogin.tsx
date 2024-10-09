interface Props {
  src?: string;
}

const runOnMount = () => {
  globalThis.onload = () => {
    const iFrame = document.getElementById("proxy-loader") as HTMLIFrameElement;
    if (!iFrame) {
      return console.error("Couldn't find iframe");
    }
    iFrame.height = `${iFrame.contentWindow?.document.body.scrollHeight}`;
  };
};

export default function ProxyIframe({ src }: Props) {
  return (
    <>
      <script
        dangerouslySetInnerHTML={{ __html: `(${runOnMount})();` }}
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
