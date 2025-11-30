import React from "react";
import Navbar from "./navbar";
import PageHeader from "./pageHeader";
import ServiceIcon from "./servicesicon";
import Footer from "./footer";

function TrackDetail(){
    return(
        <>
        <Navbar />
        <PageHeader
        h2="Track Your Order" prepage="Home"  currentpage="Track Your Order"/>
        <div className="container-fluid py-5">
            <div className="container my-2">
                <h5 className="text-black">Order Status</h5>
                <p className="text-dark">Order ID : #sdGT1254FD </p>
               <div className="row">
                <div className="col">
                    
                </div>
                </div> 
            </div>    
            
        </div>  
        </>
    )
}

export default TrackDetail