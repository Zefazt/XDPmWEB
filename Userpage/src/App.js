import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Slider from "./components/slider";
import Banner from "./components/banner";
import Product from "./components/product";
import Footer from "./components/footer";
import Backtotop from "./components/backtotop";
import Modal from "./components/modal";
import About from "./components/about";
import Contact from "./components/contact";
import Blog from "./components/blog";
import ShopingCart from "./components/shoping-cart";
import Menu from "./components/menu";
import Home from "./components/Home";
import Productdetails from "./components/productdetail";
import Account from "./components/account";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Menu />
        <Routes>
        <Route path="/productdetail/:productId" element={<Productdetails />}></Route>
        {/* <Route path="/productdetail" element={<Productdetails />}></Route> */}
        <Route path="/account" element={<Account />}></Route>
          <Route path="/Home" element={<Home />}></Route>
          <Route path="/product" element={<Product />}></Route>
          <Route path="/ShopingCart" element={<ShopingCart />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>

      {/* <Header />
      <Cart />
      <Slider />
      <Banner />
      <Product />
      <Footer />
      <Backtotop />
      <Modal /> */}
    </div>
  );
}

export default App;
