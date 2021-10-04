import React, { useState, useEffect } from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import img from "../../Utilities/Images/home.png";
import "./Home.css";

export default function Home() {
  const [state, setstate] = useState([]);

  useEffect(() => {
    fetch("./data.JSON")
      .then(response => response.json())
      .then(data => setstate(data));
  }, []);

  return (
    <div className="container home">
      <Row className="align-items-center mt-4 fw-light g-4">
        <Col className="home-left">
          <h1>Be a Good Programmer</h1>
          <p>We are here to build your Career.</p>
        </Col>

        <Col>
          <img className="w-100" src={img} alt="programmer" />
        </Col>
      </Row>
      <div className="w-25 mx-auto mt-5">
        <h1 className="text-center fw-light ">Our Core Services </h1>
        <hr />
      </div>
      <div className="services mt-5 mx-auto d-block">
        <Row xs={1} md={2} className="g-4 justify-content-center ">
          {state.map(course => (
            <Col key={course.index}>
              <Card>
                <Card.Body>
                  <Card.Title>{course.name}</Card.Title>
                  <hr />
                  <Card.Text>
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
          <span className="button">
            <Link to="/service">All Services</Link>
          </span>
        </Row>
      </div>
    </div>
  );
}
