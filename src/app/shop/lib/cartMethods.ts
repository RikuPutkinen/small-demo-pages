import { storageAvailable } from "./storageAvailable";
import ShopCartObj from "../types/shop-cart-obj";
import ShopItemObj from "../types/shop-item-obj";


export function addToCart(shopItem: ShopItemObj){
  if (!storageAvailable("localStorage")) return
  const cart: ShopCartObj[] = JSON.parse(localStorage.getItem("cart") ?? "[]")
  const itemIndex = cart.findIndex(item => item.id === shopItem.id)
  
  let newCart: ShopCartObj[] = []
  if (itemIndex === -1) {
    newCart = [
      ...cart,
      {
        ...shopItem,
        amount: 1
      }
    ]
  }
  else {
    newCart = cart.map(item => {
      if (item.id === shopItem.id){
        return {
          ...item,
          amount: ++item.amount
        }
      }
      else return item
    })
  }

  localStorage.setItem("cart", JSON.stringify(newCart))
  window.dispatchEvent(new Event("storage"))
  console.log(`Added item ${shopItem.id} to cart.`)
  return null
}


export function removeFromCart(id: number, all=false){
  if (!storageAvailable("localStorage")) return
  const cart: ShopCartObj[] = JSON.parse(localStorage.getItem("cart") ?? "[]")
  const item = cart.find(item => item.id === id)
  if (!item) return

  let newCart: ShopCartObj[] = []
  if (item.amount === 1 || all === true){
    newCart = cart.filter(item => item.id !== id)
  }
  else{
    newCart = cart.map(item => {
      if (item.id === id){
        return {
          ...item,
          amount: --item.amount
        }
      }
      else return item
    })
  }

  localStorage.setItem("cart", JSON.stringify(newCart))
  window.dispatchEvent(new Event("storage"))
  return null
}


export function getCartItems(): ShopCartObj[]{
  if (!storageAvailable("localStorage")) return []
  const cart: ShopCartObj[] = JSON.parse(localStorage.getItem("cart") ?? "[]")
  return cart
}


export function clearCart(){
  if (!storageAvailable("localStorage")) return
  localStorage.removeItem("cart")
  window.dispatchEvent(new Event("storage"))
  return null
}