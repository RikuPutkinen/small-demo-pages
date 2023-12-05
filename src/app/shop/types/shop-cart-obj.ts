import ShopItemObj from "./shop-item-obj";

export default interface ShopCartObj extends ShopItemObj {
  amount: number
}