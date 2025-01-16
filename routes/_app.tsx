import { asset, Head } from "$fresh/runtime.ts";
import { defineApp } from "$fresh/server.ts";
import { useScript as useScript } from "@deco/deco/hooks";
import { Context as Context } from "@deco/deco";
const serviceWorkerScript = () =>
  addEventListener("load", () =>
    navigator && navigator.serviceWorker &&
    navigator.serviceWorker.register("/sw.js"));
export default defineApp(async (_req, ctx) => {
  const revision = await Context.active().release?.revision();
  return (
    <>
      {/* Include Icons and manifest */}
      <Head>
        {/* Enable View Transitions API */}
        <style
          dangerouslySetInnerHTML={{
            __html:
              `@view-transition { navigation: auto; } html { scroll-behavior: smooth }`,
          }}
        />

        {/* Tailwind v3 CSS file */}
        <link
          href={asset(`/styles.css?revision=${revision}`)}
          rel="stylesheet"
        />

        {/* Web Manifest */}
        <link rel="manifest" href={asset("/site.webmanifest")} />

        <link rel="icon" type="image/png" href={asset("/favicon-16x16.png")} />
      </Head>

      {/* Rest of Preact tree */}
      <div class="font-lato">
        <ctx.Component />
      </div>      {/* <!-- Google tag (gtag.js) -->  */}

      <script
        dangerouslySetInnerHTML={{
          __html: `document.addEventListener('DOMContentLoaded', () => {
              setTimeout(initGTAG, 7000);
          });
          document.addEventListener('scroll', initGTAGOnEvent);
          document.addEventListener('mousemove', initGTAGOnEvent);
          document.addEventListener('touchstart', initGTAGOnEvent);
          
          function initGTAGOnEvent(e) {
              initGTAG();
              e.currentTarget.removeEventListener(e.type, initGTAGOnEvent);
          }
          
          function initGTAG() {
              if (window.gtagDidInit) {
                  return;
              }
              window.gtagDidInit = true;

              const s = document.createElement('script');
              s.type = 'text/javascript';
              s.async = true;
              s.src = 'https://www.googletagmanager.com/gtag/js?id=GTM-MSLV5T9R';
              document.head.appendChild(s);

              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GTM-MSLV5T9R');
          }`,
        }}
      />

      <script
        type="module"
        dangerouslySetInnerHTML={{ __html: useScript(serviceWorkerScript) }}
      />
    </>
  );
});
