import React from "react";
import { Form, Button } from "react-bootstrap";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="contact text-center mt-5">
      <h1>Contact Us</h1>
      <p>Have any questions ? we'd love to hear from you.</p>

      <div className="container w-50 mt-5">
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control type="email" placeholder="@gmail.com" />
          </Form.Group>
          <Form.Group
            className="mb-3 text-start"
            controlId="exampleForm.ControlTextarea1"
          >
            <Form.Control
              as="textarea"
              rows={5}
              placeholder="Give us your valuable feedback"
            />
          </Form.Group>
        </Form>
        <Button>Submit</Button>
      </div>
    </div>
  );
}
