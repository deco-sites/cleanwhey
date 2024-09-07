import { type AppContext } from "apps/vtex/mod.ts";
import { type CartSubmitActions } from "../../../actions/minicart/submit.ts";
import { cartFrom } from "./loader.ts";

const actions: CartSubmitActions<AppContext> = {
  addToCart: async ({ addToCart, customizationData }, req, ctx) => {
    const response = await ctx.invoke(
      "vtex/actions/cart/addItems.ts",
      // @ts-expect-error I don't know how to fix this
      addToCart,
    );

    console.log("customization", customizationData);

    if (customizationData) {
      const value = customizationData.value;
      // const orderFormID = customizationData.orderFormID;

      console.log("value", value);
    }

    return cartFrom(response, req.url);
  },
  setQuantity: async ({ items }, req, ctx) => {
    const response = await ctx.invoke(
      "vtex/actions/cart/updateItems.ts",
      {
        allowedOutdatedData: ["paymentData"],
        orderItems: items.map((quantity, index) => ({ quantity, index })),
      },
    );

    return cartFrom(response, req.url);
  },
  setCoupon: async ({ coupon }, req, ctx) => {
    const response = await ctx.invoke(
      "vtex/actions/cart/updateCoupons.ts",
      { text: coupon ?? undefined },
    );

    return cartFrom(response, req.url);
  },
};

export default actions;
