import React from 'react';
import "../assets/css/home.css";
import AccountPage from './MyAccount';
import { Link } from "react-router-dom";

const MiddleNav = () => {
  return (
    <div className="bg-success text-white py-3">
      <div className="container d-flex 
      align-items-center justify-content-start g-3">
       {/* logo */}
        <a href="#" className="navbar-brand fw-bold fs-5 text-white">
          <i className="fa-solid fa-cart-shopping pe-1">
            </i> Healthy Basket <span className="text-warning">.</span>
        </a>

        {/* location */}
        <div className="d-none d-sm-block ms-3">
          <i className="fa-solid fa-location-dot text-white"></i>
          <span className="text-white ms-2">Chennai, 600077</span>
        </div>
        <div className="d-none d-md-block dropdown d-flex align-items-center ms-3">
          <button className="btn btn-light text-secondary 
          dropdown-toggle" data-bs-toggle="dropdown">
            All
          </button>
          <ul className="dropdown-menu border border-light">
            <li><a className="dropdown-item" href="#">Vegetables</a></li>
            <li><a className="dropdown-item" href="#">Fruits</a></li>
            <li><a className="dropdown-item" href="#">Drinks</a></li>
          </ul>
        </div>
    {/* search bar */}
        <form className="d-flex form-w 
         flex-sm-row justify-content-start" role="search">

          <input className="form-control 
          text-center form-w" type="search" 
          placeholder="Search for products..." />

          <button className="btn btn-warning rounded-pill 
          search-btn ms-2" type="submit">Search</button>
        </form>

        <div className="d-flex gap-3 fs-5 ms-auto">
          <a href="#" className="text-white navs-icon">
            <i className="fa-regular fa-heart"></i></a>
          <a href="#" className="text-white navs-icon">
            <i className="fa-solid fa-bag-shopping"></i></a>
          <Link to="/MyAccount" className="text-white navs-icon">
            <i className="fa-regular fa-user"></i></Link>
        </div>
      </div>
    </div>
  );
};

export default MiddleNav;
