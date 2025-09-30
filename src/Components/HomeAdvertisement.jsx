import React from "react";
import fuits from "../assets/image/fuits.jpeg";


function HomeAdvertisement(){
    return (<>
    <div className="container py-5">
     <div className="row g-3">
        <div className="col-12 col-md-6 bg-muted">
            <div className="card  py-5 d-flex justify-content-center">
                <div className="col-4 offer rounded-pill bg-warning
                 p-1 text-black text-bold text-center mx-3 my-2">
                    Flat 20% Discount</div>
                <h3 className="text-black ms-3">Purely Fresh Vegetable</h3>
                <p className="ms-3 text-gray">Lorem ipsum dolor sit amet. ipsum dolor sit amet
                    ipsum dolor sit amet. ipsum dolor sit ametdolor sit amet. ipsum dolor sit amet</p>
                 <button type="button" className="mx-3 my-2 col-md-3 btn btn-success">Success</button>
                 <div className="col-md-6 d-flex justify-content-end align-self-end p-2">
                <img src={fuits} className="img-fluid rounded" alt="" />
        </div>
            </div>
          
        </div> 

        <div className="col-12 col-md-6 bg-muted">
            <div className="card  py-5 d-flex justify-content-center">
                <div className="col-4 offer rounded-pill bg-warning
                 p-1 text-black text-bold text-center mx-3 my-2">
                    Flat 20% Discount</div>
                <h3 className="text-black ms-3">Purely Fresh Vegetable</h3>
                <p className="ms-3 text-gray">Lorem ipsum dolor sit amet. ipsum dolor sit amet
                    ipsum dolor sit amet. ipsum dolor sit ametdolor sit amet. ipsum dolor sit amet</p>
                 <button type="button" className="mx-3 my-2 col-md-3 btn btn-success">Success</button>
                 <div className="col-md-6 d-flex justify-content-end align-self-end p-2">
                <img src={fuits} className="img-fluid rounded" alt="" />
        </div>
            </div>
          
        </div> 
       
     </div>
    </div>
    </>
)}


export default HomeAdvertisement;