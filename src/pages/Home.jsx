import React, { useState, useEffect } from "react";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../assets/images/hero-img.png";
import counterImg from "../assets/images/counter-timer-img.png";
import "../styles/home.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Services from "../services/Services";
import ProductList from "../components/UI/ProductList";
import products from "../assets/data/products";
import Clock from "../components/UI/Clock";
const Home = () => {
  const [trendingProducts, setTrendingProducts] = useState([]);
  const [bestSaleProducts, setBestSaleProducts] = useState([]);
  const [mobileProducts, setMobileProducts] = useState([]);
  const [wirelessProducts, setWirelessProducts] = useState([]);
  const [popularProducts, setpopularProducts] = useState([]);
  const year = new Date().getFullYear();
  useEffect(() => {
    const filterTrendingProducts = products.filter(
      (item) => item.category === "Chair"
    );
    const filterBestSaleroducts = products.filter(
      (item) => item.category === "Sofa"
    );
    const filterMobileProducts = products.filter(
      (item) => item.category === "Cabinet"
    );
    const filterWirelessProducts = products.filter(
      (item) => item.category === "Comforter"
    );

    setTrendingProducts(filterTrendingProducts);
    setBestSaleProducts(filterBestSaleroducts);
    setMobileProducts(filterMobileProducts);
    setWirelessProducts(filterWirelessProducts);
  }, []);

  return (
    <div>
      <Helmet title={"Home"}></Helmet>
      <section className="hero__section">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content">
                <p className="hero__subtitle">Trending Products in {year}</p>
                <h1>Make Your Interior More Minimalistic & Modern</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                  amet sapiente inventore earum expedita saepe itaque voluptate
                  aut voluptatibus assumenda.
                </p>
                <motion.button className="buy__btn" whileTap={{ scale: 1.02 }}>
                  <Link to="/shop">SHOP NOW</Link>
                </motion.button>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="hero__img">
                <img src={heroImg} alt="hero_img" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Services />
      <section className="trending__products">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__title">Exotic Chair Collection</h2>
            </Col>
            <ProductList data={trendingProducts} />
          </Row>
        </Container>
      </section>
      <section className="best__sales">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__title">Exclusive Sofa Collection</h2>
            </Col>
            <ProductList data={bestSaleProducts} />
          </Row>
        </Container>
      </section>
      <section className="timer__count">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="clock__top-content">
                <h5 className="fs-6">Limited Offer</h5>
                <h3 className="fs-4 mb-3">Quality Armchair</h3>
              </div>
              <Clock />
              <motion.button
                className="buy__btn clock-theme store__btn"
                whileTap={{ scale: 1.02 }}
              >
                <Link to="/shop">Visit Store</Link>
              </motion.button>
            </Col>
            <Col lg="6" md="6" className="text-end">
              <img src={counterImg} alt="" className="counter__img"/>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="new__arrivals">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__title">New Cabinet Collection</h2>
            </Col>
            <ProductList data={mobileProducts} />
          </Row>
        </Container>
      </section>
      <section className="new__arrivals">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__title">Furry Comforter Collection</h2>
            </Col>
            <ProductList data={wirelessProducts} />
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Home;
