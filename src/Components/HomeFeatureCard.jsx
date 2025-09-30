import React from "react";
import "../assets/css/home.css";

function HomeFeatureCard({ img, category, name, weight, amount, oldPrice, rating }) {
  return (
    <div className="card shadow-sm border-0 h-100">
      {/* Discount + Heart */}
      <div className="d-flex justify-content-between align-items-center p-2">
        <span className="badge bg-success">20% off</span>
        <i className="fa-regular fa-heart"></i>
      </div>

      {/* Product Image */}
      <img src={img} alt={name} className="card-img-top px-4" style={{ height: "150px", objectFit: "contain" }} />

      {/* Card Body */}
      <div className="card-body">
        <small className="text-muted">{category}</small>
        <h6 className="fw-bold">{name}</h6>
        <p className="text-muted small">{weight}</p>

        <div className="d-flex align-items-center">
          <h6 className="mb-0 text-dark">{amount}</h6>
          <span className="text-decoration-line-through text-muted ms-2">{oldPrice}</span>
        </div>

        <div className="d-flex justify-content-between align-items-center mt-2">
          <span className="text-warning">
            ★ {rating}
          </span>
          <button className="btn btn-outline-success btn-sm rounded-pill">+ Add</button>
        </div>
      </div>
    </div>
  );
}

export default HomeFeatureCard;
