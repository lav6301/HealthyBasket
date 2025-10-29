// src/App.jsx or wherever appropriate
import ProductList from "../Components/ProductList";
import React from "react";
import Navbar from "./navbar";



function Shop() {
  return (
    <div>
    <Navbar />
        <div className="container-fluid py-5 about-header">
      <h2 className="text-center text-success">Shop Us</h2>
      <ol className="breadcrumb justify-content-center mb-0">
            <li className="breadcrumb-item">
            <a className="text-white"  href="index.html">Home</a></li>
            <li className="breadcrumb-item">
            <a className="text-secondary" href="#">Shop Us</a></li>
        </ol>
      </div>
     
      <ProductList />
      
    </div>
  );
}
export default Shop;
