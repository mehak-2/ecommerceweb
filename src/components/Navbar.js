import React from "react";


const Navbar = ({ setShow, size }) => {
  return (
    <nav>
      <div className="nav_box">
        <div className="cart" onClick={() => setShow(false)}>
          <span>
            <i className="fas fa-cart-plus"></i>
          </span>
          <span className="cart_size">{ size}</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;