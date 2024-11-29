import type { Color, RichText } from "apps/admin/widgets.ts";

export interface Titles {
  BgColor: Color;
  title?: RichText;
  subTitle?: RichText;
}

function Titles({ subTitle, title, BgColor }: Titles) {
  return (
    <div style={{ background: BgColor }}>
      <div class="container flex flex-col px-6 py-5 mt-2.5">
        {title && (
          <h1>
            <span dangerouslySetInnerHTML={{ __html: title }} />
          </h1>
        )}
        {subTitle && (
          <h2>
            <span dangerouslySetInnerHTML={{ __html: subTitle }} />
          </h2>
        )}
      </div>
    </div>
  );
}
export default Titles;
