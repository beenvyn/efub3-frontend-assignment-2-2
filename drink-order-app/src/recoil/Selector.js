import { selector } from "recoil";
import { CartItemAtom } from "./Atom";

export const TotalPriceSelector = selector({
  key: "TotalPriceSelector",
  get: ({ get }) => {
    const cartItem = get(CartItemAtom);
    return cartItem
      .reduce((acc, cur) => acc + cur.price * cur.quantity, 0)
      .toLocaleString();
  },
});
