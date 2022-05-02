import React from "react";
import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";

const Navbar = () => {
  return (
    <div>
      <div className="navbar-container">
        <p className="logo">
          <Link href="/">JSM Headphones</Link>
        </p>

        <button type="button" className="cart-icon" onClick={() => {}}>
          <AiOutlineShopping />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
