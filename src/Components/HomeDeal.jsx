import React from "react";
import vanish from "../assets/image/vanish.jpg";

function TodayDeal(){
    return(
        <>
        <div className="container my-4">
            <h6 className="text-gray">Today Deals</h6>
            <div className="row mt-2">
                <div className="col-md-6">            
            <h3 className="text-success">Deals  <span className="text-black">
                of the day</span></h3>
            </div>
            <div className="col-sm-12 col-md-6 d-flex justify-content-end text-gray">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex harum maxime eos ad itaque ratione quos sint veniam sed inventore.
            </div> 
            </div>
            {/* card row below */}
            <div className="row d-flex">
                <div className="md-6 border border-1 border-bg-success">
                   <div className="d-flex justify-content-between align-items-center p-2">
                   <span className="badge bg-success">20% off</span>
                   </div>
                    <img src={vanish} alt="no image"  className="bg-gray"/>
                    <p className="text-black d-flex justify-content-end">
                    </p>
                    </div>
                  
                
            </div>
        </div>
        </>
    )
}


export default TodayDeal