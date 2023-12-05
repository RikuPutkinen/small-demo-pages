"use client"

import DemoLink from './components/demo-link'
import pricingThumbnail from '../../public/pricing-img.png'
import shopThumbnail from '../../public/shop-img.png'
import { StaticImageData } from 'next/image'

interface DemoDataObj {
  imageSrc: StaticImageData,
  linkURL: string,
  linkText: string
}

const demoData: DemoDataObj[] = [
  {
    imageSrc: pricingThumbnail,
    linkURL: "/pricing",
    linkText: "Pricing"
  },
  {
    imageSrc: shopThumbnail,
    linkURL: "/shop",
    linkText: "Shop"
  }
]

export default function Home() {
  return (
    <main className='p-4'>
      <h1 className='text-3xl text-center'>Small demo pages</h1>
      <p className='text-center'>One page projects grouped in this website.</p>

      <div className='grid gap-4 mt-8 grid-cols-[repeat(auto-fill,_400px)]'>
        {demoData.map(demo => {
          return <DemoLink imageSrc={demo.imageSrc} linkURL={demo.linkURL} linkText={demo.linkText} key={demo.linkText} />
        })}
      </div>
    </main>
  )
}