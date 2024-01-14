import React from 'react'
import StripeCheckout from 'react-stripe-checkout';

function CheckoutForm() {
  const onToken = (token) =>{
        console.log(token)
      }
  return (
    <div>
    <StripeCheckout
            token={onToken}
            name = 'your id is secured with us'
            // currency = 'US'
            amount = '5 200 000 00'
            stripeKey="pk_test_51OV57wEBNgJu6mEq7e9JeL56gzbl5xeE9wgrACgHWKTFklbDrTnxNNj96sxZ1DLEAUPRIjRMqZ3ktKpt3Rp3Yu3N00mCTZH68C"
          />

    </div>
  )
}

export default CheckoutForm