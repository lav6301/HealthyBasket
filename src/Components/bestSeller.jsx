import React from "react";
import chocolatebox from "../assets/image/chocolatebox.png";

function ProductCard(Props){
    return(
        <>
         <div className="row">
                   
                       <div className="card bg-white">
                        <div className="card-body">
                            <div className="d-flex justify-content-between">
                         <button className="offer bg-success 
                         text-white rounded border-0">{Props.offer}</button>
                        <div className="heart bg-light 
                        rounded-circle text-center border border-dark">
                            <i className="fa-regular fa-heart pt-3"></i>
                        </div></div>
                        <div className="card-img">
                            <img src={Props.img} alt="no img"  className="img-fluid"/>
                        </div>
                        <div className="d-flex justify-content-between">
                        <h6 className="text-success fw-light">{Props.type}</h6>
                            <h5 className="fw-bold text-black">
                            <i class="fa-solid fa-star text-warning"></i>{Props.rating}</h5>
                        </div>
                        <h4 className="text-black">{Props.title}</h4>
                        <h6 className="text-gray fw-light">{Props.weight}</h6>
                         <div className="d-flex justify-content-start  gap-3">
                            <h5 className="text-black">{Props.price}</h5>
                            <del className="text-gray">{Props.oldprice}</del>
                            <button type="button" className="btn btn-sm px-5 border border-bg-success text-success fw-bold" ><i class="fa-sharp fa-solid fa-bag-shopping px-2 "></i>Add</button>
                         </div>
                        </div> 
                        
                        
                        </div>
                    </div>
                
        </>
    )
}


function BestSeller(){
    return(
        <>
        <div className="container-fluid">
            <div className="container my-5 py-5 bg-light rounded">
                <h6 className="text-gray">Best Seller</h6>
                <div className="row">
                    <div className="col-md-4">
                        <h3 className="text-success">Best Seller <span className="text-black">Products</span></h3>
                    </div>
                    <div className="col-md-8 col-sm-12 py-2 d-flex justify-content-end">
                        <button type="buttton" class="btn  btn-success">View All Products</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
               <ProductCard 
               offer="50% off"
               img={chocolatebox}
               type="Sweets & Snacks"
               rating="4.9"
               title="Chocolate Ball"
               weight="500g"
               price="$25.00"
               oldprice="50.00" 
               /></div></div>

    
               
            </div>
        </div>
        </>
    )
}


export default BestSeller