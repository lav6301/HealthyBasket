import React from "react";

function Testimonial() {
  return (
    <div className="container py-5 text-center bg-white">
      {/* Heading */}
      <h6 className="text-muted">Testimonials</h6>
      <h3 className="fw-bold">
        Testimonials from{" "}
        <span className="text-success">Our Loyal Customers</span>
      </h3>

      {/* Profile Images */}
      <div className="d-flex justify-content-center align-items-center gap-3 mt-4">
        <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="user1" className="rounded-circle" width="50" height="50" />
        <img src="https://randomuser.me/api/portraits/women/45.jpg" alt="user2" className="rounded-circle" width="50" height="50" />
        <img src="https://randomuser.me/api/portraits/women/25.jpg" alt="user3" className="rounded-circle border border-warning border-3" width="60" height="60" />
        <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="user4" className="rounded-circle" width="50" height="50" />
        <img src="https://randomuser.me/api/portraits/men/41.jpg" alt="user5" className="rounded-circle" width="50" height="50" />
      </div>

      {/* Testimonial Content */}
      <div className="position-relative mt-4 mx-auto" style={{ maxWidth: "600px" }}>
        {/* Left Arrow */}
        <button className=" me-5 btn btn-dark rounded-circle position-absolute top-50 start-0 translate-middle-y" 
        style={{ transform: "translate(-120%, -50%)" }}>
          <i className="fa-solid fa-arrow-left"></i>
        </button>

        {/* Review */}
        <p className="text-muted fs-5 px-5">
          "I've tried several grocery delivery services, and this one is by far
          the best. The website is user-friendly, the selection is vast, and the
          customer service is outstanding. Highly recommend!"
        </p>

        {/* Right Arrow */}
        <button className="ms-5 btn btn-success rounded-circle position-absolute top-50 end-0 translate-middle-y" 
        style={{ transform: "translate(-120%, -50%)" }}>
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>

      {/* Rating */}
      <div className="d-flex justify-content-center align-items-center gap-1 mt-3">
        <i className="fa-solid fa-star text-warning"></i>
        <i className="fa-solid fa-star text-warning"></i>
        <i className="fa-solid fa-star text-warning"></i>
        <i className="fa-solid fa-star text-warning"></i>
        <i className="fa-solid fa-star text-warning"></i>
        <span className="ms-2 fw-semibold">5.0</span>
      </div>

      {/* Customer Info */}
      <div className="mt-2">
        <h5 className="fw-bold">Bessie Cooper</h5>
        <p className="text-muted">Housewife</p>
      </div>
    </div>
  );
}

export default Testimonial;