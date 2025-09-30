import React from "react";
import "../assets/css/home.css";

function Footer() {
  return (
    <>
      <div className="container-fluid bg-light mt-3 py-5">
        <div className="container py-3 my-3">
          <h6 className="text-dark text-center">Our Newsletter</h6>
          <h3 className="text-black fw-bold text-center mt-3">
            Subscribe to Our Newsletter to Get <br />
            <span className="fw-bold text-center text-success">
              Updates on Our Latest Offers
            </span>
          </h3>
          <p className="text-dark text-center my-3">
            Get 25% off on your first order just by subscribing to our
            newsletter
          </p>
          <div className="row mt-2">
            <div className="col-md-10 d-flex footersearch justify-content-center align-items-center">
              <input
                class="form-control rounded-pill"
                type="search"
                placeholder="Enter Email Address"
                aria-label="Search"
              ></input>
              <div className="col-md-2">
                <button
                  type="button"
                  class="btn btn-warning btn-lg  ms-3 rounded-pill"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* footer starts */}
      <div className="container-fluid bg-success">
        <div className="container py-5">
            <div className="row">
                <div className="col-md-3">
                    <div className="d-flex justify-content-start align-item-center">
                    <i class="fa-solid fa-cart-shopping text-white bg-secondary rounded-pill fa-2x"></i>
                    <h3 className="text-white ms-2">Healthy Basket</h3>
                    </div>
                    <p className="text-light mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque eum deserunt minima ipsum tenet</p>
                    <div className="d-flex justify-content-start align-item-center">
                        <i class="fa-brands fa-facebook text-dark bg-white rounded-pill footer-icons mx-2"></i>
                        <i class="fa-brands fa-facebook text-dark bg-white rounded-pill footer-icons mx-2"></i>
                        <i class="fa-brands fa-facebook text-dark bg-white rounded-pill footer-icons mx-2"></i>
                        <i class="fa-brands fa-facebook text-dark bg-white rounded-pill footer-icons mx-2"></i>
                    </div>
                </div>
                {/* company */}
                <div className="col-md-2 my-2">
                    <h5 className="text-white fw-bold">Company</h5>
                    <div className="d-flex flex-column justify-content-start align-item-center">
                        <p><a href="#" className="text-light text-decoration-none">About Us</a></p>
                        <p><a href="#" className="text-light text-decoration-none">Blog</a></p>
                        <p><a href="#" className="text-light text-decoration-none">Contact Us</a></p>
                         <p><a href="#" className="text-light  text-decoration-none">Career</a></p>
                    </div>
                </div>
                {/* customer services */}
                 <div className="col-md-3 my-2">
                    <h5 className="text-white fw-bold">Customer Services</h5>
                    <div className="d-flex flex-column justify-content-start align-item-center p-0">
                        <p><a href="#" className="text-light text-decoration-none">My Account</a></p>
                        <p><a href="#" className="text-light text-decoration-none">Track Your Order</a></p>
                        <p><a href="#" className="text-light text-decoration-none">Return</a></p>
                         <p><a href="#" className="text-light text-decoration-none">FAQ</a></p>
                    </div>
                </div>
                {/* Our Information */}
                 <div className="col-md-2 my-2">
                    <h5 className="text-white fw-bold">Our Information</h5>
                    <div className="d-flex flex-column justify-content-start align-item-center p-0">
                        <p><a href="#" className="text-light text-decoration-none">Privacy</a></p>
                        <p><a href="#" className="text-light text-decoration-none">User Terms & Condition</a></p>
                        <p><a href="#" className="text-light text-decoration-none">Return Policy</a></p>   
                    </div>
                </div>
                {/* contact info */}
                 <div className="col-md-2 my-2">
                    <h5 className="text-white fw-bold">Contact Info</h5>
                    <div className="d-flex flex-column justify-content-start align-item-center p-0">
                        <p className="text-light">+0123-456-789</p>
                        <p className="text-light">HealthyBasket@gmail.com</p>
                        <p className="text-light">8501 PReston Rd,Main,chennai-600077</p>   
                    </div>
                </div>
            </div>
            <div className="row">
                <hr className="border border-light border-1 opacity-85 mt-4"/>
                    <div className="col-md-8 mt-5">
                        <p className="text-light text-start">Copyright @ 2025 <span className="text-warning-emphasis">Healthy 
                            basket Design. All Rights Reserved.</span></p>
                    </div>
                
            </div>

        </div>
      </div>
    </>
  );
}

export default Footer;
