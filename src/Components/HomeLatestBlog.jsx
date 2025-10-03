// HomeLatestBlog.jsx
import React from "react";
import aboutimg4 from "../assets/image/aboutimg4.jpg";
import aboutimg2 from "../assets/image/aboutimg2.jpg";
import aboutimg3 from "../assets/image/aboutimg3.jpg"; // Add another image

const blogs = [
  {
    id: 1,
    title: "How to Create a Grocery Shopping List: Stay Organized",
    category: "Shopping Tips",
    author: "Jenny Alexander",
    date: "14 August 2024",
    image: aboutimg2,
    link: "#",
  },
  {
    id: 2,
    title: "Summer Produce Guide: Fresh Fruits and Vegetables to Enjoy",
    category: "Seasonal Guides",
    author: "Jenny Alexander",
    date: "13 August 2024",
    image: aboutimg3,
    link: "#",
  },
  {
    id: 3,
    title: "Top 10 Superfoods for a Balanced Diet: Boost Your Health",
    category: "Healthy Eating",
    author: "Jenny Alexander",
    date: "12 August 2024",
    image: aboutimg4,
    link: "#",
  },
];

function HomeLatestBlog() {
  return (
    <div className="container bg-light py-5">
      <div className="d-flex justify-content-between align-items-center mb-4 mx-3">
        <div>
          <h6 className="text-muted">News & Blogs</h6>
          <h4 className="fw-bold">
            Our Latest <span className="text-success">News & Blogs</span>
          </h4>
        </div>
        <button className="btn btn-success rounded-pill px-4">View All →</button>
      </div>

      <div className="row">
        {blogs.map((blog) => (
          <div className="col-md-4 mb-4" key={blog.id}>
            <div className="card h-100 shadow-sm border-0 rounded-3">
              <div className="position-relative">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="card-img-top rounded-top"
                  style={{ height: "220px", objectFit: "cover" }}
                />
                <span
                  className="badge bg-warning text-dark position-absolute"
                  style={{ bottom: "10px", left: "10px" }}
                >
                  {blog.category}
                </span>
              </div>
              <div className="card-body">
                <p className="text-muted small mb-1">
                  {blog.author} • {blog.date}
                </p>
                <h6 className="card-title fw-semibold">{blog.title}</h6>
                <a href={blog.link} className="text-success fw-bold">
                  Read More
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeLatestBlog;