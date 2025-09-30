import React from "react";
import basketfruits from "../assets/image/basketfruits.png";
import '../assets/css/home.css';  

function HomeSecondOffer(){
    return(
        <>
        <div className="container py-5 bg-success rounded">
            <div className="row">            
                <div className="col-md-6">
                <h6 className="text-warning fw-light">Weeks Deals</h6>
            <h3 className="text-white">Unbeatable 
                Offers:Your <span className="text-warning">Weekly Grocery Shopping</span>
            </h3>
            <p className="text-light">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          <button type="button" class="btn btn-warning">Shop</button>
             </div>
             <div className="col-md-6 d-flex justify-content-end">
                <img src={basketfruits} alt="no image"  className="rounded img-fluid homesecondbanner" />
             </div>
        </div>
        </div>

        </>
    )
} 

export default HomeSecondOffer