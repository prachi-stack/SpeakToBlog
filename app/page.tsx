 import Banner from '@/components/home/banner'
import HowItWorks from '@/components/home/how-it-works'
import Pricing from '@/components/home/pricing'
import { Dot } from 'lucide-react'
import React from 'react'

export default function Home() {
  return (
    <main className='mx-auto w-full inset-0 h-full bg-[radial-gradient(#e5e7eb_1px), transparent_1px] [backgorund-size:16px_16px]'>
       <Banner />

      <div className='flex items-center justify-center'>
        <Dot className='text-emerald-700' />
        <Dot className='text-emerald-700' />
        <Dot className='text-emerald-700' />
      </div>

      <HowItWorks />

      <div className='flex items-center justify-center'>
        <Dot className='text-emerald-700' />
        <Dot className='text-emerald-700' />
        <Dot className='text-emerald-700' />
      </div>

      <Pricing />

      <div className='flex items-center justify-center'>
        <Dot className='text-emerald-700' />
        <Dot className='text-emerald-700' />
        <Dot className='text-emerald-700' />
      </div>

      <footer className='bg-gray-200/20 flex h-20 py-24 px-12 z-20 relative overflow-hidden flex-col gap-2'>
        <p>All Rights Reserved, {new Date().getFullYear()}</p>
        <a href="https://www.linkedin.com/in/prachi-deopa-93abb4242/" target="_blank">Built by Prachi🚀 </a>
      </footer>
    </main>
  )
}
