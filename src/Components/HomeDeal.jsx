import React from "react";
import vanish from "../assets/image/vanish.jpg";
import bodywasher from "../assets/image/bodywasher.png";

function TodayDeal() {
  return (
    <div className="container my-5">
      {/* Section Header */}
      <div className="row align-items-center mb-4">
        <div className="col-md-6">
          <h6 className="text-muted">Today Deals</h6>
          <h3 className="fw-bold">
            <span className="text-success">Deals </span>
            <span className="text-dark">of the Day</span>
          </h3>
        </div>
        <div className="col-md-6 text-muted d-none d-md-block">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam.
        </div>
      </div>

      {/* Cards Section */}
      <div className="row g-4">
        {/* Card 1 */}
        <div className="col-md-6">
          <div className="card border-0 shadow-sm h-100">
            <div className="row g-0">
              {/* Left Side: Product Image */}
              <div className="col-4 d-flex align-items-center justify-content-center p-3">
                <img
                  src={vanish}
                  alt="Laundry Detergent"
                  className="img-fluid"
                  style={{ maxHeight: "150px", objectFit: "contain" }}
                />
              </div>

              {/* Right Side: Details */}
              <div className="col-8 p-3">
                <div className="d-flex justify-content-between">
                  <span className="badge bg-success">25% off</span>
                  <i className="bi bi-heart text-muted"></i>
                </div>
                <h6 className="text-muted mt-2">Laundry Supplies</h6>
                <h5 className="fw-bold">Laundry Detergent</h5>
                <p className="mb-1">
                  <span className="fw-bold text-dark me-2">$75.00</span>
                  <span className="text-muted text-decoration-line-through">
                    $100.00
                  </span>
                </p>
                <div className="d-flex align-items-center mb-2">
                  <span className="text-warning me-1">★</span>
                  <span className="fw-bold">4.9</span>
                </div>
                <p className="text-muted small">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <button className="btn btn-outline-success rounded-pill">
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-md-6">
          <div className="card border-0 shadow-sm h-100">
            <div className="row g-0">
              {/* Left Side: Product Image */}
              <div className="col-4 d-flex align-items-center justify-content-center p-3">
                <img
                  src={bodywasher}
                  alt="Body Wash"
                  className="img-fluid"
                  style={{ maxHeight: "150px", objectFit: "contain" }}
                />
              </div>

              {/* Right Side: Details */}
              <div className="col-8 p-3">
                <div className="d-flex justify-content-between">
                  <span className="badge bg-success">50% off</span>
                  <i className="bi bi-heart text-muted"></i>
                </div>
                <h6 className="text-muted mt-2">Personal Care</h6>
                <h5 className="fw-bold">Body Wash</h5>
                <p className="mb-1">
                  <span className="fw-bold text-dark me-2">$25.00</span>
                  <span className="text-muted text-decoration-line-through">
                    $50.00
                  </span>
                </p>
                <div className="d-flex align-items-center mb-2">
                  <span className="text-warning me-1">★</span>
                  <span className="fw-bold">5.0</span>
                </div>
                <p className="text-muted small">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <button className="btn btn-outline-success rounded-pill">
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodayDeal;
