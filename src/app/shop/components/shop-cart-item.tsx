import ShopCartObj from "../types/shop-cart-obj";
import { addToCart, removeFromCart } from "../../lib/cartMethods";
import { euroFormat } from "../../lib/formatters";
import Icon from "@mdi/react";
import { mdiPlus, mdiMinus, mdiDelete } from "@mdi/js";

export function ShopCartItem({ props }: {props: ShopCartObj}){
  const {id, name, price, amount} = props
  return (
    <li className="my-3 mx-2">
      <div className="flex gap-4 justify-between">
        <div>
          <p>
            {name}
          </p>
          <div className="flex items-center gap-2">
            <button onClick={() => addToCart(props)} className="bg-blue-900 rounded-full p-1">
              <Icon path={mdiPlus} title="Increase amount" size={0.75}/>
            </button>
            <button onClick={() => removeFromCart(id)} className="bg-blue-900 rounded-full p-1">
              <Icon path={mdiMinus} title="Decrease amount" size={0.75}/>
            </button>
            <button onClick={() => removeFromCart(id, true)} className="bg-blue-900 rounded-full p-1">
              <Icon path={mdiDelete} title="Remove all" size={0.75}/>
            </button>
            <span>{amount} x {euroFormat.format(price)}</span>
          </div>
        </div>
        <div className="flex items-center">
          <p className="font-bold">{euroFormat.format(amount * price)}</p>
        </div>
      </div>
    </li>
  )
}