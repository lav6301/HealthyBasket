import React from 'react';
import { Link } from "react-router-dom";
import "../assets/css/home.css";
import AboutUs from './about';
import BlogPage from './blog';
import ContactUs from './contact';
import Shop from './Shop';
const BottomNav = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-success">
      <div className="container">
        {/* Hamburger */}
        <button className="navbar-toggler text-white" 
        type="button" data-bs-toggle="collapse" 
        data-bs-target="#bottomNav">
          <i className="fas fa-bars text-white"></i>
        </button>
        {/* collapsible content */}
        <div className="collapse navbar-collapse" id="bottomNav">
            
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 
          text-white text-center">
       
           <li class="nav-item"><Link class="nav-link text-warning active" to="/">Home</Link></li>
           <li class="nav-item"><a class="nav-link text-light" href="/Shop">Shop</a></li>
           <li class="nav-item"><a class="nav-link text-light" href="#">Fruits</a></li>
          <li class="nav-item"><a class="nav-link text-light" href="#">Vegetables</a></li>
          <li class="nav-item"><a class="nav-link text-light"
           href="/ContactUs">Contact Us</a></li>
          <li className="nav-item"><Link class="nav-link text-light"
          to="/About">About Us</Link></li>
          <li class="nav-item"><Link class="nav-link text-light" to="/blogs">Blogs</Link></li>
         

            {/* Mobile-only icons  */}

          <li className="nav-item d-lg-none text-white d-flex
           justify-content-center gap-4 mt-3">
              <a href="#" className="text-white">
                <i className="fa-regular fa-user icons-nav"></i></a>
              <a href="#" className="text-white"><i className="fa-regular fa-heart icons-nav"></i></a>
              <a href="#" className="text-white"><i className="fa-solid fa-bag-shopping icons-nav"></i></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default BottomNav;
