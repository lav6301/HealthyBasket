// src/components/ProductList.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";


const API = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`${API}/api/products/`)
      .then(res => {
        console.log("API response:", res.data); // debug in console
        setProducts(res.data);
      })
      .catch(err => {
        console.error("API error:", err);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div>Loading products…</div>;
  if (!products.length) return <div>No products found</div>;

  return (
    <div className="product-grid">
      {products.map(p => {
        const imgUrl = p.image
          ? (p.image.startsWith("http") ? p.image : `${API}${p.image}`)
          : "/placeholder.png";

        return (
          <div key={p.id} className="product-card">
            <img
              src={imgUrl}
              alt={p.name}
              style={{ width: 160, height: 160, objectFit: "cover" }}
            />
            <h3>{p.name}</h3>
            <p>Category: {p.category?.name || "N/A"}</p>
            <p>
              Price: ₹{p.price}{" "}
              {p.discount && (
                <span style={{ color: "red" }}> (Discount: ₹{p.discount})</span>
              )}
            </p>
          </div>
        );
      })}
    </div>
  );
}
