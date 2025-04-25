import SearchResult, {
  Props as SearchResultProps,
} from "../search/SearchResult.tsx";
import { AppContext, type SectionProps as SectionProps } from "@deco/deco";
import SearchResultWishlist from "../search/SearchResultWishlist.tsx";

export type Props = SearchResultProps;

async function loader(props: Props, req: Request, ctx: AppContext<any>) {
  if (!props.page || !props.page.products || props.page.products.length === 0) {
    return {
      ...props,
    };
  }

  const products = await ctx.invoke.vtex.loaders.intelligentSearch.productList({
    ids: props.page?.products.map((product) => product.productID),
  });

  return {
    ...props,
    page: {
      ...props.page,
      products,
    },
    isWishlist: true,
  };
}

export { loader };

function WishlistGallery(props: Props) {
  const isEmpty = !props.page || !props.page.products ||
    props.page.products.length === 0;

  if (isEmpty) {
    return (
      <div class="phone:container mx-4 mobile:mx-auto flex  flex-col  flex-grow h-[calc(100vh-543px)] ">
        <div class="mx-10 my-20 flex flex-col gap-4 justify-center items-center">
          <span class="font-medium text-2xl text-center">
            Sua Lista de Desejos está vazia
          </span>
          <span class="text-center">
            Faça login e adicione itens à sua lista de desejos para
            visualizá-los mais tarde. Eles serão exibidos aqui.
          </span>
        </div>
      </div>
    );
  }

  return (
    <section class="container my-14 px-5 mobile:px-0  flex flex-col justify-center items-center ">
      <h1 class="text-xl font-bold desktop:text-[32px] leading-8 desktop:leading-1053 text-orange-300 pb-10">
        Minha Lista de Desejo
      </h1>
      <SearchResultWishlist {...props} />
    </section>
  );
}

export default WishlistGallery;
