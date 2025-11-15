import React, { useState } from "react";
import Navbar from "./navbar";
import PageHeader from "./pageHeader";
import ProductList from "../Components/ProductList";
import "../assets/css/home.css";

// -------------------------------
// ACTIVE FILTER TAG COMPONENT
// -------------------------------
function ActiveFilters({ filters, onRemove, onClear }) {
  const entries = Object.entries(filters).filter(([_, v]) => v);

  if (!entries.length) return null;

  return (
    <div className="mb-3 d-flex flex-wrap gap-2">
      {entries.map(([key, value]) => (
        <span
          key={key}
          className="badge bg-warning px-3 py-2 d-flex align-items-center gap-2"
          style={{ fontSize: "14px", borderRadius: "30px" }}
        >
          {key.replace(/__/g, " ") }: {value}
          <button
            className="btn btn-sm btn-link text-dark p-0"
            onClick={() => onRemove(key)}
          >
            ✕
          </button>
        </span>
      ))}

      <button
        className="btn btn-outline-danger btn-sm"
        onClick={onClear}
      >
        Clear All
      </button>
    </div>
  );
}



// -------------------------------
// SIDEBAR FILTERS
// -------------------------------
function FilterSideBar({ onFilterChange, onClearFilters }) {
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [availability, setAvailability] = useState("");
  const [rating, setRating] = useState("");
  const [price, setPrice] = useState([0, 200]);

  // CATEGORY --------------------------------
  const toggleCategory = (cat) => {
    let updated = categories.includes(cat)
      ? categories.filter((x) => x !== cat)
      : [...categories, cat];

    setCategories(updated);
    onFilterChange("category__name", updated.join(","));
  };

  // BRAND --------------------------------
  const toggleBrand = (b) => {
    let updated = brands.includes(b)
      ? brands.filter((x) => x !== b)
      : [...brands, b];

    setBrands(updated);
    onFilterChange("brand", updated.join(","));
  };

  // PRICE --------------------------------
  const handlePriceChange = (e) => {
    const val = Number(e.target.value);
    setPrice([0, val]);
    onFilterChange("max_price", val);
  };

  return (
    <div className="border p-4 bg-light rounded shadow-sm">

      <div className="d-flex justify-content-between align-items-center mb-3">
        <h5 className="text-black mb-0">Filter Options</h5>
        <button className="btn btn-link text-danger p-0" onClick={onClearFilters}>
          Clear All
        </button>
      </div>

      {/* CATEGORY */}
      <div className="mb-4">
        <h6 className="text-black">Category</h6>
        {["Fresh Fruits", "Vegetables", "Bakery", "Drinks", "Milk & Eggs"].map((cat) => (
          <div key={cat}>
            <input
              type="checkbox"
              className="me-2"
              checked={categories.includes(cat)}
              onChange={() => toggleCategory(cat)}
            />
            {cat}
          </div>
        ))}
      </div>

      {/* PRICE RANGE */}
      <div className="mb-4">
        <h6 className="text-black">Price</h6>
        <small className="text-black">₹0 - ₹{price[1]}</small>
        <input
          type="range"
          className="form-range"
          min="0"
          max="200"
          value={price[1]}
          onChange={handlePriceChange}
        />
      </div>

      {/* RATING */}
      <div className="mb-4">
        <h6 className="text-black">Review</h6>
        {[5, 4, 3, 2, 1].map((star) => (
          <div key={star} className="mb-1">
            <input
              type="radio"
              name="rating"
              className="me-2"
              checked={rating === String(star)}
              onChange={() => {
                setRating(star);
                onFilterChange("rating", star);
              }}
            />
            {"⭐".repeat(star)}
          </div>
        ))}
      </div>

      {/* BRAND */}
      <div className="mb-4">
        <h6 className="text-black">Brand</h6>
        {["FreshHarvest", "Nature's Best", "GoodGrains", "FarmFresh", "GreenGrocer"].map((b) => (
          <div key={b}>
            <input
              type="checkbox"
              className="me-2"
              checked={brands.includes(b)}
              onChange={() => toggleBrand(b)}
            />
            {b}
          </div>
        ))}
      </div>

      {/* AVAILABILITY */}
      <div className="mb-4">
        <h6 className="text-black">Availability</h6>
        <div>
          <input
            type="radio"
            name="stock"
            className="me-2"
            checked={availability === "in_stock"}
            onChange={() => {
              setAvailability("in_stock");
              onFilterChange("in_stock", true);
            }}
          />
          In Stock
        </div>
        <div>
          <input
            type="radio"
            name="stock"
            className="me-2"
            checked={availability === "out_of_stock"}
            onChange={() => {
              setAvailability("out_of_stock");
              onFilterChange("in_stock", false);
            }}
          />
          Out of Stock
        </div>
      </div>
    </div>
  );
}



// -------------------------------
// MAIN SHOP PAGE
// -------------------------------
export default function Shop() {
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("");

  const updateFilter = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const removeFilter = (key) => {
    setFilters((prev) => {
      const updated = { ...prev };
      delete updated[key];
      return updated;
    });
  };

  const clearAll = () => setFilters({});

  return (
    <div>
      <Navbar />

      <div className="container-fluid py-5 about-header">
        <PageHeader h2="Shop" prepage="Home" currentpage="Shop" />
      </div>

      <div className="container py-5 my-5">
        <div className="row">

          {/* SIDEBAR */}
          <div className="col-md-3">
            <FilterSideBar
              onFilterChange={updateFilter}
              onClearFilters={clearAll}
            />
          </div>

          {/* PRODUCT LIST AREA */}
          <div className="col-md-9">

            <ActiveFilters
              filters={filters}
              onRemove={removeFilter}
              onClear={clearAll}
            />

            <ProductList filters={filters} />
          </div>
        </div>
      </div>
    </div>
  );
}
