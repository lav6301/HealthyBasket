import React from "react";
import Navbar from "./navbar";
import PageHeader from "./pageHeader";
import { Link } from "react-router-dom";
import "../assets/css/home.css";
import lemon from "../assets/image/lemon.jpeg"
import onion from "../assets/image/onion.jpeg"
import orange from "../assets/image/orange.jpeg"
import pomegranate from "../assets/image/pomegranate.jpeg"
import Footer from "./footer";
import ServiceIcon from "./servicesicon";

function OrderDetail() {
  return (
    <>
      <Navbar />
      <PageHeader
        h2="Order Completed"
        prepage="Home"
        currentpage="Order Completed"
      />

      <div className="container-fluid py-5">
        <div className="container my-2">

          {/* Success Icon & Text */}
          <div className="row mb-4">
            <div className="col text-center">
              <i className="fa-solid fa-check bg-warning rounded-pill p-3 fa-3x text-black"></i>
              <h3 className="text-black mt-3">Your order is Completed!</h3>
              <h6 className="text-secondary-emphasis fw-normal">
                Thank you. Your Order has been received
              </h6>
            </div>
          </div>

          {/* Order Info Table */}
          {/* Order Info Table */}
          <div className="row">
            <div className="col bg-warning rounded p-3">

              <table className="table table-borderless mb-0 align-middle">
                <thead>
                  <tr>
                    <th scope="col">Order ID</th>
                    <th scope="col">Payment Method</th>
                    <th scope="col">Transaction ID</th>
                    <th scope="col">Estimate Delivery Date</th>
                    <th scope="col" className="text-end"></th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>#SDGT1254FD</td>
                    <td>Paypal</td>
                    <td>TR542SSFE</td>
                    <td>29 July 2024</td>

                    {/* Download Invoice Button */}
                    <td className="text-end">
                      <button type="button" className="btn btn-success">
                        Download Invoice
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>

            </div>
          </div>
          
          {/* order detail */}
          <div className="row mt-4">
            <div className="col">
              {/* Order Detail */}
              <div className="row mt-4">
                <div className="col">
                  <span className="text-black fw-bold">Order Details</span>

                  <table className="table border border-secondary-subtle mt-2">
                    <thead className="text-black">
                      <tr>
                        <th>Products</th>
                        <th className="text-end">Sub Total</th>
                      </tr>
                    </thead>

                    <tbody>

                      {/* 1 - Fresh Orange */}
                      <tr>
                        <td className="d-flex align-items-center gap-3">
                          <img
                            src={orange}
                            alt="orange"
                            style={{ width: "50px", height: "50px", objectFit: "cover" }}
                          />
                          <div>
                            <span className="fw-semibold text-black">Fresh Oranges</span>
                            <br />
                            <small className="text-secondary">500g</small>
                          </div>
                        </td>
                        <td className="text-end text-black">$7.00</td>
                      </tr>

                      {/* 2 - Red Onion */}
                      <tr>
                        <td className="d-flex align-items-center gap-3">
                          <img
                            src={onion}
                            alt="onion"
                            style={{ width: "50px", height: "50px", objectFit: "cover" }}
                          />
                          <div>
                            <span className="fw-semibold text-black">Red Onion</span>
                            <br />
                            <small className="text-secondary">1kg</small>
                          </div>
                        </td>
                        <td className="text-end text-black">$9.00</td>
                      </tr>

                      {/* 3 - Lemon */}
                      <tr>
                        <td className="d-flex align-items-center gap-3">
                          <img
                            src={lemon}
                            alt="lemon"
                            style={{ width: "50px", height: "50px", objectFit: "cover" }}
                          />
                          <div>
                            <span className="fw-semibold text-black">Fresh Yellow Lemon</span>
                            <br />
                            <small className="text-secondary">1kg</small>
                          </div>
                        </td>
                        <td className="text-end text-black">$8.00</td>
                      </tr>

                      {/* 4 - Pomegranate */}
                      <tr>
                        <td className="d-flex align-items-center gap-3">
                          <img
                            src={pomegranate}
                            alt="pomegranate"
                            style={{ width: "50px", height: "50px", objectFit: "cover" }}
                          />
                          <div>
                            <span className="fw-semibold text-black">Pomegranate</span>
                            <br />
                            <small className="text-secondary">500g</small>
                          </div>
                        </td>
                        <td className="text-end text-black">$14.40</td>
                      </tr>

                      {/* Summary Rows */}
                      <tr>
                        <td className="fw-bold">Shipping</td>
                        <td className="text-end">$0.00</td>
                      </tr>
                      <tr>
                        <td className="fw-bold">Taxes</td>
                        <td className="text-end">$3.00</td>
                      </tr>
                      <tr>
                        <td className="fw-bold">Coupon Discount</td>
                        <td className="text-end text-success">-$10.00</td>
                      </tr>

                      {/* Total */}
                      <tr>
                        <td className="fw-bold text-black">Total</td>
                        <td className="text-end fw-bold text-black">$74.00</td>
                      </tr>

                    </tbody>
                  </table>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
      <ServiceIcon />
      <Footer />
    </>
  );
}

export default OrderDetail;
