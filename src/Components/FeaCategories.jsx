import React from "react";
// import categoryData from "../assets/js/featurelist"
import fuits from "../assets/image/fuits.jpeg";
import vgtabl from "../assets/image/vgtabl.jpg"



function FeaCategory() {
  // Step 1: Categories Data
  const categories = [
    {
      name: "Vegetables",
      products: "52 Products",
      img: "https://cdn-icons-png.flaticon.com/512/415/415682.png"
    },
    {
      name: "Fresh Fruits",
      products: "48 Products",
      img: "https://cdn-icons-png.flaticon.com/512/415/415733.png",
    },
    {
      name: "Milk & Eggs",
      products: "12 Products",
      img: "https://cdn-icons-png.flaticon.com/512/1046/1046784.png",
    },
    {
      name: "Bakery",
      products: "62 Products",
      img: "https://cdn-icons-png.flaticon.com/512/1046/1046857.png",
    },
  
    {
      name: "Dry Fruits",
      products: "8 Products",
      img: "https://cdn-icons-png.flaticon.com/512/1046/1046870.png",
    },
    {
      name: "Drinks",
      products: "20 Products",
      img: "https://cdn-icons-png.flaticon.com/512/1046/1046785.png",
    },
  ];

  return (
    <div className="container py-5">
      {/* Section Title */}
      <div className="row text-center mb-4">
        <div className="col">
          <h6 className="text-uppercase text-muted">Categories</h6>
          <h3 className="text-black">
            Featured <span className="text-success">Categories</span>
          </h3>
        </div>
      </div>

      {/* Step 2: Map through categories */}
      <div className="row g-4 text-center justify-content-center">
        {categories.map((cat, index) => (
          <div className="col-6 col-md-3 col-lg-2" key={index}>
            <div className="d-flex flex-column align-items-center">
              {/* Round Icon */}
              <div
                className="d-flex justify-content-center align-items-center rounded-circle bg-light shadow-sm mb-2"
                style={{ width: "100px", height: "100px" }}
              >
                <img
                  src={cat.img}
                  alt={cat.name}
                  className="img-fluid"
                  style={{ width: "60px", height: "60px" }}
                />
              </div>

              {/* Category Name */}
              <h6 className="fw-bold mb-0">{cat.name}</h6>
              <p className="text-muted small">{cat.products}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeaCategory;
