import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function Banner() {
    return (
        <section className='lg:max-w-6xl mx-auto flex flex-col z-0 items-center py-28 sm:pt-32 transition-all animate-in'>
            <h1 className='py-6 text-center'>
                Turn raw thoughts into <span className=''>polished</span>{" "} blog magic.
            </h1>
            <h2 className="text-center px-4 lg:px-0 lg:max-w-4xl">
                From voice or video to blog—AI makes it happen in moments!
            </h2>

            <Button variant={'link'} className='mt-6 text-xl rounded-full px-12 py-8 lg:mt-20 bg-gradient-to-r from-emerald-400 to-green-600 hover:from-green-600 hover:to-emerald-400 text-white font-bold shadow-xl hover:no-underline'>
                <Link href="/pricing" className='flex gap-2 items-center'>
                    <span className='relative'>Get SpeakToBlog</span> <ArrowRight className='animate-pulse' />
                </Link>
            </Button>
        </section>
    )
}
