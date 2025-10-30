// src/App.jsx or wherever appropriate
import ProductList from "../Components/ProductList";
import React from "react";
import Navbar from "./navbar";
import { Link } from "react-router-dom";
import ReviewStar from "./ReviewStarShop";
import PageHeader from "./pageHeader";




function ShopHeader() {
  return (
    <div className="d-flex justify-content-between align-items-center mb-3 text-black">
      <p className="mb-0">Showing 1–12 of 2560 results</p>
      <select className="form-select w-auto text-black">
        <option>Default Sorting</option>
        <option>Sort by Price</option>
        <option>Sort by Popularity</option>
      </select>
    </div>
  );
}



function FilterSideBar(){
    return(
    <>
    <h5 className="text-black">Filter Options</h5>
    <div className="border p-3 bg-light">
        
        <div className="mb-3">
            <h6 className="text-black">Category</h6>
           <ul className="list-unstyled text-black text-normal px-2 my-1">
          <li><input type="checkbox" /> Fresh Fruits</li>
          <li><input type="checkbox" /> Vegetables</li>
          <li><input type="checkbox" /> Milk & Egg</li>
            <li><input type="checkbox"/> Bakery</li>
            <li><input type="checkbox"/> Drinks</li>
        </ul>
        </div>

        <div className="mb-3">
        <h6 className="text-black">Price</h6>
        <small className="text-black">$25 - $125</small>
        <input type="range" className="form-range text-success" min="0" max="150" /> 
      </div>

        {/* review star for filter product */}
        <ReviewStar />
    </div>
    
    </>
    )
}


function Shop() {
  return (
    <div>
    <Navbar />
        <div className="container-fluid py-5 about-header">
      <PageHeader h2="Shop" prepage="Home" currentpage="Shop" /></div>
        <div className="container py-5 my-5">
        <div className="row">
                <div className="col-md-3">
                    <FilterSideBar />
                </div>
                <div className="col-md-9">
                     <ShopHeader />
                     {/* active filter */}
                     <div className="d-flex justify-content-start align-item-start">
                      <h6 className="text-black px-2">Active Filter</h6>
                     <button className="btn bg-warning text-black rounded-pill mx-2">
                      Price:$25.00 - $125.00 <i class="fa-solid fa-xmark text-black"></i> </button>
                       <button className="btn bg-warning text-black rounded-pill mx-2">
                      5  Star <i class="fa-solid fa-xmark text-black"></i> </button>
                       <button className="btn bg-warning text-black rounded-pill mx-2">
                      In stock <i class="fa-solid fa-xmark text-black"></i> </button>
                      <span className="text-info mx-5 text-underline">clear All</span>
                     </div>
                      <ProductList />
                </div></div>
            </div>

      
     
     
      <footer />
      
    </div>
  );
}
export default Shop;
