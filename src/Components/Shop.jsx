import React, { useState } from "react";
import Navbar from "./navbar";
import PageHeader from "./pageHeader";
import ProductList from "../Components/ProductList";
import ReviewStar from "./ReviewStarShop";
import "../assets/css/home.css";

function ShopHeader({ onSortChange }) {
  return (
    <div className="d-flex justify-content-between align-items-center mb-3 text-black">
      <p className="mb-0">Showing products</p>
      <select className="form-select w-auto text-black" onChange={onSortChange}>
        <option value="">Default Sorting</option>
        <option value="price">Sort by Price</option>
        <option value="popularity">Sort by Popularity</option>
      </select>
    </div>
  );
}

function FilterSideBar({ onFilterChange, onClearFilters }) {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [price, setPrice] = useState(150);

  const handleCategoryChange = (cat) => {
    let updated = [...selectedCategories];
    if (updated.includes(cat)) {
      updated = updated.filter((c) => c !== cat);
    } else {
      updated.push(cat);
    }
    setSelectedCategories(updated);
    onFilterChange("categories", updated.join(","));
  };

  const handlePriceChange = (e) => {
    const val = e.target.value;
    setPrice(val);
    onFilterChange("max_price", val);
  };

  return (
    <div className="border p-3 bg-light rounded shadow-sm">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h5 className="text-black mb-0">Filter Options</h5>
        <button className="btn btn-link text-danger p-0" onClick={onClearFilters}>
          Clear All
        </button>
      </div>

      <div className="mb-3">
        <h6 className="text-black">Category</h6>
        <ul className="list-unstyled text-black px-2 my-1">
          {["Fruits", "Vegetables", "Bakery", "Drinks", "Milk & Egg"].map((cat) => (
            <li key={cat}>
              <input
                type="checkbox"
                className="me-2"
                checked={selectedCategories.includes(cat)}
                onChange={() => handleCategoryChange(cat)}
              />
              {cat}
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-3">
        <h6 className="text-black">Price</h6>
        <small className="text-black">₹0 - ₹{price}</small>
        <input
          type="range"
          className="form-range"
          min="0"
          max="150"
          value={price}
          onChange={handlePriceChange}
        />
      </div>

      <ReviewStar />
    </div>
  );
}

export default function Shop() {
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("");

  const handleFilterChange = (type, value) => {
    setFilters((prev) => ({ ...prev, [type]: value }));
  };

  const handleClearFilters = () => {
    setFilters({});
  };

  const handleSortChange = (e) => {
    setSort(e.target.value);
    handleFilterChange("ordering", e.target.value);
  };

  return (
    <div>
      <Navbar />
      <div className="container-fluid py-5 about-header">
        <PageHeader h2="Shop" prepage="Home" currentpage="Shop" />
      </div>

      <div className="container py-5 my-5">
        <div className="row">
          <div className="col-md-3">
            <FilterSideBar
              onFilterChange={handleFilterChange}
              onClearFilters={handleClearFilters}
            />
          </div>
          <div className="col-md-9">
            <ShopHeader onSortChange={handleSortChange} />
            <ProductList filters={filters} />
          </div>
        </div>
      </div>
    </div>
  );
}
