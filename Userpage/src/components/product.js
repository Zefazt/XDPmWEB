import React, {useState, useEffect} from "react";
import { Outlet, Link } from "react-router-dom";
export default function Product() {
  
  const [item, setItem] = useState([]);

  useEffect(() =>{
    fetch('https://heavenshop.herokuapp.com/fetchProductData')
    //fetch('http://localhost:5000/fetchProductData')
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      setItem(json);
    });
  },[])

  const [category, setCategory] = useState([]);

  useEffect(() =>{
    fetch('https://heavenshop.herokuapp.com/fetchCategoryData')
    //fetch('http://localhost:5000/fetchCategoryData')
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      setCategory(json);
    });
  },[])

  
  const ip = {
    color: "red",
    borderscolor: "coral",
  };

  

  return (
    <section >
      <div className="container">
        <div className="p-b-10">
          <h3 className="ltext-103 cl5">Product Overview</h3>
        </div>
        <div className="flex-w flex-sb-m p-b-52">
          <div className="flex-w flex-l-m filter-tope-group m-tb-10">
            <button
              className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5 how-active1"
              data-filter="*"
            >
              All Products
            </button>
            {category.map(category => ( 
            <button
              className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5"
              data-filter={ `.${category.Madm}` }
            >
              {category.Tendm}
            </button>
            ))}
            
          </div>
          <form action="#">
          <div className="flex-w flex-c-m m-tb-10">
            
            {/* <div className="flex-c-m stext-106 cl6 size-104 bor4 pointer hov-btn3 trans-04 m-r-8 m-tb-4 js-show-filter">
              <i className="icon-filter cl2 m-r-6 fs-15 trans-04 zmdi zmdi-filter-list" />
              <i className="icon-close-filter cl2 m-r-6 fs-15 trans-04 zmdi zmdi-close dis-none" />
              Filter
            </div> */}
              
            <input type="text" placeholder="What do yo u need?" style={ip}/>
              <div className="flex-c-m stext-106 cl6 size-105 bor4 pointer hov-btn3 trans-04 m-tb-4 js-show-search">
              <button type="submit" className="site-btn">SEARCH</button>
              
              </div>
            
          </div>
          </form>
          {/* Search product */}
          <div className="dis-none panel-search w-full p-t-10 p-b-15">
            <div className="bor8 dis-flex p-l-15">
              <button className="size-113 flex-c-m fs-16 cl2 hov-cl1 trans-04">
                <i className="zmdi zmdi-search" />
              </button>
              <input
                className="mtext-107 cl2 size-114 plh2 p-r-15"
                type="text"
                name="search-product"
                placeholder="Search"
              />
            </div>
          </div>
        
          
        </div>
        <div className="row isotope-grid">
          {item.map(item => (
            <div className={`col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item ${item.Madm}`}>
            {/* Block2 */}
            <div className="block2">
              <div className="block2-pic hov-img0">
              <img src={require(`../images/product/${item.hinhanh}`)} />
                <Link
                  to={{
                    pathname:`/productdetail/${item.Masp}`
                   }}
                  className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1"
                >
                 Detail
                </Link>
              </div>
              <div className="block2-txt flex-w flex-t p-t-14">
                <div className="block2-txt-child1 flex-col-l ">
                  <Link
                    to={{
                      pathname:`/productdetail/${item.Masp}`
                     }}
                    className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6"
                  >
                 {item.Tensp}
                  </Link>
                  <span className="stext-105 cl3">đ {item.Dongia}</span>
                </div>
                <div className="block2-txt-child2 flex-r p-t-3">
                  <Link
                    to={{
                      pathname:`/productdetail/${item.Masp}`
                     }}
                    className="btn-addwish-b2 dis-block pos-relative js-addwish-b2"
                  >
                    <img
                      className="icon-heart1 dis-block trans-04"
                      src="images/icons/icon-heart-01.png"
                      alt="ICON"
                    />
                    <img
                      className="icon-heart2 dis-block trans-04 ab-t-l"
                      src="images/icons/icon-heart-02.png"
                      alt="ICON"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          ))}
          
          </div>
        {/* Load more */}
        <div className="flex-c-m flex-w w-full p-t-45">
          <Link
            to="#"
            className="flex-c-m stext-101 cl5 size-103 bg2 bor1 hov-btn1 p-lr-15 trans-04"
          >
            Load More
          </Link>
        </div>
        <br/>
      </div>
    </section>
  );
}
