import type { Color, RichText } from "apps/admin/widgets.ts";

export interface Titles {
  BgColor: Color;
  title?: RichText;
  subTitle?: RichText;
}

function Banner({ subTitle, title, BgColor }: Titles) {
  return (
    <div
      class="container flex flex-col px-6 py-5 mt-5"
      style={{ background: BgColor }}
    >
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
  );
}
export default Banner;
