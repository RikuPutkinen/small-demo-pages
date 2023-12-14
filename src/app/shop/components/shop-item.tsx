import Image from "next/image";
import Icon from '@mdi/react';
import { mdiCartPlus } from "@mdi/js";

import ShopItemObj from "../../types/shop-item-obj";
import placeHolder from "../../../../public/placeholder_dark_400.png";
import { addToCart } from "../../lib/cartMethods";
import { euroFormat } from "../../lib/formatters";

export default function ShopItem({ props } : { props: ShopItemObj}){
  const { name, price } = props;

  return (
    <li className="border border-neutral-700 p-2 rounded-md">
      <Image
        src={placeHolder}
        width={400} 
        height={300}
        alt=""
      />
      <div className="flex justify-between mt-1">
        <div>
          <p>{name}</p>
          <p>{euroFormat.format(price)}</p>
        </div>
        <button className="bg-blue-900 self-center p-2 rounded-md" onClick={() => addToCart(props)}>
          <Icon path={mdiCartPlus} 
            title="Add to cart"
            size={1}
          />
        </button>
      </div>
    </li>
  )
}