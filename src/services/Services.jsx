import React from "react";
import { Container, Row, Col } from "reactstrap";
import { motion } from "framer-motion";
import "../services/services.css";
import { CiDeliveryTruck } from "react-icons/ci";
import { TbTruckReturn } from "react-icons/tb";
import serviceData from "../assets/data/serviceData";
const Services = () => {
  return (
    <section className="services">
      <Container>
        <Row>
          {serviceData.map((item, index) => (
            <Col lg="3" md="4">
              <motion.div className="service__item" whileHover={{scale:"1.02"}} key={index}>
                <span className="service__icon">
                <i className={item.icon}></i>
                </span>
                <div>
                  <h3>
                    {item.title}
                    <p>{item.subtitle}</p>
                  </h3>
                </div>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Services;
