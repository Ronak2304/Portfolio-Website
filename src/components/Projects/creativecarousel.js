import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Carousel from "react-bootstrap/Carousel";

function GenericCarousel({ images }) {
  const [show, setShow] = useState(false);

  return (
    <>
      <div
        onClick={() => setShow(true)}
        style={{ cursor: "pointer" }}
      >
        <Carousel fade interval={2500}>
          {images.map((item, index) => (
            <Carousel.Item key={index}>
              <img
                className="d-block w-100"
                src={item.image}
                alt=""
                style={{
                  height: "350px",
                  objectFit: "contain",
                  background: "white",
                }}
              />
            </Carousel.Item>
          ))}
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

            {images.map((item, index) => (
              <Carousel.Item key={index}>
                {item.link ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="d-block w-100"
                      src={item.image}
                      alt=""
                    />
                  </a>
                ) : (
                  <img
                    className="d-block w-100"
                    src={item.image}
                    alt=""
                  />
                )}
              </Carousel.Item>
            ))}

          </Carousel>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default GenericCarousel;