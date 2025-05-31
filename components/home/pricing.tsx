"use client"

import { ArrowRight, CheckIcon } from 'lucide-react'
import React from 'react'
import { Button } from '../ui/button'
import { cn } from '@/lib/utils'

import { loadStripe } from '@stripe/stripe-js';

export default function Pricing() {

    const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

    const handleCheckout = async (planId: string) => {
        const res = await fetch('/api/create-checkout-session', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ planId }),
        });

        const data = await res.json();

        const stripe = await stripePromise;
        if (stripe && data?.id) {
            stripe.redirectToCheckout({ sessionId: data.id });
        } else {
            console.error("Stripe or session URL not found");
        }
    };


    const plansMap = [
        {
            id: "basic",
            name: "Basic",
            description: "Get started with SpeakToBlog!",
            price: '10',
            items: [
                "3 Blog Posts",
                "3 Transcriptions"
            ],
            paymentLink: "",
        },
        {
            id: "pro",
            name: "Pro",
            description: "All Blog Posts, let's go!",
            price: '19.99',
            items: [
                "Unlimited Blog Posts",
                "Unlimited Transcriptions"
            ],
            paymentLink: "",
        }
    ]

    return (
        <section className='relative overflow-hidden' id="pricing">
            <div className='py-12 lg:py-24 max-w-5xl mx-auto px-12 lg:px-0'>
                <div className='flex items-center justify-center w-full pb-6'>
                    <h2 className='font-bold text-xl uppercase mb-8 text-emerald-600'>Pricing</h2>
                </div>
                <div className='relative flex justify-center flex-col lg:flex-row items-center lg:items-stretch gap-8'>
                    {plansMap.map(({ name, price, description, items, id }, idx) => (
                        <div className='relative w-full max-w-lg' key={idx}>
                            <div className={cn("relative flex flex-col h-full gap-4 lg:gap-8 z-10 p-8 rounded-box border-[1px] border-gray-500/20 rounded-2xl", id === "pro" && "border-emerald-500 gap-5 border-2 ")}>
                                <div className=' gap-4'>
                                    <p className='text-lg lg:text-xl font-bold capitalize'>{name}</p>
                                    <p className="text-base-content/80 mt-2">{description}</p>
                                </div>

                                <div className="flex gap-2">
                                    <p className="text-5xl tracking-tight font-extrabold">${price}</p>
                                    <div className="flex flex-col justify-end mb-[4px]">
                                        <p className="text-xs text-base-content/60 font-semibold">$USD</p>
                                        <p className="text-xs text-base-content/60">/month</p>
                                    </div>
                                </div>
                                <ul className="space-y-2.5 leading-relaxed text-base flex-1">
                                    {items.map((item, idx) => (
                                        <li className="flex items-center gap-2" key={idx}>
                                            <CheckIcon size={18} />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="space-y-2">
                                    <Button
                                        onClick={() => handleCheckout(id)}
                                        className={cn('border-2 rounded-full flex gap-2 !bg-black text-gray-100', id === "pro" && "border-amber-300 px-4")}
                                    >
                                        Get SpeakToBlog <ArrowRight size={18} />
                                    </Button>

                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
