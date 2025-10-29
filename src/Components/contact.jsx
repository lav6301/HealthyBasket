import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import PageHeader from "./pageHeader";
import '../assets/css/home.css'; 
import aboutimg4 from "../assets/image/aboutimg4.jpg";
import aboutimg2 from "../assets/image/aboutimg2.jpg";
import ServiceIcon from "./servicesicon";


function ContactUs(){
    return (
        <>
        <Navbar />
        <PageHeader h2="Contact Us" prepage="Home" currentpage="Contactus" />
        <div className="container-fluid py-5">
            <div className="container my-2">
            <div className="row">
                <div className="col-md-7">
                     <form action="#" method="POST">
                    <div className="row">
                        <div className="col-md-6 mb-3 mx-2">
                        <label For="Name" className="form-label text-black fw-bold">First Name *</label>
                        <input type="text" required className="form-control rounded-pill" placeholder="Ex:John" id="firstName"/>
                        </div>
                        {/* last name */}
                         <div className="col-md-4 mb-3">
                        <label For="Name" className="form-label text-black fw-bold">Last Name *</label>
                        <input type="text" required className="form-control rounded-pill" 
                        placeholder="Ex:Doe" id="firstName"/>
                        </div>
                        {/* email */}
                        <div className="col-md-6 mb-3 mx-2">
                        <label For="Name" className="form-label text-black fw-bold">Email*</label>
                        <input type="email" placeholder="example@gmail.com" required className="form-control rounded-pill" id="firstName"/>
                        </div>
                        {/* phone */}
                        <div className="col-md-4 mb-3 mx-2">
                        <label For="Name" className="form-label text-black fw-bold">Phone*</label>
                        <input type="text" placeholder="Enter Phone Number" 
                        required className="form-control rounded-pill" id="firstName"/>
                        </div>
                        <div className="col-md-12 mb-3 mx-2">
                        <label For="Name" className="form-label text-black fw-bold">Subject*</label>
                        <input type="text" placeholder="Enter here.." required className="form-control rounded-pill"
                         />

                        </div>
                        <div className="col-md-12 mb-3 mx-2">
                        <label For="Name" className="form-label text-black fw-bold">Your Message*</label>
                        <textarea className="form-control" placeholder="Enter here.." 
                        rows="3"></textarea>
                        </div>
                        </div>
                        <button type="button" className="btn btn-success text-white rounded-pill mt-3"
                         value="submit">Send a Message</button>
                    </form>
                </div>
                <div className="col-md-5">
            <img
               src={aboutimg2}
               alt="image"
               className="img-fluid rounded contactImg"
             />
                </div>
            </div>
        </div>

        {/* about us mail these */}
        
      
            

        

</div>
        
        <ServiceIcon />
        <Footer />
        </>
    );
}

export default ContactUs

