import React from 'react';
import '../assets/css/home.css';
import headerFinal from '../assets/image/headerFinal.png';
import headerprofile from '../assets/image/headerprofile.jpg'


const Header = () => {
  return (
    <div className="container-fluid py-5 headerContainer">
      <div className="container py-5">
        <div className="row">
          {/* Left Section */}
          <div className="col-md-6">
            <div className="mb-3 header-quote bg-white 
            
            d-flex align-items-center rounded-pill">
              <div className="ms-2 my-3 quote-icon bg-light d-flex 
              justify-content-center align-items-center rounded-pill">
                <i className="fa-solid fa-cart-shopping pe-1 text-warning"></i>
              </div>
              <p className="fw-bold text-dark text-center mt-3 ms-2">The Best Online Grocery Store</p>
            </div>
            <h1 className="h2 fw-bold text-black headerHeading">Fresh Fruits and Vegetables In One Place</h1>
            <span className="text-warning fw-semibold">"Eat well, Live Healthy."</span>
            <p className="text-dark mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, nam!</p>
            <div className="d-flex mt-2 gap-4 mb-5">
              <button className="btn btn-success rounded-pill text-white">
                Shop Now <i className="fa-solid fa-arrow-right"></i>
              </button>
              <a href="#" className="text-body-emphasis mt-2 fw-bold text-decoration-underline">View All Product</a>
            </div>
            {/* Reviews */}
            <div className="headerRating mt-4">
              <div className="d-flex align-items-center flex-wrap">
                <div className="profile-images d-flex align-items-center">
                  <img src={headerprofile} className="profile-img" alt="img" />
                  <img src={headerprofile} className="profile-img second" alt="img" />
                  <img src={headerprofile} className="profile-img third" alt="img" />
                  <div className="plusReview">
                    <a href="#"><i className="fa fa-plus"></i></a>
                  </div>
                </div>
                <div className="ms-3 mt-2 mt-md-0">
                  <h5 className="fw-bold text-black">4.8 Rating+</h5>
                  <p className="text-warning mb-0">Trusted by 75K+ Customers</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section */}
          {/* <div className="col-md-6">
            <img src="./assests/image/header5img-removebg-preview.png" 
            className="img-fluid rounded headerImg" alt="Header img" />
            <div className="d-flex justify-content-center gap-2 mt-3">
              <div className="d-flex align-items-center border border-primary rounded-pill px-3 py-2">
                <div className="bg-warning rounded-pill d-flex justify-content-center align-items-center px-2">
                  <i className="fa-solid fa-wallet text-white"></i>
                </div>
                <p className="text-primary ms-2 mt-2 fw-bold">Secure Payment</p>
              </div>
              <div className="d-flex align-items-center border border-primary rounded-pill px-3 py-2">
                <div className="bg-warning rounded-pill d-flex justify-content-center align-items-center px-2">
                  <i className="fa-solid fa-truck text-white"></i>
                </div>
                <p className="text-primary ms-2 mt-2 fw-bold">Fast Delivery</p>
              </div>
            </div>
          </div> */}

          <div className="col-md-6">
          <img src={headerFinal}
            className="img-fluid rounded headerImg" alt="Header img" />
           
            {/* icon in image for payment and free service start */}
          <div className="header-img-icons  
          d-flex align-items-center 
            justify-content-center border border-success rounded-pill">

            <div className="header-img-payment d-flex align-items-center 
            justify-content-center bg-success rounded-pill">
            <i className="fa-solid fa-wallet text-center text-white"></i>
           </div>
              <p className="text-center align-items-center 
              text-dark ms-2 mt-3 fw-bold">Secure Payment</p>
            </div>
             {/* 2nd icon  */}
             <div className="header-delivery-icons  d-flex align-items-center 
            justify-content-center border border-success rounded-pill">

            <div className="header-delivery-img-payment d-flex align-items-center 
            justify-content-center bg-success rounded-pill">
            <i className="fa-solid fa-truck text-white text-center"></i>
           </div>
              <p className="text-center align-items-center 
              text-dark ms-2 mt-3 fw-bold">Fast Delivery</p>
            </div>
             {/* icon in image for payment and free service start */}
          </div>



        </div>
      </div>
    </div>
  );
};

export default Header;
