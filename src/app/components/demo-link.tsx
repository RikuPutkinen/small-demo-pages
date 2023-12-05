import Link from "next/link";
import Image, { StaticImageData } from "next/image";

export default function DemoLink({ imageSrc, linkURL, linkText } : { imageSrc: StaticImageData, linkURL: string, linkText: string }) {
  return (
    <div className="border border-neutral-700 w-fit flex flex-col">
      <Link href={linkURL} className="flex-grow flex justify-center items-center">
        <Image
          src={imageSrc}
          width={400}
          height={300}
          alt="" />
      </Link>
        <Link href={linkURL} className="underline bg-neutral-900 p-2">{linkText}</Link>
    </div>
  )
}