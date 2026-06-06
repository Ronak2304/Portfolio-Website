import frame15 from "../../Assets/Projects/Frame 15.png";
import frame3 from "../../Assets/Projects/Frame 3 (1).png";
import group1 from "../../Assets/Projects/Group 1.png";
import shrek from "../../Assets/Projects/shrek classes (2).png";
import nike_ad from "../../Assets/Projects/Nike_shoe_ad.jpg";

import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Carousel from "react-bootstrap/Carousel";


function CreativeCarousel() {
    const [show, setShow] = useState(false);
  return (
    <>
  <div
    onClick={() => setShow(true)}
    style={{
      cursor: "pointer",
    }}
  >
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={frame15}
          alt=""
          style={{
            height: "350px",
            objectFit: "contain",
            background: "white",
          }}
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={frame3}
          alt=""
          style={{
            height: "350px",
            objectFit: "contain",
            background: "white",
          }}
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={group1}
          alt=""
          style={{
            height: "350px",
            objectFit: "contain",
            background: "white",
          }}
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={nike_ad}
          alt=""
          style={{
            height: "350px",
            objectFit: "contain",
            background: "white",
          }}
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={shrek}
          alt=""
          style={{
            height: "350px",
            objectFit: "contain",
            background: "white",
          }}
        />
      </Carousel.Item>
    </Carousel>
  </div>

  <Modal
  show={show}
  onHide={() => setShow(false)}
  centered
  dialogClassName="creative-modal"
  >
    <Modal.Body style={{ padding: 0 }}>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={frame15}
            alt=""
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={frame3}
            alt=""
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={group1}
            alt=""
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={nike_ad}
            alt=""
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={shrek}
            alt=""
          />
        </Carousel.Item>
      </Carousel>
    </Modal.Body>
  </Modal>
</>
)
}

export default CreativeCarousel;