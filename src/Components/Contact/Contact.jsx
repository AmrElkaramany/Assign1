import React from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
export default function Contact() {
  return (
    <>
      <div className="contact ">
        <div>
          <h1 className="fw-bolder text-center text-uppercase">
            conatct section
          </h1>

          <div className="star d-flex justify-content-center align-items-center">
            <i class="fa-solid fa-star my-2"></i>
          </div>
        </div>

        <FloatingLabel
          controlId="floatingInput"
          label="UserName"
          className="mb-3 "
        >
          <Form.Control type="text" placeholder="enter your name" />
        </FloatingLabel>

        <FloatingLabel
          controlId="floatingInput"
          label="UserAge"
          className="mb-3 "
        >
          <Form.Control type="number" placeholder="enter your number" />
        </FloatingLabel>

        <FloatingLabel
          controlId="floatingInput"
          label="UserEmail "
          className="mb-3"
        >
          <Form.Control type="email" placeholder="name@example.com" />
        </FloatingLabel>

        <FloatingLabel controlId="floatingPassword" label="UserPassword">
          <Form.Control type="password" placeholder="Password" />
        </FloatingLabel>
        <div className="d-flex justify-content-start  w-50 m-auto my-5">
          <button className="btn ">send Message</button>
        </div>
      </div>
    </>
  );
}
