 import { NextResponse } from "next/server";
import { headers } from "next/headers";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET!;

export async function POST(req: Request) {
  const body = await req.text(); // raw body needed for webhook signature verification
  const headersList = await headers();
  const sig = headersList.get("stripe-signature");

  if (!sig) {
    return NextResponse.json({ error: "Missing Stripe signature" }, { status: 400 });
  }

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(body, sig, endpointSecret);
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.error("Webhook signature verification failed.", err.message);
    } else {
      console.error("Webhook signature verification failed.");
    }
    return NextResponse.json({ error: "Webhook Error" }, { status: 400 });
  }

  // Handle the event
  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;

    const customerEmail = session.customer_email;
    const amountPaid = session.amount_total;
    const plan = session.metadata?.planId;

    console.log("✅ Payment successful for:", customerEmail, "Plan:", plan, "Amount:", amountPaid);

    // TODO: Update user record in your DB accordingly
    // await db.user.update({ where: { email: customerEmail }, data: { plan } })
  }

  return NextResponse.json({ received: true });
}
