import React from 'react'
import { Outlet, Link } from "react-router-dom";
export default function Banner() {
  return (
   
    <div className="sec-banner bg0 p-t-80 p-b-50">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-xl-4 p-b-30 m-lr-auto">
            {/* Block1 */}
            
            <div className="block1 wrap-pic-w"> 
            <img src={require('../images/banner/61e7e1016eb31.jpg')} />
              <Link to="/product" className="block1-txt ab-t-l s-full flex-col-l-sb p-lr-38 p-tb-34 trans-03 respon3">
                <div className="block1-txt-child1 flex-col-l">
                  <span className="block1-name ltext-102 trans-04 p-b-8">
                   Hoodies
                  </span>
                  <span className="block1-info stext-102 trans-04">
                   Retro
                  </span>
                </div>
                <div className="block1-txt-child2 p-b-4 trans-05">
                  <div className="block1-link stext-101 cl0 trans-09">
                    Shop Now
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="col-md-6 col-xl-4 p-b-30 m-lr-auto">
            {/* Block1 */}
            <div className="block1 wrap-pic-w">
            <img src={require('../images/banner/5fbe02c60a913.jpg')} />
              <Link to="/product" className="block1-txt ab-t-l s-full flex-col-l-sb p-lr-38 p-tb-34 trans-03 respon3">
                <div className="block1-txt-child1 flex-col-l">
                  <span className="block1-name ltext-102 trans-04 p-b-8">
                  T-Shirt
                  </span>
                  <span className="block1-info stext-102 trans-04">
                    90s
                  </span>
                </div>
                <div className="block1-txt-child2 p-b-4 trans-05">
                  <div className="block1-link stext-101 cl0 trans-09">
                    Shop Now
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="col-md-6 col-xl-4 p-b-30 m-lr-auto">
            {/* Block1 */}
            <div className="block1 wrap-pic-w">
            <img src={require('../images/banner/6200fefccfe19.jpg')} />
              <Link to="/product" className="block1-txt ab-t-l s-full flex-col-l-sb p-lr-38 p-tb-34 trans-03 respon3">
                <div className="block1-txt-child1 flex-col-l">
                  <span className="block1-name ltext-102 trans-04 p-b-8">
                    Accessories
                  </span>
                  <span className="block1-info stext-102 trans-04">
                  Vintage
                  </span>
                </div>
                <div className="block1-txt-child2 p-b-4 trans-05">
                  <div className="block1-link stext-101 cl0 trans-09">
                    Shop Now
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
