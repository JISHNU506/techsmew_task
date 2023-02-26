import React from "react";
import "./Show.css";
import { Link } from "react-router-dom";
function Show() {
  const user = JSON.parse(localStorage.getItem("user"));
  // console.log("user====>",user);

  return (
    <>
      <div className="container emp-profile">
        <div className="row">
          <div className="col-md-4">
            <div className="profile-img">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu_3NWMd1N12Rx6GXBzZDucVYd-Q3vuAF5rg&usqp=CAU"
                alt=""
              />
              <div className="file btn btn-lg btn-primary">
                Change Photo
                <input type="file" name="file" />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="profile-head">
              <h5>{user?.username}</h5>
              <h6>Profile Details</h6>

              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    id="home-tab"
                    data-toggle="tab"
                  >
                    About
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-2">
            <Link to={"/"}>
              <button className="button_select">Home</button>
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-8">
            <div className="tab-content profile-tab" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <div className="row">
                  <div className="col-md-4">
                    <label>Name</label>
                  </div>
                  <div className="col-md-8">
                    <p>{user?.username}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <label>Email</label>
                  </div>
                  <div className="col-md-8">
                    <p>{user?.email}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <label>Phone</label>
                  </div>
                  <div className="col-md-8">
                    <p>{user?.mobilenumber}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <label>Gender</label>
                  </div>
                  <div className="col-md-8">
                    <p>{user?.gender}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <label>Date of Birth</label>
                  </div>
                  <div className="col-md-8">
                    <p>{user?.birthday}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <label>Address</label>
                  </div>
                  <div className="col-md-8">
                    <p>{user?.address}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <label>City</label>
                  </div>
                  <div className="col-md-8">
                    <p>{user?.city}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <label>State</label>
                  </div>
                  <div className="col-md-8">
                    <p>{user?.state}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Show;
