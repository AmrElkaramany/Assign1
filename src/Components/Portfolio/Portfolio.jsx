import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import img1 from "../../assets/img2.png";
import img2 from "../../assets/img3.png";
import img3 from "../../assets/img4.png";

export default function Portfolio() {
  const [show, setShow] = useState(false);
  const [modalImage, setModalImage] = useState("");

  const handleShow = (imgSrc) => {
    setModalImage(imgSrc);
    setShow(true);
    console.log(imgSrc);
  };

  const handleClose = () => setShow(false);

  return (
    <>
      <div className="portfolio mb-5 ">
        <div>
          <h1 className="fw-bolder text-center text-uppercase">
            portfolio component
          </h1>

          <div className="star d-flex justify-content-center align-items-center">
            <i className="fa-solid fa-star my-2"></i>
          </div>
        </div>
        <div className="container">
          <div className="row g-5">
            {[img1, img2, img3, img1, img2, img3].map((imgSrc, index) => (
              <div
                key={index}
                className="col-lg-4 col-md-6 d-flex justify-content-center align-items-center"
              >
                <div
                  className="item position-relative"
                  onClick={() => handleShow(imgSrc)}
                >
                  <img
                    src={imgSrc}
                    alt={`image${index + 1}`}
                    width={"100%"}
                    className="rounded-3"
                  />
                  <div className="overlay d-flex justify-content-center align-items-center">
                    <i className="fa-solid fa-plus fa-5x text-white"></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Modal show={show} onHide={handleClose}>

          <Modal.Header closeButton>
            <Modal.Title>Image Preview</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <img src={modalImage} alt="Preview" className="img-fluid" />
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
          
        </Modal>
      </div>
    </>
  );
}
