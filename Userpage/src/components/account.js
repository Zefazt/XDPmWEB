import React from "react";
export default function Account() {
  return (
    <div>
      <div>
        {/* Title page */}
        <section
          className="bg-img1 txt-center p-lr-15 p-tb-92"
          style={{ backgroundImage: 'url("images/bg-01.jpg")' }}
        >
          <h2 className="ltext-105 cl0 txt-center">Account</h2>
        </section>
        {/* Content page */}
        <section className="bg0 p-t-104 p-b-116">
          <div className="container">
            <div className="flex-w flex-tr">
              <div className="size-210 bor10 p-lr-70 p-t-55 p-b-70 p-lr-15-lg w-full-md">
                <form>
                  <h4 className="mtext-105 cl2 txt-center p-b-30">
                    Login
                  </h4>
                  <div className="bor8 m-b-20 how-pos4-parent">
                    <input
                      className="stext-111 cl2 plh3 size-116 p-l-62 p-r-30"
                      type="email"
                      name="email"
                      placeholder="Your Email Address"
                    />
                    <img
                      className="how-pos4 pointer-none"
                      src="images/icons/icon-email.png"
                      alt="ICON"
                    />
                  </div>
                  <div className="bor8 m-b-30">
                  <input
                      className="stext-111 cl2 plh3 size-116 p-l-62 p-r-30"
                      type="password"
                      name="password"
                      placeholder="Your Password"
                    />
                  </div>
                  <button className="flex-c-m stext-101 cl0 size-121 bg3 bor1 hov-btn3 p-lr-15 trans-04 pointer">
                    Submit
                  </button>
                </form>
              </div>
              <div className="size-210 bor10 flex-w flex-col-m p-lr-93 p-tb-30 p-lr-15-lg w-full-md">
              <form>
                  <h4 className="mtext-105 cl2 txt-center p-b-30">
                    Regiser
                  </h4>
                  <div className="bor8 m-b-20 how-pos4-parent">
                    <input
                      className="stext-111 cl2 plh3 size-116 p-l-62 p-r-30"
                      type="email"
                      name="email"
                      placeholder="Your Email Address"
                    />
                    <img
                      className="how-pos4 pointer-none"
                      src="images/icons/icon-email.png"
                      alt="ICON"
                    />
                  </div>
                  <div className="bor8 m-b-30">
                  <input
                      className="stext-111 cl2 plh3 size-116 p-l-62 p-r-30"
                      type="text"
                      name="name"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="bor8 m-b-30">
                  <input
                      className="stext-111 cl2 plh3 size-116 p-l-62 p-r-30"
                      type="password"
                      name="password"
                      placeholder="Your Password"
                    />
                  </div>
                  <div className="bor8 m-b-30">
                  <input
                      className="stext-111 cl2 plh3 size-116 p-l-62 p-r-30"
                      type="password"
                      name="password"
                      placeholder="Re Password"
                    />
                  </div>
                  <button className="flex-c-m stext-101 cl0 size-121 bg3 bor1 hov-btn3 p-lr-15 trans-04 pointer">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
   
     
      </div>
    </div>
  );
}
