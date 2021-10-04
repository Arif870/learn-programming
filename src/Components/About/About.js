import React from "react";
import { Accordion } from "react-bootstrap";
import img from "../../Utilities/Images/about.png";
import "./About.css";
export default function About() {
  return (
    <div className="about container">
      <img className="mx-auto d-block w-50" src={img} alt="about-us" />
      <h1>A programming training institute</h1>
      <p>
        If you want to begin programming, start here. In this fast-paced and
        entertaining course, What Is Programming, you'll learn the fundamentals,
        the essential ideas, and the concepts for success in any programming
        language. First, you'll learn how to write a computer program and learn
        how to get the computer to understand it. Next, you'll learn all about
        the syntax - or rules of programming languages. Finally, you'll explore
        how to make real-world programming easier, from libraries to frames, to
        SDKs and APIs. By the end of this course, you will not only be on your
        way to becoming a software developer, but will also have learned how to
        work with them, manage them, or live with one.
      </p>

      <h1 className="faq fw-light bg-dark text-light p-3 rounded my-5 w-50 mx-auto fs-3">
        Frequently asked question about us !
      </h1>
      <Accordion
        defaultActiveKey="0"
        className="w-50 mx-auto mt-5"
        style={{ paddingBottom: "100px" }}
      >
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            Which programming languages will learn from here ?
          </Accordion.Header>
          <Accordion.Body>
            we focus on student career and we want to give them basic to
            advanced with javaScript language and liberary.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            Is there any freelancing session ?
          </Accordion.Header>
          <Accordion.Body>
            yes! there is. But mainly focus on the job placement and gather
            experience.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}
