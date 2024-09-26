import type { Product } from "apps/commerce/types.ts";
import { mapProductToAnalyticsItem } from "apps/commerce/utils/productToAnalyticsItem.ts";
import Image from "apps/website/components/Image.tsx";
import { clx } from "../../sdk/clx.ts";
import { formatPrice } from "../../sdk/format.ts";
import { relative } from "../../sdk/url.ts";
import { useOffer } from "../../sdk/useOffer.ts";
import { useSendEvent } from "../../sdk/useSendEvent.ts";
// import { useVariantPossibilities } from "../../sdk/useVariantPossiblities.ts";
import WishlistButton from "../wishlist/WishlistButton.tsx";
import AddToCartButton from "./AddToCartButton.tsx";
// import { Ring } from "./ProductVariantSelector.tsx";
import { useId } from "../../sdk/useId.ts";
import { Pix } from "../../loaders/BusnissRule/Pix.ts";
import { formatPix } from "../../sdk/formatPix.tsx";

interface Props {
  product: Product;
  /** Preload card image */
  preload?: boolean;
  productName?: string;

  /** @description used for analytics event */
  itemListName?: string;

  /** @description index of the product card in the list */
  index?: number;

  class?: string;
  isFeatured?: boolean;
  pix: Pix;
}

const WIDTH = 287;
const HEIGHT = 287;
const ASPECT_RATIO = `${WIDTH} / ${HEIGHT}`;

