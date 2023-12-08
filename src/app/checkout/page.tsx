"use client"

import { useState } from "react"
import { getCartItems } from "../lib/cartMethods"
import { euroFormat } from "../lib/formatters"
import Link from "next/link"

type InfoType = {
  firstName: string,
  lastName: string,
  shippingAddress: string,
  zipCode: '' | number,
  city: string,
  phoneNumber: '' | number,
  emailAddress: string
}

export default function Page(){
  const [shippingInfo, setShippingInfo] = useState<InfoType>({
    firstName: '',
    lastName: '',
    shippingAddress: '',
    zipCode: '',
    city: '',
    phoneNumber: '',
    emailAddress: ''
  })

  const [cartItems, setCartItems] = useState(getCartItems())

  const totalPrice = cartItems.reduce((prev, curr) => {
    return prev + curr.amount * curr.price
  }, 0)

  function handleChange(e: React.ChangeEvent<HTMLInputElement>){
    setShippingInfo({
      ...shippingInfo,
      [e.target.name]: e.target.value
    })
  }

  function handleSubmit(e: React.FormEvent){
    e.preventDefault()
    const orderData = {
      items: cartItems,
      shippingInfo
    }
  }

  return (
    <>
      <h1 className="text-2xl p-6 pb-0">Checkout</h1>
      <div className="grid grid-cols-2 p-6">
        <div className="pr-3 border-r border-collapse border-neutral-600">
          <h2 className="mb-4 text-xl">Items</h2>
          <table className="grid grid-cols-[2fr_1fr_1fr_1fr]">
            <tr className="grid grid-cols-[subgrid] col-span-4 bg-neutral-800">
              <th>Name</th>
              <th>Price</th>
              <th>Amount</th>
              <th>Total</th>
            </tr>
            {cartItems.map(item => {
              return (
                <tr key={item.id} className="grid grid-cols-[subgrid] col-span-4">
                  <td>{item.name}</td>
                  <td className="text-right">{euroFormat.format(item.price)}</td>
                  <td className="text-right">{item.amount}</td>
                  <td className="text-right">{euroFormat.format(item.amount * item.price)}</td>
                </tr>
              )
            })}
            <tr className="bg-neutral-800 border-t grid grid-cols-[subgrid] col-span-4">
              <td className="font-bold">Total:</td>
              <td></td>
              <td></td>
              <td className="text-right font-bold">{euroFormat.format(totalPrice)}</td>
            </tr>
          </table>
          <Link href="/shop" className="underline">Return to store</Link>
        </div>
        <div className="pl-3 border-l border-neutral-600 border-collapse">
          <h2 className="mb-4 text-xl">Shipping Information</h2>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-2 my-1">
              <div className="flex flex-col gap-1">
                <label htmlFor="firstName" className="">First Name</label>
                <input id="firstName" name="firstName" className="bg-neutral-700 p-1 rounded-sm" value={shippingInfo.firstName} onChange={handleChange} required />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="lastName" className="">Last Name</label>
                <input id="lastName" name="lastName" className="bg-neutral-700 p-1 rounded-sm" value={shippingInfo.lastName} onChange={handleChange} required />
              </div>
            </div>
            <div className="flex flex-col gap-1 my-1">
              <label htmlFor="shippingAddress" className="">Shipping Address</label>
              <input id="shippingAddress" name="shippingAddress" className="bg-neutral-700 p-1 rounded-sm" value={shippingInfo.shippingAddress} onChange={handleChange} required />
            </div>
            <div className="grid grid-cols-2 gap-2 my-1">
              <div className="flex flex-col gap-1">
                <label htmlFor="zipCode" className="">Zip Code</label>
                <input id="zipCode" name="zipCode" type="tel" pattern="\d+" className="bg-neutral-700 p-1 rounded-sm" value={shippingInfo.zipCode} onChange={handleChange} required />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="city" className="">City</label>
                <input id="city" name="city" className="bg-neutral-700 p-1 rounded-sm" value={shippingInfo.city} onChange={handleChange} required />
              </div>
            </div>
            <div className="flex flex-col gap-1 my-1">
              <label htmlFor="phoneNumber" className="">Phone Number</label>
              <input id="phoneNumber" name="phoneNumber" type="tel" pattern="\d+" className="bg-neutral-700 p-1 rounded-sm" value={shippingInfo.phoneNumber} onChange={handleChange} required />
            </div>
            <div className="flex flex-col gap-1 my-1">
              <label htmlFor="emailAddress" className="">Email Address</label>
              <input id="emailAddress" name="emailAddress" type="email" className="bg-neutral-700 p-1 rounded-sm" value={shippingInfo.emailAddress} onChange={handleChange} required />
            </div>
            <div className="flex justify-end my-2">
              <button className="bg-blue-900 p-2 rounded-md">
                Place Order
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}