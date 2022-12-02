import React, { useState, useRef } from "react";
import { useParams } from "react-router-dom";
import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import products from "../assets/data/products";
import { Container, Row, Col } from "reactstrap";
import "../styles/product-detail.css";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { cartActions } from "../redux/slices/cartSlice";
import { toast } from "react-toastify";

const ProductDetails = () => {
  const [tab, setTab] = useState("desc");
  const [rating, setRating] = useState(null);
  const reviewUser = useRef("");
  const reviewMssg = useRef("");
  const dispatch = useDispatch();

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
    quantity,
  } = product;
  const submitHandler = (e) => {
    e.preventDefault();
    const reviewUserName = reviewUser.current.value;
    const reviewUserMssg = reviewMssg.current.value;
    const reviewObj = {
      userName: reviewUserName,
      text: reviewUserMssg,
      rating,
    };
    console.log(reviewObj);toast.success('Review Submitted')
  };
  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id,
        image: imgUrl,
        productName,
        price,
        quantity
      })
    );
    toast.success("Product Added");
  };
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
                onClick={addToCart}
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
                        <h4 className="fs-03 text-center mb-4">
                          Leave your experience
                        </h4>
                        <form action="" onSubmit={submitHandler}>
                          <div className="form__group">
                            <input
                              type="text"
                              placeholder="Enter Name"
                              ref={reviewUser}
                            />
                          </div>
                          <div className="form__group d-flex">
                            <motion.span
                              whileTap={{ scale: 1.02 }}
                              onClick={() => setRating(1)}
                            >
                              1<i class="ri-star-s-fill"></i>
                            </motion.span>
                            <motion.span
                              whileTap={{ scale: 1.02 }}
                              onClick={() => setRating(2)}
                            >
                              2<i class="ri-star-s-fill"></i>
                            </motion.span>
                            <motion.span
                              whileTap={{ scale: 1.02 }}
                              onClick={() => setRating(3)}
                            >
                              3<i class="ri-star-s-fill"></i>
                            </motion.span>
                            <motion.span
                              whileTap={{ scale: 1.02 }}
                              onClick={() => setRating(4)}
                            >
                              4<i class="ri-star-s-fill"></i>
                            </motion.span>
                            <motion.span
                              whileTap={{ scale: 1.02 }}
                              onClick={() => setRating(5)}
                            >
                              5<i class="ri-star-s-fill"></i>
                            </motion.span>
                          </div>

                          <div className="form__group">
                            <textarea
                              rows={4}
                              placeholder="Write your review"
                              ref={reviewMssg}
                            ></textarea>
                          </div>
                          <motion.button
                            whileTap={{ scale: 1.02 }}
                            className="buy__btn review__btn"
                          >
                            Submit
                          </motion.button>
                        </form>
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
