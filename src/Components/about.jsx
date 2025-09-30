import React from "react";
import Navbar from "./navbar";
import { Link } from "react-router-dom";
import Footer from "./footer";
import ServiceIcon from "./servicesicon";
import aboutimg from "../assets/image/aboutimg.jpg"
import aboutimg2 from "../assets/image/aboutimg2.jpg";
import aboutimg3 from "../assets/image/aboutimg3.jpg";




function AboutHeader(){
  return(
    <>
                <h6 className="text-dark">About us</h6>
                <h3 className="text-dark">Your Trusted Partner in 
                <span className="text-success ms-2">Fresh Grocery Delivery</span></h3>
                <p className="text-dark fw-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum, hic! Quam impedit dolore accusamus incidunt neque iusto cupiditate fugit saepe.</p>
                <li className="about-list"><i className="fa-regular fa-circle-check bg-warning text-dark rounded-circle me-2"></i>Fresh and High-Quality Groceries</li>
                <li className="about-list"><i className="fa-regular fa-circle-check bg-warning text-dark rounded-circle me-2"></i>Eco-Friendly and Sustainable Practices</li>
                <li className="about-list"><i className="fa-regular fa-circle-check bg-warning text-dark rounded-circle me-2"></i>Convenient and Reliable Delivery</li>
                <p className="text-dark my-5">Jenny Alexander<i className="fa-solid fa-circle text-secondary mx-2"></i>Founder</p>
    </>
  )
}

function AboutCart(props){
  return(
    <>
    <div className="col-md-3 col-xl-3 col-lg-4 col-sm-12 gap-4 mt-3 col-sm-2">
            <div className="card">
              <img src={props.img} className="card-img-top about-card-img" alt="image" />
              <div className="card-body border border-0">
                <h5 className="card-title fw-bold text-dark">{props.h5}</h5>
                <p className="card-text text-warning">{props.p}</p>
              </div>
            </div>
          </div>
    </>
  )
}

function AboutUs() {
  return (
    <>
      <Navbar />
      <div className="container-fluid py-5 about-header">
      <h2 className="text-center text-success">About Us</h2>
      <ol className="breadcrumb justify-content-center mb-0">
            <li className="breadcrumb-item">
            <a className="text-white"  href="index.html">Home</a></li>
            <li className="breadcrumb-item">
            <a className="text-secondary" href="#">About Us</a></li>
        </ol>
      </div>
      <div className="container py-5 my-5">
        <div className="row">
            <div className="col-md-5 col-xl-6">
                <div className="ribbon">
                    <span className="ribbonspan fw-bold">18 of Services</span>
                </div>

           
            </div>
            <div className="col-md-7 col-xl-6 mt-3">
                <AboutHeader />
            </div></div>
            {/* about header ends */}
            {/* about us mission starts */}
            
            <div className="row  d-flex align-item-center justify-content-center">
                <div className="col-md-8 my-5">
                    <img src={aboutimg3} alt="image" className="img-fluid rounded w-100"/>
                    <div className="row bg-light rounded px-5">
                      <div className="col-md-6 my-4">
                        <div className="about-vision-icon bg-success rounded-3 d-flex justify-content-center align-item-center">
                        <i class="fa-solid fa-rocket text-white fa-2x text-center mt-3"></i>
                        </div>
                        <h5 className="text-start mt-2 text-dark">Our Vision</h5>
                        <p className="text-dark">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla, quisquam delectus. Delectus esse eius ea, omnis libero odio? Unde, assumenda.</p>
                    
                      </div>
                      <div className="col-md-6 my-4">
                        <div className="about-vision-icon bg-success rounded-3 d-flex justify-content-center align-item-center">
                        <i class="fa-solid fa-eye text-white text-center 
                        fa-2x mt-3"></i>
                        </div>
                        <h5 className="text-start mt-2 text-dark">Our Mission</h5>
                        <p className="text-dark">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla, quisquam delectus. Delectus esse eius ea, omnis libero odio? Unde, assumenda.</p>
                        
                        
                        

                      </div>
                    </div>
                </div>
               
            </div>   </div>
        {/* mission and vision ends */}
        {/* our tem starts */}
        <div className="container py-2">
        <h6 className="text-secondary text-center">Our Team</h6>
        <h3 className="text-black fw-bold text-center mx-2">Meet The Passionate 
        <span className="fw-bold text-success text-center">Team Behind Our Success</span> </h3> 
        <div className="row">
          <AboutCart 
            img={aboutimg2} h5 ="Luna Alexander" p="Founder & CEO"/>
          <AboutCart  img={aboutimg3} h5 ="Luna Alexander" p="Founder & CEO"/>
          <AboutCart img={aboutimg3} h5 ="Luna Alexander" p="Founder & CEO"/>
          <AboutCart img={aboutimg3} h5 ="Luna Alexander" p="Founder & CEO" />
        </div>
       </div>
      {/* our team end */}


      {/* service icon start */}
        <ServiceIcon />
      {/* service icon ends */}
   
   {/* Subscribe and footer starts */}
    <Footer />
   
    {/* Subscribe  and footer ends*/}
    </>
  );
}

export default AboutUs;
