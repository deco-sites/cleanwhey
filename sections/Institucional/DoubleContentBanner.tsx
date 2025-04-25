import { HTMLWidget, ImageWidget } from "apps/admin/widgets.ts";

export interface Props {
  leftContent: HTMLWidget;
  rightContent: ImageWidget;
}
export default function DoubleContentBanner(
  { leftContent, rightContent }: Props,
) {
  return (
    <>
      <div class="flex desktop:flex-row flex-col items-start gap-8 mb-8">
        <div
          class={"w-full desktop:min-w-[488px] max-w-[488px]"}
          dangerouslySetInnerHTML={{ __html: leftContent }}
        />
        <div class="w-full">
          <img src={rightContent} />
        </div>
      </div>
    </>
  );
}
