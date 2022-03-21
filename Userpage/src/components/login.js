import React from "react";
function Login() {
  return (
    <div>
      <form>
        <h4 className="mtext-105 cl2 txt-center p-b-30">Login</h4>
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
  );
}

export default Login;
