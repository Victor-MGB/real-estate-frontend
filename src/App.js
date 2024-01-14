import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/Router/Navbar';
import Home from './component/Home/Home';
import Services from './component/Services/Services';
import Property from './component/Property/Property';
import Contact from './component/Contact/Contact';
import Post from './component/Blogs/Post';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/property" element={<Property />} />
        <Route path="/blogs" element={<Post />} />
        <Route path="/contact" element={<Contact />} />
        
      </Routes>
    </Router>
  );
}

export default App;



// import React from 'react'
// import StripeCheckout from 'react-stripe-checkout';


// function App() {
//   const onToken = (token) =>{
//     console.log(token)
//   }
//   return (
//     <div>
//       <StripeCheckout
//         token={onToken}
//         name = 'your id is secured with us'
//         // currency = 'US'
//         amount = '5 200 000 00'
//         stripeKey="pk_test_51OV57wEBNgJu6mEq7e9JeL56gzbl5xeE9wgrACgHWKTFklbDrTnxNNj96sxZ1DLEAUPRIjRMqZ3ktKpt3Rp3Yu3N00mCTZH68C"
//       />
//     </div>
//   )
// }

// export default App