function ProductCard({
  product,
  preload,
  itemListName,
  index,
  productName,
  isFeatured,
  pix,
  class: _class,
}: Props) {
  const id = useId();

  const { url, image: images, offers, isVariantOf } = product;

  const title = isVariantOf?.name ?? product.name;
  const [front, back] = images ?? [];

  const {
    listPrice,
    price,
    seller = "1",
    availability,
    installments,
  } = useOffer(offers);

  
  const inStock = availability === "https://schema.org/InStock";
  //const possibilities = useVariantPossibilities(hasVariant, product);

  // const firstSkuVariations = Object.entries(possibilities)[0];
  // const variants = Object.entries(firstSkuVariations[1] ?? {});
  const relativeUrl = relative(url);
  // const percent = listPrice && price
  //   ? Math.round(((listPrice - price) / listPrice) * 100)
  //   : 0;

  const pricePix = formatPix(price ?? 0, pix.porcentagePix, pix.valueMax);

  const item = mapProductToAnalyticsItem({ product, price, listPrice, index });

  {
    /* Add click event to dataLayer */
  }
  const event = useSendEvent({
    params: {
      item_list_name: itemListName,
      items: [item],
    },
  });

  const variantName = title
    ?.toLowerCase()
    .replace("cor:", "")
    .replace("tamanho:", "")
    .replace(/sabor:[^;]*/g, "")
    .replace(/;/g, "")
    .trim();

  const nome =
    productName == title
      ? title?.toLowerCase().replace("tamanho:", "")
      : title?.toLowerCase() == variantName
      ? `${title?.toLowerCase()?.replace("Tamanho:", "")}  - ${productName
          ?.toLowerCase()
          ?.replace("tamanho:", "")
          .replace(/sabor:[^;]*/g, "")
          .replace(";", "")
          .replace("cor:", "")}`.replace("Tamanho:", "")
      : `${productName?.toLowerCase()} ${
          variantName?.toLowerCase()
            ? `- ${variantName?.toLowerCase()?.replace("tamanho:", "")}`
            : ""
        }`;
  const pixObj = product.isVariantOf?.hasVariant
    .filter((value) => value.url == url)[0]
    .offers?.offers[0].priceSpecification.filter(
      (value) => value.name?.toLowerCase() == "pix"
    )[0];

  console.log(
    "price " + price,
    "listPrice " + listPrice,
    "pix " + pixObj?.price
  );

  const off =
    pixObj?.price &&
    pixObj?.price != price &&
    price &&
    (pixObj.price * 100) / price;

  return (
    <div
      {...event}
      class={clx(
        "card card-compact group bg-white hover:bg-[#F7EDDF] text-sm grid grid-rows-[auto_1fr_auto]",
        _class
      )}
      id={id}
    >
      <figure
        class={clx("relative bg-base-200", "rounded border border-transparent")}
        style={{ aspectRatio: ASPECT_RATIO }}
      >
        {/* Product Images */}
        <a
          href={relativeUrl}
          aria-label="view product"
          class={clx(
            "absolute top-0 left-0",
            "grid grid-cols-1 grid-rows-1",
            "w-full",
            !inStock && "opacity-70"
          )}
        >
          <Image
            src={front.url!}
            alt={front.alternateName}
            width={WIDTH}
            height={HEIGHT}
            style={{ aspectRatio: ASPECT_RATIO }}
            class={clx(
              "object-cover",
              "rounded w-full",
              "col-span-full row-span-full"
            )}
            sizes="(max-width: 640px) 50vw, 20vw"
            preload={preload}
            loading={preload ? "eager" : "lazy"}
            decoding="async"
          />
          <Image
            src={back?.url ?? front.url!}
            alt={back?.alternateName ?? front.alternateName}
            width={WIDTH}
            height={HEIGHT}
            style={{ aspectRatio: ASPECT_RATIO }}
            class={clx(
              "object-cover",
              "rounded w-full",
              "col-span-full row-span-full",
              "transition-opacity opacity-0 lg:group-hover:opacity-100"
            )}
            sizes="(max-width: 640px) 50vw, 20vw"
            loading="lazy"
            decoding="async"
          />
        </a>

        {/* Wishlist button */}
        <div class="absolute top-0 left-0 w-full flex items-center justify-between">
          {/* Discounts */}

          {inStock && off && off != 0 ? (
            <span
              class={clx(
                "absolute top-0 right-0 flex items-center justify-center leading-4 text-center bg-red-300 rounded-t-lg text-white h-[44px] w-[52px] max-w-[52px] text-base uppercase font-bold after:content-[''] after:top-full after:border-l-[25px] after:border-r-[25px] after:border-l-transparent after:border-r-transparent after:border-t-[10px]  after:border-t-red-300 after:absolute",
                "opacity-1",
                "w-fit"
              )}
            >
              {Math.ceil(-(off - 100)) + "% OFF"}
            </span>
          ) : inStock && pix?.porcentagePix != 0 ? (
            <span
              class={clx(
                "absolute top-0 right-0 flex items-center justify-center leading-4 text-center bg-red-300 rounded-t-lg text-white h-[44px] w-[52px] max-w-[52px] text-base uppercase font-bold after:content-[''] after:top-full after:border-l-[25px] after:border-r-[25px] after:border-l-transparent after:border-r-transparent after:border-t-[10px]  after:border-t-red-300 after:absolute",
                "opacity-1",
                "w-fit"
              )}
            >
              {pix?.porcentagePix * 100 + "% PIX"}
            </span>
          ) : null}
        </div>

        <div class="absolute top-0 left-0">
          <WishlistButton item={item} variant="icon" />
        </div>
      </figure>
      <a
        href={relativeUrl}
        class="pt-5 text-center flex flex-col justify-between"
      >
        <span
          class={`font-bold text-gray-400 text-base md:text-lg text-center capitalize`}
        >
          {isVariantOf?.name != undefined
            ? isVariantOf?.name.toLowerCase().includes("combo") ||
              isVariantOf?.name.toLowerCase().includes("immunoferrin") ||
              isVariantOf?.name.toLowerCase().includes("caneca")
              ? isVariantOf?.name
              : isVariantOf.name == product.name
              ? isVariantOf.name
              : isVariantOf?.name
                  ?.replace("Tamanho:Sachê 30g;Sabor:Sem Sabor", "")
                  .replace("Tamanho:Sachê 30g;Sabor:Mocaccino", "") +
                " " +
                product.name
                  ?.split(";")[0]
                  .replace("Tamanho:", "")
                  .replace("Cor:", "")
                  .replace(";", "")
            : productName?.toLowerCase().includes("combo") ||
              productName?.toLowerCase().includes("immunoferrin") ||
              productName?.toLowerCase().includes("caneca")
            ? productName
            : nome?.replace("tamanho:sachê 30g;sabor:sem sabor", "")}
        </span>
        {!isFeatured && (
          <>
            {inStock ? (
              <>
                <div class="mb-6 flex flex-col items-center justify-center gap-1 pt-4">
                  <span class="line-through text-sm font-normal text-gray-300">
                    De {formatPrice(listPrice, offers?.priceCurrency)}
                  </span>
                  {price != listPrice && (
                    <span class="pl-2.5 text-sm font-normal text-gray-300">
                      por: {formatPrice(price, offers?.priceCurrency)} ou
                    </span>
                  )}
                  <span class="text-xl font-bold flex gap-2 text-gray-400 items-center">
                    {formatPrice(pricePix)}
                    <p class="text-sm text-gray-300">no PIX</p>
                  </span>

                  <span class="text-gray-400 text-md font-semibold">
                    {installments}
                  </span>
                </div>
              </>
            ) : (
              <>
                <div class="flex-grow" />
                <span class=" text-2xl text-center font-bold min-h-[132px] md:min-h-[112px] flex items-center flex-wrap justify-center">
                  Produto Indisponível
                </span>
                <div class="flex-grow" />
              </>
            )}
          </>
        )}
      </a>

      <div class="flex-grow my-2.5" />
      <div class={`flex flex-col gap-2.5`}>
        {isFeatured && (
          <div class="flex flex-col text-center items-center  justify-center gap-1">
            {listPrice !== pricePix && (
              <span class="line-through text-sm font-normal text-gray-300">
                {formatPrice(listPrice, offers?.priceCurrency)}
              </span>
            )}
            <span class="text-lg font-bold flex gap-2 text-gray-400 items-center">
              {formatPrice(pricePix)}
              <p class="text-xs text-gray-300">no PIX</p>
            </span>

            <span class="text-gray-400 text-md font-semibold">
              {installments}
            </span>
          </div>
        )}
        {inStock ? (
          <AddToCartButton
            product={product}
            seller={seller}
            item={item}
            ctaText="ADICIONAR À SACOLA"
            class={`${isFeatured ? "px-1.5 md:text-sm mt-2.5" : ""} ${clx(
              "btn uppercase",
              "btn-outline rounded-lg border-none px-0 no-animation w-full",
              "bg-orange-300 text-white h-14 font-semibold  md:text-sm lg:text-xs xl:text-sm text-xs  flex-nowrap",
              "hover:bg-orange-300"
            )}`}
          />
        ) : (
          <a
            href={relativeUrl}
            class={`${clx(
              "btn uppercase shrink",
              "btn-outline rounded-lg border-none px-0 no-animation w-full",
              "bg-orange-300 text-white h-14 font-semibold  md:text-sm lg:text-xs xl:text-sm text-xs flex-nowrap",
              "hover:bg-orange-300"
            )}`}
          >
            AVISE-ME
          </a>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
