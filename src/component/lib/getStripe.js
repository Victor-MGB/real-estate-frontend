import { loadStripe } from "@stripe/stripe-js";
let stripePromise;
const getStripe = () => {
    if (!stripePromise) {
        console.log("Stripe API Key:", process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
        stripePromise = loadStripe('pk_test_51OV57wEBNgJu6mEq7e9JeL56gzbl5xeE9wgrACgHWKTFklbDrTnxNNj96sxZ1DLEAUPRIjRMqZ3ktKpt3Rp3Yu3N00mCTZH68C');
    }
    return stripePromise;
};


export default getStripe;