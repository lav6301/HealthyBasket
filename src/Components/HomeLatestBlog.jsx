import React from "react";
import aboutimg4 from "../assets/image/aboutimg4.jpg";
import aboutimg2 from "../assets/image/aboutimg2.jpg";

function HomeLatestBlog(){
    return(<>
    <div className="conatiner bg-light  py-5">
        <h6 className="text-gray mx-5">News & Blogs</h6>
        <h4 className="text-black mx-5">Our Latest {" "}
            <span className="text-success">News & Blogs</span>
            <div className="row">
                <div className="md-4">
                    <div className="card-img">
                    <img src={aboutimg2} alt="no image" style={{ maxWidth: "350px" }} className="rounded img-fluid" />
                    
                    </div>
                </div>
               
            </div>
        </h4>
    </div>

    </>)
}


export default HomeLatestBlog