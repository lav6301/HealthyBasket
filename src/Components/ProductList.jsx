import React, { useEffect, useState } from "react";
import axios from "axios";
const API = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000";

export default function ProductList({ filters }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const params = new URLSearchParams(filters).toString();
    setLoading(true);
    axios
      .get(`${API}/api/products/?${params}`)
      .then((res) => setProducts(res.data))
      .catch((err) => console.error("API error:", err))
      .finally(() => setLoading(false));
  }, [filters]);

  if (loading) return <div>Loading products…</div>;
  if (!products.length) return <div>No products found</div>;

  return (
    <div className="product-grid">
      {products.map((p) => {
        const imgUrl = p.image
          ? p.image.startsWith("http")
            ? p.image
            : `${API}${p.image}`
          : "/placeholder.png";

        return (
          <div key={p.id} className="product-card position-relative">
            {p.discount && (
              <span className="badge bg-success position-absolute top-0 start-0 m-2">
                {Math.round((p.discount / p.price) * 100)}% off
              </span>
            )}
            <button className="wishlist-btn position-absolute top-0 end-0 m-2">
              <i className="fa-regular fa-heart"></i>
            </button>

            <img src={imgUrl} alt={p.name} className="product-img" />

            <h3>{p.name}</h3>
            <p className="text-muted">{p.category?.name || "Uncategorized"}</p>

            <div className="price-section">
              <span className="price">₹{p.price}</span>
              {p.discount && <span className="old-price">₹{p.price + p.discount}</span>}
            </div>

            <button className="btn btn-outline-success rounded-pill mt-2 w-75">
              Add
            </button>
          </div>
        );
      })}
    </div>
  );
}
