import React, { useEffect, useState } from "react";
import axios from "axios";

const API = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000";

export default function ProductList({ filters }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // pagination state
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // Build params cleanly
  const buildQueryParams = () => {
    const params = new URLSearchParams();

    // Add filters from Shop.jsx
    Object.entries(filters).forEach(([key, value]) => {
      if (value) params.append(key, value);
    });

    // pagination
    params.append("page", page);

    return params.toString();
  };

  useEffect(() => {
    setLoading(true);

    axios
      .get(`${API}/api/products/?${buildQueryParams()}`)
      .then((res) => {
        setProducts(res.data.results || res.data); // support paginated or normal API
        if (res.data.total_pages) setTotalPages(res.data.total_pages);
      })
      .catch((err) => console.error("API error:", err))
      .finally(() => setLoading(false));
  }, [filters, page]);

  // When filters change → reset to page 1
  useEffect(() => {
    setPage(1);
  }, [filters]);

  // 🟢 Remove a filter chip
  const removeFilter = (key) => {
    const updated = { ...filters };
    delete updated[key];
    // Call parent update via event system (not available here, Shop.jsx handles it)
    console.warn(`You should remove ${key} from parent filters`);
  };

  // Filter display names
  const filterLabels = {
    "category__name": "Category",
    "max_price": "Max Price",
    "ordering": "Sort",
    "brand": "Brand",
    "rating": "Rating",
    "availability": "Availability",
  };

  if (loading) return <div>Loading products…</div>;
  if (!products.length) return <h5>No products found</h5>;

  return (
    <div>
      {/* ---------------------------- */}
      {/* ACTIVE FILTER CHIPS */}
      {/* ---------------------------- */}
      <div className="mb-3">
        {Object.entries(filters).map(([key, value]) => (
          <span
            key={key}
            className="badge bg-success me-2 p-2"
            style={{ cursor: "pointer" }}
            onClick={() => removeFilter(key)}
          >
            {filterLabels[key]}: {value} ✕
          </span>
        ))}
      </div>

      {/* ---------------------------- */}
      {/* PRODUCT GRID */}
      {/* ---------------------------- */}
      <div className="product-grid">
        {products.map((p) => (
          <div key={p.id} className="product-card position-relative">
            {/* Discount */}
            {p.discount && (
              <span className="badge bg-success position-absolute top-0 start-0 m-2">
                {p.discount}% off
              </span>
            )}

            {/* Wishlist */}
            <button className="wishlist-btn position-absolute top-0 end-0 m-2">
              <i className="fa-regular fa-heart"></i>
            </button>

            {/* Image */}
            <img
              src={p.image || "/placeholder.png"}
              alt={p.name}
              className="product-img"
            />

            {/* Info */}
            <h3 className="text-start text-success fw-light">{p.name}</h3>
            <p className="text-black fs-6 fw-bold text-start">
              {p.category?.name}
            </p>

            <div className="price-section text-start">
              <span className="price">₹{p.price}</span>
              {p.discount && (
                <span className="old-price">₹{p.price + p.discount}</span>
              )}
            </div>

            <button className="btn btn-outline-success rounded-pill mt-2 w-75">
              Add
            </button>
          </div>
        ))}
      </div>

      {/* ---------------------------- */}
      {/* PAGINATION */}
      {/* ---------------------------- */}
      <div className="d-flex justify-content-center mt-4">
        <button
          className="btn btn-outline-success me-2"
          disabled={page === 1}
          onClick={() => setPage((prev) => prev - 1)}
        >
          « Prev
        </button>

        {[...Array(totalPages).keys()].map((num) => (
          <button
            key={num + 1}
            className={`btn mx-1 ${
              page === num + 1 ? "btn-success" : "btn-outline-success"
            }`}
            onClick={() => setPage(num + 1)}
          >
            {num + 1}
          </button>
        ))}

        <button
          className="btn btn-outline-success ms-2"
          disabled={page === totalPages}
          onClick={() => setPage((prev) => prev + 1)}
        >
          Next »
        </button>
      </div>
    </div>
  );
}
