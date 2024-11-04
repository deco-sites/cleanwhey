import { ProductDetailsPage } from "apps/commerce/types.ts";
import Image from "apps/website/components/Image.tsx";
import ProductImageZoom from "./ProductImageZoom.tsx";
import Icon from "../ui/Icon.tsx";
import Slider from "../ui/Slider.tsx";
import { clx } from "../../sdk/clx.ts";
import { useId } from "../../sdk/useId.ts";
// import page from "deco/blocks/page.tsx";
import { useOffer } from "../../sdk/useOffer.ts";
import { Pix } from "../../loaders/BusnissRule/Pix.ts";

export interface Props {
  /** @title Integration */
  page: ProductDetailsPage | null;
}

const WIDTH = 650;
const HEIGHT = 650;
const ASPECT_RATIO = `${WIDTH} / ${HEIGHT}`;

/**
 * @title Product Image Slider
 * @description Creates a three columned grid on destkop, one for the dots preview, one for the image slider and the other for product info
 * On mobile, there's one single column with 3 rows. Note that the orders are different from desktop to mobile, that's why
 * we rearrange each cell with col-start- directives
 */
export default function GallerySlider(props: Props) {
  const id = useId();
  const zoomId = `${id}-zoom`;

  if (!props.page) {
    throw new Error("Missing Product Details Page Info");
  }
  const { page } = props;

  const { product } = page;
  const { url } = product;
  const {
    page: {
      product: { offers, isVariantOf, image },
    },
  } = props;

  const { price = 0, listPrice, availability, salePrice } = useOffer(offers);

  // const percent = listPrice && price
  //   ? Math.round(((listPrice - price) / listPrice) * 100)
  //   : 0;

  // Filter images when image's alt text matches product name
  // More info at: https://community.shopify.com/c/shopify-discussions/i-can-not-add-multiple-pictures-for-my-variants/m-p/2416533
  const groupImages = isVariantOf?.image ? image : [];
  // const filtered = groupImages.filter((img) => img.alternateName);
  // const images = groupImages.length > 0 ? groupImages : [];
  const inStock = availability === "https://schema.org/InStock";

  const pixObj = product.isVariantOf?.hasVariant
    .filter((value) => value.url == url)[0]
    .offers?.offers[0].priceSpecification.filter(
      (value) => value.name?.toLowerCase() == "pix"
    )[0];

  const off = listPrice && price != listPrice && (listPrice * 100) / price;

  const offsalePrice =
    salePrice &&
    salePrice != listPrice &&
    listPrice &&
    (salePrice * 100) / listPrice;
  return (
    <>
      <div
        id={id}
        class="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-[min-content_1fr] gap-5"
      >
        {/* Image Slider */}
        <div class="col-start-1 col-span-1 sm:col-start-2">
          <div class="relative h-min flex-grow">
            {inStock && offsalePrice && off != 0 && (
              <span
                class={clx(
                  "absolute top-0 right-2 flex items-center justify-center leading-4 text-center bg-red-300 rounded-t-lg text-white h-[44px] w-[52px] max-w-[52px] text-base uppercase font-bold after:content-[''] after:top-full after:border-l-[25px] after:border-r-[25px] after:border-l-transparent after:border-r-transparent after:border-t-[11px]  after:border-t-red-300 after:absolute",
                  "opacity-1",
                  "w-fit"
                )}
              >
                {-(offsalePrice - 100) % 1 < 0.5
                  ? Math.floor(-(offsalePrice - 100)) + "% OFF"
                  : Math.ceil(-(offsalePrice - 100)) + "% OFF"}
              </span>
            )}
            <Slider class="carousel carousel-center gap-6 w-full">
              {props.page.product.image?.map((img, index) => (
                <Slider.Item index={index} class="carousel-item w-full">
                  <Image
                    class="w-full"
                    sizes="(max-width: 640px) 100vw, 40vw"
                    style={{ aspectRatio: ASPECT_RATIO }}
                    src={img.url!}
                    alt={img.alternateName}
                    width={WIDTH}
                    height={HEIGHT}
                    // Preload LCP image for better web vitals
                    preload={index === 0}
                    loading={index === 0 ? "eager" : "lazy"}
                  />
                </Slider.Item>
              ))}
            </Slider>

            <Slider.PrevButton
              class="no-animation absolute left-2 top-1/2 btn btn-circle btn-outline disabled:invisible"
              disabled
            >
              <Icon id="chevron-right" class="rotate-180" />
            </Slider.PrevButton>
            {groupImages && groupImages.length > 0 && (
              <Slider.NextButton
                class="no-animation absolute right-2 top-1/2 btn btn-circle btn-outline disabled:invisible"
                disabled={groupImages.length < 2}
              >
                <Icon id="chevron-right" />
              </Slider.NextButton>
            )}

            {/* <div class="absolute top-2 right-2 bg-base-100 rounded-full">
              <label class="btn btn-ghost hidden sm:inline-flex" for={zoomId}>
                <Icon id="pan_zoom" />
              </label>
            </div> */}
          </div>
        </div>

        {/* Dots */}
        <div class="col-start-1 col-span-1">
          <ul
            class={clx(
              "carousel carousel-center",
              "sm:carousel-vertical",
              "gap-2"
            )}
            style={{ maxHeight: "600px" }}
          >
            {props.page.product.image?.map((img, index) => (
              <li class="carousel-item w-[72px] h-[72px]">
                <Slider.Dot index={index}>
                  <Image
                    style={{ aspectRatio: "1 / 1" }}
                    class="group-disabled:border-orange-300 border-gray-200 border rounded-lg object-cover w-full h-full"
                    width={72}
                    height={72}
                    src={img.url!}
                    alt={img.alternateName}
                  />
                </Slider.Dot>
              </li>
            ))}
          </ul>
        </div>

        <Slider.JS rootId={id} />
      </div>
      {groupImages && groupImages?.length > 0 && (
        <ProductImageZoom
          id={zoomId}
          images={groupImages}
          width={700}
          height={Math.trunc((700 * HEIGHT) / WIDTH)}
        />
      )}
    </>
  );
}
