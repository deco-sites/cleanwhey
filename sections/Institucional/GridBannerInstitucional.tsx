import { ImageWidget } from "apps/admin/widgets.ts";

export interface Banner {
  img: ImageWidget;
  link?: string;
  alt?: string;
}
interface Props {
  banners: Banner[];
}

export default function GridBannerInstitucional({ banners }: Props) {
  return (
    <>
      <div class={`grid desktop:grid-cols-3 grid-cols-1 gap-8 mb-8`}>
        {banners.map((banner) => (
          <a href={banner.link}>
            <img src={banner.img} alt={banner.alt} />
          </a>
        ))}
      </div>
    </>
  );
}
