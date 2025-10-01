import React from "react";
import HomeFeatureCard from "./HomeFeatureCard";
import lemon from "../assets/image/lemon.jpg";
import caluiflower from "../assets/image/caluiflower.png";

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
      id: 4,
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
    <div className="container-fluid">
      <div className="container my-5 py-5 bg-light rounded">
        {/* Heading Row */}
        <div className="row">
          <div className="col-md-4">
            <h6 className="text-gray">Featured</h6>
            <h3 className="text-success">
              Featured <span className="text-black">Products</span>
            </h3>
          </div>
          <div className="col-md-8 col-sm-12 py-2 d-flex justify-content-end">
            <button type="button" className="btn btn-success">
              View All Products
            </button>
          </div>
        </div>

        {/* Product Cards Row */}
        <div className="row mt-4">
          {products.map((item) => (
            <div key={item.id} className="col-md-4 col-lg-3 mb-4">
              <HomeFeatureCard {...item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePageFeatu;
