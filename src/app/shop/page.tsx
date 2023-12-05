"use client"

import ShopItem from "./components/shop-item"
import ShopItemObj from "./types/shop-item-obj"
import styles from "./shop.module.css"
import { useState } from "react"
import { CartView } from "./components/cart-view"


const shopItems: ShopItemObj[] = [
  {
    id: 1,
    name: "Pencil",
    price: 1.90,
    category: "Drawing"
  },
  {
    id: 2,
    name: "Eraser",
    price: 3.00,
    category: "Drawing"
  },
  {
    id: 3,
    name: "Paper",
    price: 4.50,
    category: "Drawing"
  },
  {
    id: 4,
    name: "Marker",
    price: 4.90,
    category: "Drawing"
  },
  {
    id: 5,
    name: "Brush",
    price: 3.00,
    category: "Painting"
  },
  {
    id: 6,
    name: "Water colors",
    price: 15.00,
    category: "Painting"
  },
  {
    id: 7,
    name: "Palette",
    price: 7.00,
    category: "Painting"
  }
]

const categories = [
  {
    name: "Drawing",
    amount: 4
  },
  {
    name: "Painting",
    amount: 3
  }
]

export default function Page() {
  const [items, setItems] = useState(shopItems)
  const [sorting, setSorting] = useState('name')
  const [filterQuery, setFilterQuery] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  function handleSortChange(e: React.ChangeEvent<HTMLSelectElement>){
    setSorting(e.target.value)
  }

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>){
    setFilterQuery(e.target.value)
  }

  function handleCategoryChange(e: React.ChangeEvent<HTMLInputElement>){
    const name = e.target.name
    if (e.target.checked) {
      setSelectedCategories([
        ...selectedCategories,
        name
      ])
    }
    else {
      setSelectedCategories(selectedCategories.filter(item => item !== name))
    }
  }

  const finalItems = items
    .filter((item: ShopItemObj) => item.name.toLowerCase().includes(filterQuery.toLowerCase()))
    .filter((item: ShopItemObj) => selectedCategories.length === 0 || item.category && selectedCategories.includes(item.category))
    .sort((a: ShopItemObj, b: ShopItemObj) => {
      const aName = a.name.toUpperCase()
      const bName = b.name.toUpperCase()
      let res = 0;

      if (sorting.startsWith("name")){
        if (aName < bName) res = -1
        else if (aName > bName) res = 1
      }
      else if (sorting.startsWith("price")){
        if (a.price < b.price) res = -1
        else if (a.price > b.price) res = 1
      }

      if (sorting.endsWith("-reverse")) return res * -1
      else return res
    })

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-2">
        <h1 className="mb-4 text-3xl">Shop</h1>
        <CartView/>
      </div>
      <div className="grid grid-cols-[220px_1fr] gap-2">
        <div className="bg-neutral-800 p-1 rounded-md">
          <label htmlFor="filter-query">Filter by name</label>
          <input type="text" id="filter-query" value={filterQuery} onChange={handleInputChange} placeholder="Filter" className="w-full"/>
          <ul className="mt-4">
            <p>Filter by category</p>
            {categories.map(item => {
              return (
                <li key={item.name} className="flex justify-between m-2">
                  <label htmlFor={item.name}>{item.name}<span className="ml-3 text-neutral-300 italic">{item.amount}</span></label>
                  <input type="checkbox" name={item.name} id={item.name} onChange={handleCategoryChange}></input>
                </li>
                )
            })}
          </ul>
        </div>
        <div className="grid grid-col gap-2">
          <select value={sorting} onChange={handleSortChange} className="bg-neutral-800 justify-self-end p-1 rounded-sm">
            <option value="name">Name (a-z)</option>
            <option value="name-reverse">Name (z-a)</option>
            <option value="price">Lowest price</option>
            <option value="price-reverse">Highest price</option>
          </select>
          <ul className={styles.item_grid}>
            {finalItems.map(item => {
              return <ShopItem key={item.id} props={item}/>
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}