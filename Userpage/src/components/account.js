import React from "react";
import Login from "./login";
import Register from "./register";
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
                {/* Login */}
                <Login />
              </div>
              <div className="size-210 bor10 flex-w flex-col-m p-lr-93 p-tb-30 p-lr-15-lg w-full-md">
                {/* register */}
                <Register />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
