import React from "react";

function ReviewStar(){
    return(
        <>
        <div className="mb-3">
            <h6 className="text-black">Review</h6>
            <ul className="list-unstyled px-1">
                <li className="text-black fw-bold">
                <input type="checkbox"/>   <i class="fa-solid fa-star text-warning"></i>
                <i class="fa-solid fa-star text-warning"></i>
                <i class="fa-solid fa-star text-warning"></i>
                <i class="fa-solid fa-star text-warning"></i>
                <i class="fa-solid fa-star text-warning"></i>
                   5 star</li>
            </ul>

             <ul className="list-unstyled px-1">
                <li className="text-black fw-bold"><input type="checkbox"/> <i class="fa-solid fa-star text-warning"></i>
                <i class="fa-solid fa-star text-warning"></i>
                <i class="fa-solid fa-star text-warning"></i>
                <i class="fa-solid fa-star text-warning"></i>
                <i class="fa-solid fa-star text-muted"></i>
                   4 star</li>
            </ul>

             <ul className="list-unstyled">
                <li className="text-black fw-bold"><input type="checkbox"/> <i class="fa-solid fa-star text-warning"></i>
                <i class="fa-solid fa-star text-warning"></i>
                <i class="fa-solid fa-star text-warning"></i>
                <i class="fa-solid fa-star text-muted"></i>
                <i class="fa-solid fa-star text-muted"></i>
                   3 star</li>
            </ul>
             <ul className="list-unstyled">
                <li className="text-black fw-bold"><input type="checkbox"/> <i class="fa-solid fa-star text-warning"></i>
                <i class="fa-solid fa-star text-warning"></i>
                <i class="fa-solid fa-star text-muted"></i>
                <i class="fa-solid fa-star text-muted"></i>
                <i class="fa-solid fa-star text-muted"></i>
                   2 star</li>
            </ul> <ul className="list-unstyled">
                <li className="text-black fw-bold"><input type="checkbox"/> <i class="fa-solid fa-star text-warning"></i>
                <i class="fa-solid fa-star text-muted"></i>
                <i class="fa-solid fa-star text-muted"></i>
                <i class="fa-solid fa-star text-muted"></i>
                <i class="fa-solid fa-star text-muted"></i>
                   1 star</li>
            </ul>

        </div>

        <div className="mb-3">
            <h6 className="text-black">Brand</h6>
            <ul className="list-unstyled text-black mx-2">
                <li><input type="checkbox" /> FreshHarvest</li>
                <li><input type="checkbox" /> Nature's Best</li>
                <li><input type="checkbox" /> GoodGrains</li>
                <li><input type="checkbox" /> FarmFresh</li>
                <li><input type="checkbox" /> GreenGrocer</li>
            </ul>
        </div>
        <div className="mb-3">
            <h6 className="text-black">Product Type</h6>
            <ul className="list-unstyled text-black mx-2">
                <li><input type="checkbox" /> Packaged Goods</li>
                <li><input type="checkbox" /> Fresh Product</li>
                <li><input type="checkbox" /> Frozen Foods</li>
                
            </ul>
        </div>
        <div className="mb-3">
            <h6 className="text-black">Availability</h6>
            <ul className="list-unstyled text-black mx-2">
                <li><input type="checkbox" /> In Stock</li>
                <li><input type="checkbox" /> Out of Stock</li>
             
            </ul>
        </div>

        </>
    )
}

export default ReviewStar