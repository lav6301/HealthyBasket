import React, { useState } from "react";
import Navbar from "./navbar";
import PageHeader from "./pageHeader";
import Footer from "./footer";

// Component: Personal Information
function PersonalInfo() {
  return (
    <div>
      <h4 className="text-dark mb-4">Personal Information</h4>
      <div className="mb-3">
        <div className="row">
          <div className="col-md-6">
            <label htmlFor="First_Name" className="m-2 text-black fw-semibold">First Name *</label>
            <input type="text" className="form-control rounded-pill" id="First_name" placeholder="Leslie" required />
          </div>
          <div className="col-md-6">
            <label htmlFor="Last_Name" className="m-2 text-black fw-semibold">Last Name *</label>
            <input type="text" className="form-control rounded-pill" id="Last_name" placeholder="Smith" required />
          </div>
        </div>
      </div>

      <div className="mb-3">
        <label htmlFor="User_email" className="m-2 text-black fw-semibold">Email *</label>
        <input type="email" className="form-control rounded-pill" id="User_email" placeholder="example@gmail.com" required />
      </div>

      <div className="mb-3">
        <label htmlFor="Phone_num" className="m-2 text-black fw-semibold">Phone *</label>
        <input type="text" className="form-control rounded-pill" id="Phone_num" placeholder="+0123456789" required />
      </div>

      <div className="mb-3">
        <label htmlFor="gender" className="m-2 text-black fw-semibold">Gender *</label>
        <select className="form-select rounded-pill border-dark" id="Gender_dropdown">
          <option value="">Select Your Gender</option>
          <option value="Female">Female</option>
          <option value="Male">Male</option>
        </select>
      </div>
    </div>
  );
}

// Component: My Orders
function MyOrders() {
  return (
    <div>
      <h4 className="text-dark mb-4">My Orders</h4>
      <div className="border p-3 rounded mb-3">
        <p><strong>Order ID:</strong> #SGDT1254FD</p>
        <p><strong>Total Payment:</strong> $74.00</p>
        <p><strong>Payment Method:</strong> Paypal</p>
        <p><strong>Status:</strong> Accepted</p>
        <button className="btn btn-success rounded-pill me-2">Track Order</button>
        <button className="btn btn-outline-danger rounded-pill">Cancel Order</button>
      </div>

      <div className="border p-3 rounded">
        <p><strong>Order ID:</strong> #SGDT7412DF</p>
        <p><strong>Total Payment:</strong> $40.00</p>
        <p><strong>Payment Method:</strong> Cash</p>
        <p><strong>Status:</strong> Delivered</p>
        <button className="btn btn-primary rounded-pill me-2">Add Review</button>
        <button className="btn btn-outline-secondary rounded-pill">Invoice</button>
      </div>
    </div>
  );
}

// Main Component: Account Page
function AccountPage() {
  const [activeTab, setActiveTab] = useState("personal");

  const renderTabContent = () => {
    switch (activeTab) {
      case "personal":
        return <PersonalInfo />;
      case "orders":
        return <MyOrders />;
      default:
        return <PersonalInfo />;
    }
  };

  return (
    <>
      <Navbar />
      <PageHeader h2="MyAccount" prepage="Home" currentpage="MyAccount" />
      <div className="container-fluid my-5">
        <div className="container my-5">
          <div className="row">
            {/* Sidebar Tabs */}
            <div className="col-md-4 col-lg-4 mb-4">
              <ul className="nav flex-column account-list">
                <li
                  className={`nav-link border bg-light border-2 rounded my-2 w-100 
                    ${activeTab === "personal" ? "active fw-bold" : ""}`}
                  onClick={() => setActiveTab("personal")}
                >
                  <span className="text-dark">Personal Information</span>
                </li>
                <li
                  className={`nav-link border bg-light border-2 rounded my-2 w-100 ${activeTab === "orders" ? "active fw-bold" : ""}`}
                  onClick={() => setActiveTab("orders")}
                >
                  <span className="text-dark">My Orders</span>
                </li>
                <li className="nav-link border bg-light border-2 rounded my-2 w-100">
                  <span className="text-dark">Payment Method</span>
                </li>
                <li className="nav-link border bg-light border-2 rounded my-2 w-100">
                  <span className="text-dark">Password Manager</span>
                </li>
                <li className="nav-link border bg-light border-2 rounded my-2 w-100">
                  <span className="text-dark">Logout</span>
                </li>
              </ul>
            </div>

            {/* Content Area */}
            <div className="col-md-8 border border-dark rounded p-4 bg-white">
              {renderTabContent()}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AccountPage;
