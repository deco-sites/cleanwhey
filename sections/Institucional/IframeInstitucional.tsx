interface Props {
    iframeLink: string;
    iframeWidth?: number;
    iframeHeight?: number;
}

const extractSrcFromIframe = (iframeString: string) => {
    const srcMatch = iframeString.match(/src="([^"]+)"/);
    return srcMatch ? srcMatch[1] : null;
};

export default function IframeInstitucional({iframeLink, iframeHeight, iframeWidth}: Props) {
    const src = extractSrcFromIframe(iframeLink);

    return (
        <section class="pt-4 pb-4">
            <div className="container">
                {src && (
                    <iframe class="max-w-full" src={src} width={iframeWidth != null ? iframeWidth : "905"} height={iframeHeight != null ? iframeHeight : "400"} style="border:0;border-radius: 10px" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                )}
            </div>
        </section>
    )
}