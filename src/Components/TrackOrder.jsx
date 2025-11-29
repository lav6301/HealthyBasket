import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import ServiceIcon from "./servicesicon";
import { Link } from "react-router-dom";
import PageHeader from "./pageHeader";

function TrackOrder(){
    return (
        <>
        <Navbar />
          <PageHeader
        h2="Track Your Order" prepage="Home"  currentpage="Track Your Order"/>
        <div className="container-fluid py-5">
            <div className="container my-2">
                <p className="text-secondary-sublte">To track you order please enter your Order ID
                    in the box below and presss the "Track Order" button. This was given to you on
                    your receipt ad in the confirmation email you should have received
                </p>
                <form action="#">
                    <div className="row">
                       <div className="mb-3">
                                        <label htmlFor="Order ID" className="m-2 text-black fw-semibold">
                                            Order ID *</label>
                                        <input typr="text" className="form-control rounded-pill" id="company_name"
                                            placeholder="Enter Order ID" />
                                    </div>
                       <div className="mb-3">
                                        <label htmlFor="Order ID" className="m-2 text-black fw-semibold">
                                            Billing Email*</label>
                                        <input typr="text" className="form-control rounded-pill" id="company_name"
                                            placeholder="Enter Email Address" />
                                    </div>
                    </div>
                    <button type="button" className="btn btn-success rounded-pill">Track Order</button>
                </form>
         
            </div>
               
        </div>
            <ServiceIcon />
                <Footer />
        </>
    )
}
 

export default TrackOrder