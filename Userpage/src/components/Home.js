import React from "react";
import Banner from "./banner";
import Product from "./product";
import Slider from "./slider";
import Blog from "./blog";
export default function Home() {
  return (
    <div>
       {/* Banner */}
       <Banner/>
       {/* Product */}
       <Product/>
       <Blog/>
    </div>
  );
}
