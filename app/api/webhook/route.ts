import { NextResponse } from "next/server";
import { headers } from "next/headers";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)


const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET!;

export async function POST(req: Request) {
    const body = await req.text(); // Must be text for raw body parsing
    const headersList = await headers();
    const sig = headersList.get("stripe-signature")!;

    let event: Stripe.Event;

    try {
        event = stripe.webhooks.constructEvent(body, sig, endpointSecret);
    } catch (err: any) {
        console.error("Webhook signature verification failed.", err.message);
        return NextResponse.json({ error: "Webhook Error" }, { status: 400 });
    }

    // ✅ Handle the event
    if (event.type === "checkout.session.completed") {
        const session = event.data.object as Stripe.Checkout.Session;

        // 🧠 TODO: Update user record in your DB
        const customerEmail = session.customer_email;
        const amountPaid = session.amount_total;
        const plan = session.metadata?.planId;

        console.log("✅ Payment successful for:", customerEmail, "Plan:", plan, "Amount:", amountPaid);

        // Example:
        // await db.user.update({ where: { email: customerEmail }, data: { plan: "pro" } })
    }

    return NextResponse.json({ received: true });
}
