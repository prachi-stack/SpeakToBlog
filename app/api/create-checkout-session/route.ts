// app/api/checkout/route.ts
import { stripe } from '@/lib/stripe';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const body = await req.json();
  const { planId } = body;

  const PRICE_LOOKUP: Record<string, number> = {
    basic: 1000,     // $10.00
    pro: 1999,       // $19.99
  };

  const unit_amount = PRICE_LOOKUP[planId];
  if (!unit_amount) return NextResponse.json({ error: 'Invalid plan ID' }, { status: 400 });

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items: [{
        price_data: {
          currency: 'usd',
          product_data: {
            name: `SpeakToBlog ${planId === 'basic' ? 'Basic' : 'Pro'} Plan`,
          },
          unit_amount,
        },
        quantity: 1,
      }],
      success_url: 'http://localhost:3000',
      cancel_url: 'http://localhost:3000',
    });

    return NextResponse.json({ id: session.id });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Stripe error' }, { status: 500 });
  }
}
