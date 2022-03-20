import React from "react";
import { Outlet, Link } from "react-router-dom";
import Cart from "./cart";
import Search from "./search";

export default function Menu() {
  const logo = {
    color: "black",
    
  };
  return (
    <div>
      <header className="header-v4">
        {/* Header desktop */}
        <div className="container-menu-desktop">
          {/* Topbar */}
          <div className="top-bar">
            <div className="content-topbar flex-sb-m h-full container">
              <div className="left-top-bar">
                Free shipping for standard order over $100
              </div>
              <div className="right-top-bar flex-w h-full">
                <Link to="#" className="flex-c-m trans-04 p-lr-25">
                  Help &amp; FAQs
                </Link>
                <Link to="/account" className="flex-c-m trans-04 p-lr-25">
                  My Account
                </Link>
                <Link to="#" className="flex-c-m trans-04 p-lr-25">
                  EN
                </Link>
                <Link to="#" className="flex-c-m trans-04 p-lr-25">
                  USD
                </Link>
              </div>
            </div>
          </div>
          <div className="wrap-menu-desktop how-shadow1">
            <nav className="limiter-menu-desktop container">
              {/* Logo desktop */}
              <Link to="/home" >
              <h1 style={logo}>Heaven Shop</h1>
              </Link>
              {/* Menu desktop */}
              <div className="menu-desktop">
                <ul className="main-menu">
                  <li>
                    <Link to="/home">Home</Link>
                    
                  </li>
                  <li>
                    <Link to="/product">Shop</Link>
                  </li>
                  <li>
                    <Link to="/shopingcart">Cart</Link>
                  </li>
                  <li>
                    <Link to="/blog">Blog</Link>
                  </li>
                  <li >
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
              {/* Icon header */}
              <div className="wrap-icon-header flex-w flex-r-m">
                <div className="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 js-show-modal-search">
                  <i className="zmdi zmdi-search" />
                </div>
                <div
                  className="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti js-show-cart"
                  data-notify={2}
                >
                  <i className="zmdi zmdi-shopping-cart" />
                </div>
                <Link
                  to="#"
                  className="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti"
                  data-notify={0}
                >
                  <i className="zmdi zmdi-favorite-outline" />
                </Link>
              </div>
            </nav>
          </div>
        </div>
        {/* Header Mobile */}
        <div className="wrap-header-mobile">
          {/* Logo moblie */}
          <div className="logo-mobile">
            <Link to="index.html">
              <h1>HeavenShop</h1>
            </Link>
          </div>
          {/* Icon header */}
          <div className="wrap-icon-header flex-w flex-r-m m-r-15">
            <div className="icon-header-item cl2 hov-cl1 trans-04 p-r-11 js-show-modal-search">
              <i className="zmdi zmdi-search" />
            </div>
            <div
              className="icon-header-item cl2 hov-cl1 trans-04 p-r-11 p-l-10 icon-header-noti js-show-cart"
              data-notify={2}
            >
              <i className="zmdi zmdi-shopping-cart" />
            </div>
            <Link
              to="#"
              className="dis-block icon-header-item cl2 hov-cl1 trans-04 p-r-11 p-l-10 icon-header-noti"
              data-notify={0}
            >
              <i className="zmdi zmdi-favorite-outline" />
            </Link>
          </div>
          {/* Button show menu */}
          <div className="btn-show-menu-mobile hamburger hamburger--squeeze">
            <span className="hamburger-box">
              <span className="hamburger-inner" />
            </span>
          </div>
        </div>
        {/* Menu Mobile */}
        <div className="menu-mobile">
          <ul className="topbar-mobile">
            <li>
              <div className="left-top-bar">
                Free shipping for standard order over $100
              </div>
            </li>
            <li>
              <div className="right-top-bar flex-w h-full">
                <Link to="#" className="flex-c-m p-lr-10 trans-04">
                  Help &amp; FAQs
                </Link>
                <Link to="#" className="flex-c-m p-lr-10 trans-04">
                  My Account
                </Link>
                <Link to="#" className="flex-c-m p-lr-10 trans-04">
                  EN
                </Link>
                <Link to="#" className="flex-c-m p-lr-10 trans-04">
                  USD
                </Link>
              </div>
            </li>
          </ul>
          <ul className="main-menu-m">
            <li>
              <Link to="index.html">Home</Link>
              <ul className="sub-menu-m">
                <li>
                  <Link to="index.html">Homepage 1</Link>
                </li>
                <li>
                  <Link to="home-02.html">Homepage 2</Link>
                </li>
                <li>
                  <Link to="home-03.html">Homepage 3</Link>
                </li>
              </ul>
              <span className="arrow-main-menu-m">
                <i className="fa fa-angle-right" aria-hidden="true" />
              </span>
            </li>
            <li>
              <Link to="/product">Shop</Link>
            </li>
            <li>
              <Link to="/shopingcart" className="label1 rs1" data-label1="hot">
                Features
              </Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        {/* Modal Search */}
        <Search />
        {/* Cart */}
        <Cart />
      </header>
    </div>
  );
}
