import React from "react";
import avatar from "../../assets/avataaars.svg";

export default function Home() {
  return (
    <>
      <div className="home pb-4 ">
        <div className="d-flex justify-content-center  py-4">
          <img src={avatar} alt="" width="250px" />
        </div>

        <div className="  text-white">
          <h1 className="text-center text-uppercase ">start Framework</h1>

          <div>
            <div className="star d-flex justify-content-center align-items-center">
              <i class="fa-solid fa-star my-2"></i>
            </div>
            <p className="text-center ">Graphic Artist - Web Designer - Illustrator</p>
          </div>
          
        </div>
      </div>
    </>
  );
}
