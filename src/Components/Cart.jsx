import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import PageHeader from "./pageHeader";
import cake1 from "../assets/image/cake1.png";
import "../assets/css/home.css";
import ServiceIcon from "./servicesicon";

function Cart() {
  return (
    <>
      <Navbar />
      <PageHeader h2="Shopping Cart" prepage="Home" currentpage="Shopping Cart" />

      <div className="container py-5">
        <div className="row g-4">
          {/* Cart Items Section */}
          <div className="col-lg-8">
            <table className="table align-middle">
              <thead className="bg-warning text-dark">
                <tr>
                  <th scope="col" className="px-4">Product</th>
                  <th scope="col">Price</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {[1, 2, 3, 4].map((item, index) => (
                  <tr key={index}>
                    <td>
                      <button type="button" className="btn p-0 me-2 text-danger">
                        <i className="fa-solid fa-xmark"></i>
                      </button>
                      <img
                        src={cake1}
                        className="img-thumbnail rounded tableCartimag"
                        alt="cake"
                        style={{ width: "60px", height: "60px" }}
                      />
                      <span className="ms-3 fw-bold">Chocolate Cake</span>
                      <span className="text-muted ms-2">500 g</span>
                    </td>
                    <td>$11.75</td>
                    <td>
                      <div className="d-flex align-items-center border rounded-pill p-2 justify-content-center" style={{ width: "120px" }}>
                        <i className="fa-solid fa-minus me-2"></i>
                        <input
                          type="text"
                          defaultValue="1"
                          className="form-control form-control-sm text-center border-0"
                          style={{ width: "40px" }}
                        />
                        <i className="fa-solid fa-plus ms-2"></i>
                      </div>
                    </td>
                    <td>$47.00</td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Coupon and Clear Cart Buttons */}
            <div className="d-flex justify-content-between align-items-center mt-3">
              <div className="input-group" style={{ width: "300px" }}>
                <input type="text" className="form-control" placeholder="Coupon Code" />
                <button className="btn btn-success">Apply Coupon</button>
              </div>
              <button className="btn btn-outline-danger">Clear Shopping Cart</button>
            </div>
          </div>

          {/* Order Summary Section */}
          <div className="col-lg-4">
            <div className="card shadow-sm border-0 p-3">
              <h5 className="fw-bold mb-3">Order Summary</h5>
              <table className="table table-borderless">
                <tbody>
                  <tr>
                    <td>Items</td>
                    <td className="text-end">9</td>
                  </tr>
                  <tr>
                    <td>Sub Total</td>
                    <td className="text-end">$85.40</td>
                  </tr>
                  <tr>
                    <td>Shipping</td>
                    <td className="text-end">$5.00</td>
                  </tr>
                  <tr>
                    <td>Taxes</td>
                    <td className="text-end">$2.00</td>
                  </tr>
                  <tr>
                    <td>Coupon Discount</td>
                    <td className="text-end text-danger">-$10.00</td>
                  </tr>
                  <tr className="fw-bold border-top">
                    <td>Total</td>
                    <td className="text-end">$74.40</td>
                  </tr>
                </tbody>
              </table>

              <button className="btn btn-success w-100 mt-2 rounded-pill">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>

      <ServiceIcon />
      <Footer />
    </>
  );
}

export default Cart;
