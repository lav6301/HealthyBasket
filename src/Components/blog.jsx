import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./navbar";
import Footer from "./footer";
import PageHeader from "./pageHeader";
import ServiceIcon from "./servicesicon";
import aboutimg from "../assets/image/aboutimg.jpg";
import fuits from "../assets/image/fuits.jpeg";
import aboutimg1 from "../assets/image/aboutimg1.jpg";
import aboutimg3 from "../assets/image/aboutimg3.jpg"
import BlogDetails from "./blogDetails";

export function BlogContent(props) {
  return (
    <>
      <img src={props.img} alt="image" className="img-fluid rounded blog-img" />
      <div className="d-flex justify-content-start align-item-center">
        <h6 className="text-start fw-medium text-dark mt-4">
          {props.author}
          <i class="fa-solid fa-circle text-success"></i> 
          {props.Postdate}{" "}
        </h6>{" "}
      </div>
      <h3 className="text-black fw-bold">{props.Posttitle}</h3>
      <p className="text-dark fw-medium lh-base">{props.Postdesc}</p>
       <Link to="/blogDetails" className="text-decoration-underline mt-2 d-block text-primary">
        Read More →
      </Link>
    </>
  );
}

function BlogSideHeading(props) {
  return (
    <>
      <h5 className="fw-bold text-black border-start border-warning border-5 ps-3 mt-5">
        {props.h5}
      </h5>
    </>
  );
}

function BlogCategoryBtn(props) {
  return (
    <>
      <button
        type="button"
        className="btn btn-outline-dark btn-groups px-2 my-1"
      >
        {props.btnName}
      </button>
    </>
  );
}

function BlogRecentPost(props) {
  return (
    <>
      <div className="row">
        <div className="col-md-12 mb-4 mt-2">
          <div className="d-flex align-items-start">
            <img
              src={props.img}
              alt="image"
              className="img-fulid recentpostimg rounded"
            />
            <div className="ms-3">
              <h6 className="text-black fw-bold">{props.title}</h6>
              <p className="text-dark mb-0 fs-6 fw-normal">{props.date}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function BlogPage() {
  return (
    <>
      <Navbar />
      <PageHeader h2="Our Blogs" prepage="Home" currentpage="Blogs" />

      {/* blog starts */}
      <div className="container-fluid bg-white">
        <div className="container mt-5 py-5">
          <h6 className="text-dark text-center">News & Blogs</h6>
          <h3 className="text-black fw-bold text-center">
            Our Lastest
            <span className="text-success fw-bold text-center ms-2">
              News & Blogs
            </span>
          </h3>
          <div className="row">
            <div className="col-md-6 col-lg-9 mt-4">
              <BlogContent
                img={aboutimg}
                author="Jenny Alexander "
                Postdate="13 July 2025"
                Posttitle="How to Create a Grocery Shopping List: Stay Organized and Efficient"
                Postdesc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus earum porro veritatis fuga obcaecati  maxime, dolores quo laborum suscipit."
              />
             

              <BlogContent
                img={aboutimg3}
                author="Jenny Alexander "
                Postdate="12 July 2025"
                Posttitle="Summer Produce Guide: Fresh Fruits and Vegetables to Enjoy"
                Postdesc="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Voluptatibus earum porro veritatis fuga obcaecati  maxime, dolores quo 
                laborum suscipit."
              />

              <BlogContent
                img={aboutimg}
                author="Jenny Alexander "
                Postdate="11 July 2025"
                Posttitle="Top 10 Superfoods for a Balanced Diet:
                Boost Your Health with These Nutrient-Rich Foods"
                Postdesc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus earum porro veritatis fuga obcaecati  maxime, dolores quo laborum suscipit."
              />

              <BlogContent
                img={aboutimg}
                author="Jenny Alexander "
                Postdate="10 July 2025"
                Posttitle="Benefits of Orangic Foods:Why You should Consider Going Orangic"
                Postdesc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus earum porro veritatis fuga obcaecati  maxime, dolores quo laborum suscipit."
              />

              <BlogContent
                img={aboutimg}
                author="Jenny Alexander "
                Postdate="09 July 2025"
                Posttitle="What's in Season:Summer Produce Guide:Fresh Fruits and Vegetables o Enjoy"
                Postdesc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus earum porro veritatis fuga obcaecati  maxime, dolores quo laborum suscipit."
              />



            </div>


            <div className="col-md-6 col-lg-3">
              <BlogSideHeading h5="Search " />

              <div className="d-flex justify-content-center align-item-center">
                <input
                  className="form-control rounded"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                ></input>
                <i className="fa-solid fa-magnifying-glass text-dark position-relative blog-search-icon"></i>
              </div>
              <hr className="fw-bold my-3" />

              <BlogSideHeading h5=" Popular Category" />
              <BlogCategoryBtn btnName="Shopping Tips" />
              <BlogCategoryBtn btnName="Grocery" />
              <BlogCategoryBtn btnName="Fruits & Vegetables" />
              <BlogCategoryBtn btnName="Orangic Food" />
              <BlogCategoryBtn btnName="Bakery Products" />

              <hr />

              <BlogSideHeading h5="Recent Posts" />
              <BlogRecentPost
                img={fuits}
                title="Top 10 Healthy Snacks for Busy Families"
                date="10 July 2025"
              />

              <BlogRecentPost
                img={fuits}
                title="The Best Beverages to Keep You Hydrated"
                date="09 July 2025"
              />

              <BlogRecentPost
                img={fuits}
                title="The Benefits of Drinking Herbal Teas"
                date="08 July 2025"
              />
              {/* offer blog image */}
              <div className="row">
                <div className=" mx-4 col-md-10 col-lg-10 position-relative image-bannerblog">
                  <div className="offerblog d-flex flex-column justify-content-center align-items-center text-center">
                    <h6 className="fw-bold text-light">Summer Sale</h6>
                    <h4 className="fw-bold text-white">
                      <span className="text-warning fw-bold">20% off on </span>{" "}
                      Freshest Produce
                    </h4>
                    <button
                      type="button"
                      className="btn btn-warning rounded-pill mt-2"
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
{/* pagination starts */}
  <nav aria-label="...">
  <ul class="pagination mt-5">
    <li class="page-item"><a href="#" class="page-link">Previous</a></li>
    <li class="page-item active"><a class="page-link" href="#">1</a></li>
    <li class="page-item">
      <a class="page-link" href="#" aria-current="page">2</a>
    </li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
     <li class="page-item"><a class="page-link" href="#">4</a></li>
      <li class="page-item"><a class="page-link" href="#">5</a></li>
       <li class="page-item"><a class="page-link" href="#">6</a></li>
    <li class="page-item"><a class="page-link" href="#">Next</a></li>
  </ul>
</nav>

{/* pagination ends */}
        </div>
      </div>


      {/* services iccon starts*/}
      <ServiceIcon />
      {/* services iccon ends*/}

      {/* footer component */}
      <Footer />
    </>
  );
}

export default BlogPage;
