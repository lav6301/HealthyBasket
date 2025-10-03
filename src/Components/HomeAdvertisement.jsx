import React from "react";
import fuits from "../assets/image/fuits.jpeg";
import homeadverimage2 from "../assets/image/homeadverimage2.png"
import homeadverimage3 from "../assets/image/homeadverimage3.png"
function HomeAdvertisement(){
    return (<>
    <div className="container py-5 my-5 bg-light rounded">
      <div className="row g-4">
        {/* Card 1 */}
        <div className="col-md-6">
          <div className="card h-100 shadow-sm border-0 rounded-3">
            <div className="row g-0 align-items-center">
              <div className="col-md-6 p-4">
                <span className="badge bg-warning text-dark mb-2 px-3 py-2 rounded-pill">
                  Flat 20% Discount
                </span>
                <h4 className="fw-bold">Purely Fresh Vegetables</h4>
                <p className="text-muted">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </p>
                <button className="btn btn-success px-4 rounded-pill">
                  Shop Now →
                </button>
              </div>
              <div className="col-md-6 text-center">
                <img
                  src={homeadverimage2}
                  alt="Fresh Vegetables"
                  className="img-fluid rounded-end"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-md-6">
          <div
            className="card h-100 shadow-sm border-0 rounded-3 text-white"
            style={{ backgroundColor: "#f9c74f" }} // custom bg color
          >
            <div className="row g-0 align-items-center">
              <div className="col-md-6 p-4">
                <span className="badge bg-light text-dark mb-2 px-3 py-2 rounded-pill">
                  Flat 25% Discount
                </span>
                <h4 className="fw-bold text-dark">Fresh Fruits, Pure Quality</h4>
                <p className="text-dark">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </p>
                <button className="btn btn-success px-4 rounded-pill">
                  Shop Now →
                </button>
              </div>
              <div className="col-md-6 text-center">
                <img
                  src={homeadverimage3}
                  alt="Fresh Fruits"
                  className="img-fluid rounded-end"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
)}


export default HomeAdvertisement;