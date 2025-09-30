import React from "react";
import Navbar from "./navbar";
import PageHeader from "./pageHeader";
import Footer from "./footer";
import aboutimg3 from "../assets/image/aboutimg3.jpg";
import headerprofile from "../assets/image/headerprofile.jpg";
import aboutimg4 from "../assets/image/aboutimg4.jpg";
import aboutimg2 from "../assets/image/aboutimg2.jpg";
import BlogPage from "./blog";
import { BlogContent } from "./blog.jsx";

function BlogDetails() {
  return (
    <>
      <Navbar />
      <PageHeader h2="Blog Details" prepage="Home" 
      currentpage="Blog Details" />
      <div className="container py-5">
        <div className="row">
          <div className="col-12 d-flex justify-content-center">
            <img
              src={aboutimg3}
              alt="image"
              className="img-fluid rounded blogDetailImg"
            />
          </div>
        </div>
      </div>
      {/* header content */}
      <div className="container-fluid">
        <div className="container my-3">
          {/* <div className="row"> */}
          <div className="d-flex justify-content-center">
            <button
              type="button"
              className="btn bg-secondary  text-black
        rounded-pill text-center"
            >
              Shopping Tips
            </button>
          </div>
          <h2 className="text-black text-center my-2">
            How to Create a Grocery Shopping List:Stay ORganized And Efficient
          </h2>
          <div className="row text-start">
            <div className="col-12 mb-4">
              <div className="d-flex justify-content-center align-item-center">
                <img
                  src={headerprofile}
                  alt="image"
                  className="img-fluid 
                    blogDetialsAuthimg"
                />
                <div className="ms-3 mt-3">
                  <h6 className="text-black">Wriiten by Lucas Alexander</h6>
                  <p className="text-dark">
                    14 July 2025
                    <span className="border-start border-light border-3 mx-1 ">
                      122 min Read
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* blog content starts */}
          <div className="row">
            <div className="col-md-1 border border-primary">
              <h6 className="text-dark">SHARE</h6>
              <div className="d-flex flex-column justify-content-center align-item-center">
                <i class="fa-brands fa-facebook text-black bg-warning my-2 blogdetail-icons"></i>
                <i class="fa-brands fa-pinterest text-black bg-warning my-2 blogdetail-icons"></i>
                <i class="fa-brands fa-instagram text-black bg-warning my-2 blogdetail-icons"></i>
              </div>
            </div>
            <div className="col-md-8  border border-black">
              <div className="d-flex">
                <h5 className="blogDetailContentStart bg-primary d-flex justify-content-center align-items-center mt-2">
                  L
                </h5>
                <p className="justify-content-center mt-3 ms-2">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Esse, consectetur. Lorem, ipsum. Lorem ipsum dolor sit amet
                  consectetur, adipisicing elit. A, asperiores?{" "}
                </p>
              </div>
              <p className="text-dark">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel
                officia facere dolorem expedita, nulla ab sint ad facilis
                dignissimos veritatis recusandae nostrum, autem laborum nesciunt
                itaque eveniet optio anbo.
              </p>

              <h4 className="text-black">
                Importance of an Organized Grocery Shopping List
              </h4>
              <p className="text-dark">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
                id facilis dolorem assumenda neque, iusto necessitatibus odit
                dignissimos suscipit? Nesciunt, quaerat ullam! Itaque ullam
                quaerat veniam officiis, animi ea nisi.
              </p>

              <h4 className="text-black">Evaluate Your Current Inventory</h4>
              <p className="text-dark">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
                id facilis dolorem assumenda neque, iusto necessitatibus odit
                dignissimos suscipit? Nesciunt, quaerat ullam! Itaque ullam
                quaerat veniam officiis, animi ea nis
              </p>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <img
                    src={aboutimg4}
                    alt="no image"
                    className="img-fulid rounded blogdetailcontimg"
                  />
                </div>
                <div className="col-md-6">
                  <img
                    src={aboutimg2}
                    alt="no image"
                    className="img-fulid rounded blogdetailcontimg"
                  />
                </div>
              </div>
              <h4 className="text-black mt-3">Categorize Your Grocery List</h4>
              <p className="text-dark">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
                id facilis dolorem assumenda neque, iusto necessitatibus odit
                dignissimos suscipit? Nesciunt, quaerat ullam! Itaque ullam
                quaerat veniam officiis, animi ea nis
              </p>

              <div className="my-3 bg-primary py-3 rounded">
                <h6 className="mx-2 text-warning fw-Medium">Also Read:</h6>
                <p className="mx-3 px-2 border-start text-white border-secondary border-2">
                  "The Benefits of Drinking Herbal Teas"
                </p>
              </div>

              <h4 className="text-black mt-3">
                Focus on Seasonal and Fresh Produce
              </h4>
              <p className="text-dark">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
                id facilis dolorem assumenda neque, iusto necessitatibus odit
                dignissimos suscipit? Nesciunt, quaerat ullam! Itaque ullam
                quaerat veniam officiis, animi ea nis
              </p>

              <div className="row">
                <div className="col-md-4">
                  <div className="d-flex justify-content-center align-items-center rounded-circle bg-warning blogdetailscolum text-black fs-4 fw-bold">
                    01
                  </div>
                  <h4 className="text-black fw-bold mt-2">Health Benefits</h4>
                  <p className="text-dark">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                    in provident eveniet doloremque vitae. Sunt, tenetur in.
                    Atque,
                  </p>
                </div>

                <div className="col-md-4 border-start border-warning border-2">
                  <div className="d-flex justify-content-center align-items-center rounded-circle bg-warning blogdetailscolum text-black fs-4 fw-bold">
                    02
                  </div>
                  <h4 className="text-black fw-bold mt-2">Development</h4>
                  <p className="text-dark">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                    in provident eveniet doloremque vitae. Sunt, tenetur in.
                    Atque,
                  </p>
                </div>

                <div className="col-md-4 border-start border-warning border-2">
                  <div className="d-flex justify-content-center align-items-center rounded-circle bg-warning blogdetailscolum text-black fs-4 fw-bold">
                    03
                  </div>
                  <h4 className="text-black fw-bold mt-2">Testing </h4>
                  <p className="text-dark">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                    in provident eveniet doloremque vitae. Sunt, tenetur in.
                    Atque,
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 col-lg-12 border border-info">
                  <h4 className="text-black mt-3">
                    Tips for an Efficient Shopping Experience
                  </h4>
                  <ul className="blogdetail-ul">
                    <li className="blogdetailList">
                      <i
                        className="fa-solid  text-warning  bg-primary w-20 h-30 
                      rounded-circle fa-circle blogdetailList-icon"
                      ></i>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Voluptas, nisi ea. Corporis, doloremque esse dolorem
                      voluptates id maiores asperiores impedit.
                    </li>

                    <li className="blogdetailList">
                      <i
                        className="fa-solid  text-warning  bg-primary w-20 h-30 
                      rounded-circle fa-circle blogdetailList-icon"
                      ></i>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Voluptas, nisi ea. Corporis, doloremque esse dolorem
                      voluptates id maiores asperiores impedit.
                    </li>

                    <li className="blogdetailList">
                      <i
                        className="fa-solid  text-warning  bg-primary w-20 h-30 
                      rounded-circle fa-circle blogdetailList-icon"
                      ></i>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Voluptas, nisi ea. Corporis, doloremque esse dolorem
                      voluptates id maiores asperiores impedit.
                    </li>

                    <li className="blogdetailList">
                      <i
                        className="fa-solid  text-warning  bg-primary w-20 h-30 
                      rounded-circle fa-circle blogdetailList-icon"
                      ></i>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Voluptas, nisi ea. Corporis, doloremque esse dolorem
                      voluptates id maiores asperiores impedit.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row text-start bg-primary rounded my-3">
                <div className="col-md-4 mb-4 mt-3">
                  <div className="d-flex align-items-start">
                    <img
                      src={headerprofile}
                      alt="imgae"
                      className="img-fluid rounded-circle blogdetialImage"
                    />
                  </div>
                </div>

                <div className="col-md-7">
                  <h5 className="text-warning fw-medium mt-3">
                    Lucas Alexander
                  </h5>
                  <p className="text-white">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. A
                    praesentium totam excepturi corrupti dolore, facere maiores
                    adipisci cum placeat neque nostrum iste commodi deserunt
                    iure at autem voluptatum assumenda quae?
                  </p>
                </div>
              </div>

              {/* Related content posts */}
              <div className="row">
                <h4
                  className="text-black text-center 
                mt-2"
                >
                  Related Top Blog Content
                </h4>
                <div className="col-md-4">
                  <div className="card">
                    <BlogContent
                      img={aboutimg3}
                      Posttitle="Let more Healthy fruits and vegetable"
                      author="Lucas Alexander"
                      Postdate="11 june 2025"
                    />
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="card">
                    <BlogContent
                      img={aboutimg3}
                      Posttitle="Let more Healthy fruits and vegetable"
                      author="Lucas Alexander"
                      Postdate="11 june 2025"
                    />
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="card">
                    <BlogContent
                      img={aboutimg3}
                      Posttitle="Let more Healthy fruits and vegetable"
                      author="Lucas Alexander"
                      Postdate="11 june 2025"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <h4 className="text-black ms-2">Filter by Categories</h4>
              <button
                type="button"
                className="btn border-dark rounded pill mx-2"
              >
                Shopping Tips
              </button>

              <button type="button" className="btn border-dark rounded pill">
                Grocery
              </button>

              <button
                type="button"
                className="btn border-dark rounded pill my-2 mx-2"
              >
                Orangic Food{" "}
              </button>

              <button
                type="button"
                className="btn border-dark rounded pill my-2 mx-2"
              >
                Snacks{" "}
              </button>

              <button
                type="button"
                className="btn border-dark rounded pill my-2 mx-2"
              >
                Fruits & Vegetables{" "}
              </button>
              <button
                type="button"
                className="btn border-dark rounded pill my-2 mx-2"
              >
                Bakery{" "}
              </button>
              <button
                type="button"
                className="btn border-dark rounded pill my-2 mx-2"
              >
                Pet Foods{" "}
              </button>

              <h4 className="text-black my-3">Table of content</h4>
              <p className="text-dark">
                Importance of an Organized Grocery Shopping List
              </p>
              <p className="text-dark">
                Importance of an Organized Grocery Shopping List
              </p>
              <p className="text-dark">
                Importance of an Organized Grocery Shopping List
              </p>
              <p className="text-dark">
                Importance of an Organized Grocery Shopping List
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default BlogDetails;
