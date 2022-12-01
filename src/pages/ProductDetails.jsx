import React, { useState } from "react";
import { useParams } from "react-router-dom";
import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import products from "../assets/data/products";
import { Container, Row, Col } from "reactstrap";
import "../styles/product-detail.css";
import { motion } from "framer-motion";

const ProductDetails = () => {
  const [tab, setTab] = useState("desc");
  const { id } = useParams();
  const product = products.find((item) => item.id === id);
  const {
    imgUrl,
    productName,
    price,
    avgRating,
    shortDesc,
    reviews,
    description,
  } = product;
  return (
    <Helmet title={productName}>
      <CommonSection title={productName} />
      <section className="pt-0">
        <Container>
          <Row>
            <Col lg="6">
              <img src={imgUrl} alt="" />
            </Col>
            <Col lg="6">
              <div className="product__detail">
                <h2>{productName}</h2>
              </div>
              <p>{shortDesc}</p>
              <h4 className="mt-3">₹ {price}</h4>
              <div className="product__rating d-flex align-items-center gap-5 mb-4">
                <div>
                  <span>
                    <i class="ri-star-fill"></i>
                  </span>
                  <span>
                    <i class="ri-star-fill"></i>
                  </span>
                  <span>
                    <i class="ri-star-fill"></i>
                  </span>
                  <span>
                    <i class="ri-star-fill"></i>
                  </span>
                  <span>
                    <i class="ri-star-half-fill"></i>
                  </span>
                </div>
                <p>({avgRating} Ratings)</p>
              </div>

              <motion.button
                whileTap={{ scale: 1.02 }}
                className="buy__btn black"
              >
                Add to Cart
              </motion.button>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div className="tab__wrapper d-flex align-items-center gap-5">
                <h6
                  className={`${tab === "desc" ? "active__tab" : ""}`}
                  onClick={() => setTab("desc")}
                >
                  Description
                </h6>
                <h6
                  className={`${tab === "rev" ? "active__tab" : ""}`}
                  onClick={() => setTab("rev")}
                >
                  Reviews ({reviews.length})
                </h6>
              </div>
              {tab === "desc" ? (
                <div className="tab__content mt-5">
                  <p>{description}</p>
                </div>
              ) : (
                <div className="">
                  <div className="product__review mt-5">
                    <div className="review__wrapper">
                      <ul>
                        {reviews?.map((item, index) => (
                          <li className="mt-2" key={index}>
                            <h6>Shubham Kapoor</h6>
                            <span>{item.rating} (Rating)</span>
                            <p>{item.text}</p>
                          </li>
                        ))}
                      </ul>
                      <div className="review__form">

                      </div>
                    </div>
                  </div>
                </div>
              )}
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default ProductDetails;
