import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import img from "../../Utilities/Images/service.png";
import "./Service.css";

export default function Service() {
  const [state, setstate] = useState([]);

  useEffect(() => {
    fetch("./service.JSON")
      .then(response => response.json())
      .then(data => setstate(data));
  }, []);

  return (
    <div className="container">
      <img className="w-50 mx-auto d-block" src={img} alt="service-img" />

      <h1 className="fw-light text-center">All Services</h1>

      <div className="services mt-5 mx-auto d-block">
        <Row xs={1} md={2} className="g-4 justify-content-center ">
          {state.map(course => (
            <Col key={course.index}>
              <Card>
                <Card.Body>
                  <Card.Title>{course.name}</Card.Title>
                  <Card.Title className="fw-bold text-primary fs-3">
                    {course.balance}
                  </Card.Title>
                  <hr />
                  <Card.Text>{course.about}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}
