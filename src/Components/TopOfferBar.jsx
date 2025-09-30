import React from 'react';
import "../assets/css/home.css";

const TopOfferBar = () => {
  return (
    <div className="bg-warning py-2">
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
        <div className="text-dark small">
          <i className="bi bi-telephone"></i> Call us: +123-456-789
        </div>
        <div className="text-black">
          Sign up and GET <strong>25% OFF</strong> for your first order.
          <a href="#" className="text-success fw-bold"> Sign up now</a>
        </div>
        <div className="px-3 top-icon">
          <a href="#"><i className="fa-brands fa-facebook text-success px-3"></i></a>
          <a href="#"><i className="fa-brands fa-youtube text-success px-3"></i></a>
          <a href="#"><i className="fa-brands fa-twitter text-success px-3"></i></a>
          <a href="#"><i className="fa-brands fa-instagram text-success px-3"></i></a>
        </div>
      </div>
    </div>
  );
};

export default TopOfferBar;
