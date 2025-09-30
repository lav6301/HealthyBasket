import React from "react";
import HomeFeatureCard from "./HomeFeatureCard";
import lemon from "../assets/image/lemon.jpg";
import caluiflower from "../assets/image/caluiflower.jpg"

function HomePageFeatu() {
  const products = [
    {
      id: 1,
      img: "https://www.pngall.com/wp-content/uploads/2016/05/Strawberry-Free-Download-PNG.png",
      category: "Fruits",
      name: "Fresh Strawberry",
      weight: "500 g",
      amount: "$8.00",
      oldPrice: "$10.00",
      rating: 4.8,
    },
    {
      id: 2,
      img: caluiflower,
      category: "Vegetables",
      name: "Fresh Cauliflower",
      weight: "250 g",
      amount: "$12.00",
      oldPrice: "$16.00",
      rating: 4.9,
    },
    {
      id: 3,
      img: lemon,
      category: "Fruits",
      name: "Fresh Yellow Lemon",
      weight: "1 Kg",
      amount: "$8.00",
      oldPrice: "$10.00",
      rating: 4.8,
    },
     {
      id: 3,
      img: lemon,
      category: "Fruits",
      name: "Fresh Yellow Lemon",
      weight: "1 Kg",
      amount: "$8.00",
      oldPrice: "$10.00",
      rating: 4.8,
    },
  ];

  return (
    <div className="container-fluid bg-light py-5">
      <div className="container my-2">
        <div className="row mb-3">
          <div className="col-md-6">
            <h6 className="text-muted">Products</h6>
            <h4>
              Featured <span className="text-success">Products</span>
            </h4>
          </div>
          <div className="col-md-6 d-flex justify-content-end">
            <button className="btn btn-success rounded-pill text-white">
              View All Products →
            </button>
          </div>
        </div>

        <div className="row">
          {products.map((item) => (
            <div key={item.id} className="col-md-3 mb-4">
              <HomeFeatureCard {...item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePageFeatu;
