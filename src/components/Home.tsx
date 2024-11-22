import React from "react";
import { Container, Button, Row, Col } from "react-bootstrap";
import "../App.css"; // Updated styling
import { Link } from "react-router-dom";

const HomePage: React.FC = () => {
  return (
    <Container className="home-page text-center mt-5">
      <Row>
        <Col>
          <h1 className="welcome-text animate-welcome">
            🛍️ Welcome to <span className="brand-name">ShopEase</span>!
          </h1>
          <p className="animate-fade-in">
            Discover exclusive deals, stunning products, and the best shopping
            experience.
          </p>
          <Link to="/store">
            <Button
              className="shop-now-btn animate-bounce gradient-btn"
              size="lg"
            >
              Start Shopping 🚀
            </Button>
          </Link>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <img
            src="https://images.pexels.com/photos/1148399/pexels-photo-1148399.jpeg"
            alt="Special Offer"
            className="home-image animate-slide-in"
          />
        </Col>
        <Col>
          <img
            src="https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg"
            alt="Latest Arrivals"
            className="home-image animate-slide-in delay-1"
          />
        </Col>
        <Col>
          <img
            src="https://images.pexels.com/photos/951318/pexels-photo-951318.jpeg"
            alt="Best Sellers"
            className="home-image animate-slide-in delay-2"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
