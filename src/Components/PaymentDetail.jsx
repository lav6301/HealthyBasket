import React from "react";
import Navbar from "./navbar";
import { Link } from "react-router-dom";
import PageHeader from "./pageHeader";
import ServiceIcon from "./servicesicon";
import CheckOut from "./CheckOutDetail";
import Paypalicon from "../assets/image/Paypalicon.png"
import visa1 from "../assets/image/visa1.png"
import googlepay2 from "../assets/image/googlepay2.jpeg"

function PaymentMethod() {
    return (
        <>
            <Navbar />
            <PageHeader h2="CheckOut" prepage="Shopping Cart" currentpage="Checkout" />
            <div className="container-fluid py-5">
                <div className="container my-2">
                    <h3 className="text-black">Select Payment Method</h3>
                    <div className="row">
                        <div className="col-md-8">
                            <form action="#">
                                <div className="mb-3 px-3 p-2 border border-1 border-dark-subtle border-opacity-75 rounded-pill">
                                    <div className="form-check">
                                        <input className="form-check-input rounded-pill" type="radio" name="radioDefault" id="radioDefault1" />
                                        <label className="form-check-label text-black fs-6 fw-bold" for="radioDefault1">
                                            <img src={Paypalicon} alt="Paypal" width="40" className="me-2" /> Paypal
                                        </label> </div></div>
                                <div className="mb-3 px-3 p-2 border border-1 border-dark-subtle border-opacity-75 rounded-pill">
                                    <div className="form-check">
                                        <input className="form-check-input rounded-pill" type="radio" name="radioDefault" id="radioDefault1" />
                                        <label className="form-check-label text-black fs-6 fw-bold" for="radioDefault1">
                                            <img src={visa1} alt="Paypal" width="40" className="me-2" /> **** **** **** 8074
                                        </label> </div></div>
                                <div className="mb-3 px-3 p-2 border border-1 border-dark-subtle border-opacity-75 rounded-pill">
                                    <div className="form-check">
                                        <input className="form-check-input rounded-pill" type="radio" name="radioDefault" id="radioDefault1" />
                                        <label className="form-check-label text-black fs-6 fw-bold" for="radioDefault1">
                                            <img src={googlepay2} alt="Paypal" width="30" className="me-2" /> Google Pay
                                        </label> </div></div>
                                <div className="mb-3 px-3 p-2 border border-1 border-dark-subtle border-opacity-75 rounded-pill">
                                    <div className="form-check">
                                        <input className="form-check-input rounded-pill" type="radio" name="radioDefault" id="radioDefault1" />
                                        <label className="form-check-label text-black fs-6 fw-bold" for="radioDefault1">
                                            <i className="fa-solid fa-money-bill text-success fs-4 px-2"></i> Cash On Delivery
                                        </label> </div></div>
                            </form>
                            <div className="mb-3  px-3 p-2 border border-1 border-dark-subtle border-opacity-75 rounded">
                                <div className="form-check m-2">
                                    <input className="form-check-input rounded-pill" type="radio" name="radioDefault" id="radioDefault1" />
                                    <label className="form-check-label text-black fs-6 fw-bold" for="radioDefault1">
                                        <i class="fa-solid fa-credit-card text-success fs-4 px-2"></i> Add New Credit/Debit Card
                                    </label> </div>
                              
                                    <label htmlFor="holder name" className="m-2 text-black">Card Holder Name*</label>
                                    <input type="text" className="form-control roundede-pill" placeholder="Ex.John Doe" />
                                    <label htmlFor="holder name" className="m-2 text-black">Card Number*</label>
                                    <input type="text" className="form-control roundede-pill" placeholder="4716 9627 1635 8047" />
                                    <div className="row">
                                         <div className="col-md-6">
                                    <label htmlFor="holder name" className="m-2 text-black">Expiry Date*</label>
                                    <input type="text" className="form-control roundede-pill" placeholder="02/30" />
                                  </div>
                                  <div className="col-md-6">
                                    <label htmlFor="holder name" className="m-2 text-black">CVV*</label>
                                    <input type="text" className="form-control roundede-pill" placeholder="000" />
                                  </div></div>

                                <input type="checkbox" className="my-4 mx-3"/><span className="text-black">Save card for future payments</span>
                             
                                
                            </div>
                           <button type="submit" className="btn btn-success">Add Card</button>
                        </div>
                        {/* order summary */}
                           <div className="col-md-4">
                                                    <h6 className="text-black">Order Summary</h6>
                                                    <hr />
                                                    <table className="table table-borderless">
                                                        <tbody>
                                                            <tr>
                                                                <td>Items</td>
                                                                <td className="text-end">9</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Sub Total</td>
                                                                <td className="text-end">
                                                                    $85.40
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>Shipping</td>
                                                                <td className="text-end">$20.00</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Taxes</td>
                                                                <td className="text-end">$2.00</td>
                                                            </tr>
                                                            <tr className="fw-bold border-top">
                                                                <td>Total</td>
                                                                <td className="text-end">$74.40</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                   <button
                                                        className="btn btn-success w-100 mt-2 rounded-pill">
                                                       Confirm Payment
                                                    </button>
                                                </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PaymentMethod