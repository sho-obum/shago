import React, { useState } from "react";
import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import "../styles/shop.css";
import products from "../assets/data/products";
import ProductList from "../components/UI/ProductList";
const Shop = () => {
  const [productsData, setProductsData] = useState(products);
  const handlerFilter = (e) => {
    const filterValue = e.target.value;
    if (filterValue === "Sofa") {
      const filteredProducts = products.filter(
        (item) => item.category === "Sofa"
      );
      setProductsData(filteredProducts);
    }
    if (filterValue === "Chair") {
      const filteredProducts = products.filter(
        (item) => item.category === "Chair"
      );
      setProductsData(filteredProducts);
    }
    if (filterValue === "Cabinet") {
      const filteredProducts = products.filter(
        (item) => item.category === "Cabinet"
      );
      setProductsData(filteredProducts);
    }
    if (filterValue === "Comforter") {
      const filteredProducts = products.filter(
        (item) => item.category === "Comforter"
      );
      setProductsData(filteredProducts);
    }
  };
  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    const searchedProducts = products.filter((item) =>
      item.productName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setProductsData(searchedProducts);
  };
  return (
    <Helmet title="Shop">
      <CommonSection title="Products" />
      <section>
        <Container>
          <Row>
            <Col lg="3" md="3">
              <div className="filter__widget">
                <select onChange={handlerFilter}>
                  <option>Filter By Category</option>
                  <option value="Sofa">Sofa</option>
                  <option value="Chair">Chair</option>
                  <option value="Cabinet">Cabinet</option>
                  <option value="Comforter">Comforter</option>
                </select>
              </div>
            </Col>
            <Col lg="3" md="3">
              <div className="filter__widget">
                <select name="" id="">
                  <option>Sort By</option>
                  <option value="ascending">Ascending</option>
                  <option value="descending">Descending</option>
                </select>
              </div>
            </Col>

            <Col lg="6" md="6">
              <div className="search__box">
                <input
                  type="text"
                  placeholder="Search"
                  onChange={handleSearch}
                />
                <span>
                  <i class="ri-search-2-line"></i>
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="pt -0">
        <Container>
          <Row>
            {productsData.length === 0 ? (
              <h1 className="fs-4 d-flex align-items-center justify-content-center">
                No Products are found &nbsp;<i class="ri-emotion-sad-line"></i>
              </h1>
            ) : (
              <ProductList data={productsData} />
            )}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Shop;
