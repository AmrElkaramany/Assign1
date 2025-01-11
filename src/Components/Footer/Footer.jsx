import React from "react";

export default function Footer() {
  return (
    <>
      <div className=" footer py-5">
        <div className="container  ">
          <div className="row my-5 g-5  ">
            <div className="col-md-4 ">
              <div className="d-flex flex-column justify-content-center align-items-center text-white">
                <h2>LOCATION</h2>
                <p>2215 John Daniel Drive</p>
                <p>Clark, MO 65243</p>
              </div>
            </div>
            <div className="col-md-4 ">
              <div className="d-flex flex-column justify-content-center align-items-center text-white">
                <h2>AROUND THE WEB</h2>
                <ul className="list-unstyled d-flex gap-4">
                  <li>
                    <i className="fa-brands fa-facebook"></i>
                  </li>
                  <li>
                    <i className="fa-brands fa-twitter"></i>
                  </li>
                  <li>
                    <i className="fa-brands fa-linkedin-in"></i>
                  </li>
                  <li>
                    <i className="fa-solid fa-globe"></i>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4 ">
              <div className="text-center  d-flex flex-column justify-content-center align-items-center text-white">
                <h2>ABOUT FREELANCER</h2>
                <p>
                  Freelance is a free to use, licensed Bootstrap theme created
                  by Route
                </p>
              </div>
            </div>
          </div>
        </div>

  
      </div>
      <div className="Copyright py-4 ">
          <div className="container">
            <div className="row">
              <div className="d-flex justify-content-center align-items-center ">
                <p className="text-white">Copyright © Your Website 2021</p>
              </div>
            </div>
          </div>
        </div>
    </>
  );
}
