import React from "react";
import basketfruits from "../assets/image/basketfruits.png";
import "../assets/css/home.css";

function HomeSecondOffer() {
  return (
    <div className="container py-5 bg-success rounded position-relative overflow-hidden">
      <div className="row align-items-center">
        <div className="col-md-6 text-md-start text-center px-4">
          <h6 className="text-warning fw-light">Week's Deals</h6>
          <h3 className="text-white fw-bold">
            Unbeatable Offers:
            <br />
            Your <span className="text-warning">Weekly Grocery Shopping</span>
          </h3>
          <p className="text-light mt-3 mb-4">
            Enjoy incredible discounts and fresh produce every week. Shop now and save big!
          </p>
          <button type="button" className="btn btn-warning px-4 py-2 fw-bold">
            Shop Now
          </button>
        </div>
        <div className="col-md-6 d-flex justify-content-center justify-content-md-end mt-4 mt-md-0">
          <img
            src={basketfruits}
            alt="Basket of fruits"
            className="rounded img-fluid homesecondbanner"
            style={{ maxWidth: "90%", height: "auto" }}
          />
        </div>
      </div>

      {/* Optional background shape or overlay */}
      <div className="bg-shape position-absolute top-0 end-0 w-50 h-100 d-none d-md-block"></div>
    </div>
  );
}

export default HomeSecondOffer;
