import React from "react";

function ServiceIcon(){
    return(
        <>
         <div className="container my-5">
  <div className="row text-start">
    
    {/* Feature 1 */}
    <div className="col-md-4 mb-4">
      <div className="d-flex align-items-start">
        <i className="fa-solid fa-box-open text-secondary fa-3x"></i>
        <div className="ms-3">
          <h6 className="text-dark fw-bold">Free Shipping</h6>
          <p className="text-dark mb-0">Free shipping for orders above ₹500</p>
        </div>
      </div>
    </div>

    {/* Feature 2 */}
    <div className="col-md-4 mb-4">
      <div className="d-flex align-items-start">
        <i className="fa-solid fa-headset text-secondary fa-3x"></i>
        <div className="ms-3">
          <h6 className="text-dark fw-bold">24/7 Support</h6>
          <p className="text-dark mb-0">Call us anytime for assistance</p>
        </div>
      </div>
    </div>

    {/* Feature 3 */}
    <div className="col-md-4 mb-4">
      <div className="d-flex align-items-start">
        <i className="fa-solid fa-thumbs-up text-secondary fa-3x"></i>
        <div className="ms-3">
          <h6 className="text-dark fw-bold">Satisfaction Guarantee</h6>
          <p className="text-dark mb-0">100% quality assured on all products</p>
        </div>
      </div>
    </div>

  </div>
</div>

        
        </>
    )
}

export default ServiceIcon;