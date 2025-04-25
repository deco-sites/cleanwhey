import { ProductDetailsPage } from "apps/commerce/types.ts";
import type { Product } from "apps/commerce/types.ts";
import ImageGallerySlider from "../../components/product/Gallery.tsx";
import ProductInfo from "../../components/product/ProductInfo.tsx";
import Breadcrumb from "../../components/ui/Breadcrumb.tsx";
import { clx } from "../../sdk/clx.ts";

export interface Props {
  /** @title Integration */
  page: ProductDetailsPage | null;
  products: Product[] | null;
}

export default function ProductDetails({ page, products }: Props) {
  /**
   * Rendered when a not found is returned by any of the loaders run on this page
   */

  if (!page) {
    return (
      <div class="w-full flex justify-center items-center py-28">
        <div class="flex flex-col items-center justify-center gap-6">
          <span class="font-medium text-2xl">Page not found</span>
          <a href="/" class="btn no-animation">
            Go back to Home
          </a>
        </div>
      </div>
    );
  }

  return (
    <div class="container flex flex-col gap-4 mobile:gap-5 w-full py-4 desktop:py-5 px-5 desktop:px-0 phone:px-2 max-w-[1216px] mx-auto">
      <Breadcrumb itemListElement={page.breadcrumbList.itemListElement} />

      <div
        class={clx(
          "container grid",
          "grid-cols-1 gap-2 py-0 desktop:grid-cols-5 desktop:gap-6"
        )}
      >
        <div class="desktop:col-span-3 desktop:pr-12">
          <ImageGallerySlider page={page} />
        </div>
        <div class="desktop:col-span-2 desktop:pl-6 desktop-sm:pl-12 desktop:border-l desktop:border-gray-100">
          <ProductInfo page={page} products={products} />
        </div>
      </div>
    </div>
  );
}

export function LoadingFallback() {
  return (
    <div
      style={{ height: "710px" }}
      class="w-full flex justify-center items-center"
    >
      <span class="loading loading-spinner" />
    </div>
  );
}
