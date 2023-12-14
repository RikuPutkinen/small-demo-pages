import { ShopCartItem } from "./shop-cart-item"
import { useEffect, useState } from "react"

import { mdiCart } from "@mdi/js"
import Icon from "@mdi/react"
import ShopCartObj from "../../types/shop-cart-obj"
import { getCartItems, clearCart } from "../../lib/cartMethods"
import { euroFormat } from "../../lib/formatters"
import Link from "next/link"

export function CartView(){
  const [cartItems, setCartItems] = useState(() => getCartItems())
  const [isOpen, setIsOpen] = useState(false)

  function updateCart() {
    setCartItems(() => getCartItems())
  }

  function handleClick() {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    window.addEventListener("storage", updateCart)
    
    return () => {
      window.removeEventListener("storage", updateCart)
    }
  }, [cartItems])

  const totalPrice = cartItems.reduce((prev, curr) => {
    return prev + curr.amount * curr.price
  }, 0)

  return (
    <div>
      <button className="bg-blue-900 p-2 rounded-md" onClick={handleClick}>
        <Icon path={mdiCart} title="Show cart" size={1.5} />
      </button>
      <div className={`absolute bg-neutral-800 right-4 border border-neutral-500 ${!isOpen ? 'hidden' : ''}`}>
        {cartItems.length === 0 ?
          <p className="m-2">The cart is empty</p> :
          <>
            <ul>
              {cartItems.map((item: ShopCartObj) => <ShopCartItem key={item.id} props={item}/>)}
            </ul>
            <div className="border-t border-neutral-500 flex justify-between m-2 pt-1">
              <p>Total price:</p>
              <p className="font-bold">{euroFormat.format(totalPrice)}</p>
            </div>
            <div className="flex justify-between">
              <button className="bg-blue-950 p-1 rounded-md self-end m-1" onClick={clearCart}>Empty cart</button>
              <Link href="/checkout" className="bg-blue-900 p-1 rounded-md self-end m-1">To checkout &gt;</Link>
            </div>
          </>
        }
      </div>
    </div>
  )
}