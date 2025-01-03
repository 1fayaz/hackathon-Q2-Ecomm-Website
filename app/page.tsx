import React from 'react'
import Home from './Home/page';
import Header from './components/Header';
import AllProducts from './all products/page';
import ProductDetail from './product deatils/page';
import Login from './Login/page';
import JoinUs from './join us/page';
import ContactUs from './contact us/page';
import Cart from './cart/page';
import Checkout from './checkout/page';
import Footer from './components/Footer';

function Page () {
  return (
    <div>
      <Header></Header> 
        <Home></Home>
        <AllProducts></AllProducts>
      <Login></Login>
      <ContactUs></ContactUs>
      <Cart></Cart>
      <Checkout></Checkout>
      <JoinUs></JoinUs>
      <ProductDetail></ProductDetail>
       <Footer></Footer>
    </div>
  )
}

export default Page ;
