import React from "react";
import "../styles/cart.css";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { motion } from "framer-motion";
import { cartActions } from "../redux/slices/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import tdImg from "../assets/images/arm-chair-01.jpg";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItem);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  console.log(cartItems);
  return (
    <Helmet title="Cart">
      <CommonSection title="Shopping Cart" />
      <Container className="mt-5">
        <Row>
          <Col lg="8">
            {cartItems.length === 0 ? (
              <h4>No item(s) added to the cart!</h4>
            ) : (
              <table className="table bordered">
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Qty</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems?.map((item, index) => (
                    <tr key={index}>
                      <td>
                        <img src={item.image} alt="" />
                      </td>
                      <td>{item.productName}</td>
                      <td>{item.price}</td>
                      <td>{item.quantity}</td>
                      <td>
                        <i class="ri-delete-bin-6-line"></i>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </Col>
          <Col lg="4" className="mb-4">
            <div>
              <h6 className="d-flex align-items-center justify-content-between">
                Subtotal
                <span class="fw-bold">INR {totalAmount}</span>
              </h6>
              <p>taxes and shipping will be calculated at checkout</p>
              <div className="d-flex align-items-center justify-content-between">
                <button className="buy__btn black">
                  <Link to="/shop"> Continue Shopping</Link>{" "}
                </button>
                <button className="buy__btn black">
                  <Link to="/checkout"> Checkout</Link>{" "}
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Helmet>
  );
};

export default Cart;
