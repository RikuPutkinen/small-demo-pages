import Link from 'next/link'
import DemoLink from './components/demo-link'
import pricingThumbnail from '../../public/pricing-img.png'
import { StaticImageData } from 'next/image'

interface demoDataObj {
  imageSrc: StaticImageData,
  linkURL: string,
  linkText: string
}

const demoData: demoDataObj[] = [
  {
    imageSrc: pricingThumbnail,
    linkURL: "/pricing",
    linkText: "Pricing"
  }
]

export default function Home() {
  return (
    <main className='p-4'>
      <h1 className='text-3xl text-center'>Small demo pages</h1>
      <p className='text-center'>One page projects grouped in this website.</p>

      <div>
        {demoData.map(demo => {
          return <DemoLink imageSrc={demo.imageSrc} linkURL={demo.linkURL} linkText={demo.linkText} key={demo.linkText} />
        })}
      </div>
    </main>
  )
}