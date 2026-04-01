import React from 'react';
import ViteImage from "../assets/products/shopping-cart.png";

const Navbar = () => {
    return (
        <div className="navbar">
      <div className="navbar-start">
        <div className="flex items-center gap-1 font-bold text-5xl linear-gradient">
          DigiTools
        </div>
      </div>
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal gap-10 px-1 text-lg">
          <li>
            <a>Products</a>
          </li>
          <li>
            <a>Features</a>
          </li>
          <li>
            <a>Pricing</a>
          </li>
          <li>
            <a>Testimiais</a>
          </li>
          <li>
            <a>FAQ</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end gap-5">
        <img src={ViteImage} />
        <button className='text-2xl'>Login</button>
        <a className="btn bg-red-500 rounded-full text-white">Get in Touch</a>
      </div>
    </div>
    );
};

export default Navbar;