import React from "react";
import Navbar from "./navbar";
import PageHeader from "./pageHeader";
import ServiceIcon from "./servicesicon";
import { Link } from "react-router-dom";
import PaymentMethod from "./PaymentDetail";

function CheckOut() {
    return (
        <>
            <Navbar />
            <PageHeader h2="CheckOut" prepage="Shopping Cart" currentpage="Checkout" />
            <div className="container-fluid py-5">
                <div className="container my-2">
                    <h4 className="text-dark">Billing Details</h4>
                    <div className="row">
                        <div className="col-md-8">
                            <form action="#">
                                <div className="mb-3">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label htmlFor="First_Name" className="m-2 text-black fw-semibold">First Name *</label>
                                            <input type="text" className="form-control rounded-pill" id="First_name" placeholder="Leslie" required />
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="Last_Name" className="m-2 text-black fw-semibold">Last Name *</label>
                                            <input type="text" className="form-control rounded-pill" id="Last_name" placeholder="Smith" required />
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="Company Name (Optional)" className="m-2 text-black fw-semibold">Company Name (Optional)</label>
                                        <input typr="text" className="form-control rounded-pill" id="company_name"
                                            placeholder="Enter Company Name" />
                                    </div>
                                    <div class="mb-3">
                                        <label for="country" class="form-label m-2 text-black fw-semibold">Country</label>
                                        <select class="form-select" id="country" name="country" required>
                                            <option value="" selected disabled>Select your country</option>
                                            <option value="india">India</option>
                                            <option value="usa">United States</option>
                                            <option value="uk">United Kingdom</option>
                                            <option value="canada">Canada</option>
                                            <option value="australia">Australia</option>
                                            <option value="germany">Germany</option>
                                            <option value="france">France</option>
                                            <option value="japan">Japan</option>
                                            <option value="china">China</option>
                                            <option value="uae">UAE</option>

                                        </select>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="Street Name" className="m-2 text-black fw-semibold">Street Name *</label>
                                        <input type="text" className="form-control rounded-pill" id="Street_name"
                                            placeholder="Enter Street Address" />
                                        <div className="mb-3">
                                            <label htmlFor="city Name" className="m-2 text-black fw-semibold">City Name *</label>
                                            <input type="text" className="form-control rounded-pill" id="City_name"
                                                placeholder="Enter City Name" />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="Xip Code " className="m-2 text-black fw-semibold">Zip Code *</label>
                                            <input type="text" className="form-control rounded-pill" id="Zip_Code"
                                                placeholder="Enter Xip Code" />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="Phone Number" className="m-2 text-black fw-semibold">Phone Number *</label>
                                            <input type="text" className="form-control rounded-pill" id="Phone-number"
                                                placeholder="Enter Phone Number" />
                                        </div>    <div className="mb-3">
                                            <label htmlFor="Emailid" className="m-2 text-black fw-semibold">Email *</label>
                                            <input type="text" className="form-control rounded-pill" id="Email_id"
                                                placeholder="Enter City Name" />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="Devilery" className="m-2 text-black fw-semibold">Delivery Address*</label> <br />
                                            <div className="mb-3">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="Same-Address"></input>
                                                <label htmlFor="SameDevilery" className="mx-2 text-black fw-normal">Same Address</label>
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="Same-Address"></input>
                                                <label htmlFor="SameDevilery" className="mx-2 text-black fw-normal">Other Address</label>
                                            </div>
                                        </div>

                                    </div></div>
                            </form>


                        </div>
                        {/* /summary */}
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
                            <Link to="/PaymentMethod">   <button
                                className="btn btn-success w-100 mt-2 rounded-pill">
                                Proceed to payment
                            </button> </Link>
                        </div>
                    </div>

                </div>
                <ServiceIcon />
            </div>
        </>
    )
}

export default CheckOut