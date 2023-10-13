import './globals.css'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Small Demo Pages',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <header className='bg-neutral-950 border-b-2 border-neutral-700'>
          <div className='text-xl p-2'>
            <Link href='/'>Small Demo Pages</Link>
          </div>
        </header>
        {children}
      <footer className='text-center bg-neutral-950 border-t-2 border-neutral-700 mt-auto p-4'>
        <a href='https://github.com/RikuPutkinen/small-demo-pages' className='underline'>Source code on GitHub</a>
        <p>2023 Riku Putkinen</p>
      </footer>
      </body>
    </html>
  )
}
