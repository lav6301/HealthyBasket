import React from "react";
import '../assets/css/home.css'; 
import chocolatebox from "../assets/image/chocolatebox.png";
import cake from "../assets/image/cake.png";
import almondMilk from "../assets/image/almondMilk.png";
import almondMilk2 from "../assets/image/almondMilk2.png";
import Brownbread from "../assets/image/Brownbread.png";

function ProductCard(props) {
  return (
    <div className="card bg-white">
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <button className="offer bg-success text-white rounded border-0">
            {props.offer}
          </button>
          <div className="heart bg-light rounded-circle text-center border border-dark">
            <i className="fa-regular fa-heart pt-3"></i>
          </div>
        </div>
        <div className="card-img product-img">
  <img src={props.img} alt="no img" className="img-fluid" />
</div>
        <div className="d-flex justify-content-between">
          <h6 className="text-success fw-light">{props.type}</h6>
          <h5 className="fw-bold text-black">
            <i className="fa-solid fa-star text-warning"></i> {props.rating}
          </h5>
        </div>
        <h5 className="text-black">{props.title}</h5>
        <h6 className="text-gray fw-light">{props.weight}</h6>
        <div className="d-flex justify-content-start gap-3">
          <h5 className="text-black">{props.price}</h5>
          <del className="text-gray">{props.oldprice}</del>
          <button type="button" class="btn btn-outline-success btn-sm"><i className="fa-sharp fa-solid fa-bag-shopping px-2"></i>Add</button>
          
        </div>
      </div>
    </div>
  );
}

function BestSeller() {
  return (
    <div className="container-fluid">
      <div className="container my-5 py-5 bg-light rounded">
        <h6 className="text-gray">Best Seller</h6>
        <div className="row">
          <div className="col-md-4">
            <h3 className="text-success">
              Best Seller <span className="text-black">Products</span>
            </h3>
          </div>
          <div className="col-md-8 col-sm-12 py-2 d-flex justify-content-end">
            <button type="button" className="btn btn-success btn-sm">
               View All Products →
            </button>
          </div>
        </div>

        {/* Product cards row */}
        <div className="row g-4 mt-3">
          <div className="col-md-3">
            <ProductCard
              offer="50% off"
              img={chocolatebox}
              type="Sweets & Snacks"
              rating="4.9"
              title="Chocolate Ball"
              weight="500g"
              price="$25.00"
              oldprice="$50.00"
            />
          </div>
          <div className="col-md-3">
            <ProductCard
              offer="30% off"
              img={Brownbread}
              type="Bakery"
              rating="4.7"
              title="Brown Bread"
              weight="200g"
              price="$5.00"
              oldprice="$10.00"
            />
          </div>
          <div className="col-md-3">
            <ProductCard
              offer="20% off"
              img={cake}
              type="Snacks & Sweets"
              rating="4.5"
              title="Chocolate Cake"
              weight="250g"
              price="$15.00"
              oldprice="$20.00"
            />
          </div>
           <div className="col-md-3">
            <ProductCard
              offer="20% off"
              img={almondMilk2}
              type="Dairy Products"
              rating="4.5"
              title="Almond Milk"
              weight="500 ml"
              price="$8.00"
              oldprice="$10.00"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BestSeller;