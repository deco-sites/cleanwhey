import { Head } from "$fresh/runtime.ts";
import { useScriptAsDataURI } from "@deco/deco/hooks";
import { context } from "@deco/deco";


declare global {
    interface Window {
        dataLayer: unknown[];
        gtmDidInit?: boolean;
    }
}

export const getGTMIdFromSrc = (src: string | undefined) => {
    const trackingId = src ? new URL(src).searchParams.get("id") : undefined;
    return trackingId;
};

interface TagManagerProps {
    trackingId: string;
    src?: string;
}

export function GoogleTagManager(props: TagManagerProps) {
    const { trackingId, src } = props;
    const id = src || trackingId;
    const hostname = src || "https://www.googletagmanager.com";
    const gtmSrc = new URL(`/gtm.js?id=${trackingId}`, hostname);
    const noscript = new URL(`/ns.html?id=${trackingId}`, hostname);

    return (
        <>
            <Head>
                <script id={`gtm-script-${id}`} dangerouslySetInnerHTML={{
                    __html: `document.addEventListener('DOMContentLoaded', () => {
                                setTimeout(initGTM, 7000);
                            });
                            document.addEventListener('scroll', initGTMOnEvent);
                            document.addEventListener('mousemove', initGTMOnEvent);
                            document.addEventListener('touchstart', initGTMOnEvent);
                            
                            function initGTMOnEvent(e) {
                                initGTM();
                                e.currentTarget.removeEventListener(e.type, initGTMOnEvent);
                            }
                            
                            function initGTM() {
                            console.log("inicio")
                                if (window.gtmDidInit) {
                                    return;
                                }
                                window.gtmDidInit = true;
                                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                                j=d.createElement(s);j.async=true;j.src=i;f.parentNode.insertBefore(j,f);
                                })(window,document,'script','dataLayer', '${gtmSrc.href}');
                            }`
                }} />
            </Head>

            <noscript>
                <iframe src={noscript.href} height="0" width="0" style="display:none;visibility:hidden" />
            </noscript>
        </>
    );
}

export function GTAG({ trackingId }: Pick<TagManagerProps, "trackingId">) {
    return (
        <Head>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${trackingId}`} />
            <script dangerouslySetInnerHTML={{
                __html: `window.dataLayer = window.dataLayer || [];
                        function gtag() { dataLayer.push(arguments); }
                        gtag("js", new Date());
                        gtag("config", "${trackingId}");`
            }} />
        </Head>
    );
}

export interface Props {
    trackingIds?: string[];
    googleAnalyticsIds?: string[];
    src?: string;
    disableAutomaticEventPush?: boolean;
}

export default function Analytics(
    { trackingIds, src, googleAnalyticsIds, disableAutomaticEventPush }: Props,
) {
    const isDeploy = !!context.isDeploy;
    const trackingId = getGTMIdFromSrc(src) ?? "";

    console.log("props", isDeploy, trackingId)

    return (
        <>
            {isDeploy && (
                <>
                    {trackingIds?.map((trackingId) => (
                        <GoogleTagManager src={src} trackingId={trackingId.trim()} />
                    ))}
                    {googleAnalyticsIds?.map((trackingId) => (
                        <GTAG trackingId={trackingId.trim()} />
                    ))}
                    {src && !trackingIds?.length && (
                        <GoogleTagManager src={src} trackingId={trackingId} />
                    )}
                </>
            )}

            {disableAutomaticEventPush !== true && (
                <script defer id="analytics-script" src={useScriptAsDataURI(snippet)} />
            )}
        </>
    );
}

const snippet = () => {
    globalThis.window.DECO.events.subscribe((event) => {
        globalThis.window.dataLayer = globalThis.window.dataLayer || [];
        if (
            !event ||
            !globalThis.window.dataLayer ||
            typeof globalThis.window.dataLayer.push !== "function"
        ) {
            return;
        }
        if (event.name === "deco") {
            globalThis.window.dataLayer.push({
                event: event.name,
                deco: event.params,
            });
            return;
        }
        globalThis.window.dataLayer.push({ ecommerce: null });
        globalThis.window.dataLayer.push({
            event: event.name,
            ecommerce: event.params,
        });
    });
};
