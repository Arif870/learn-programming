import React from "react";
import { Image, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import img from "../../Utilities/Images/404.png";
import "./Notfound.css";

export default function Notfound() {
  return (
    <div>
      <Image className="d-block mx-auto" src={img} fluid />
    </div>
  );
}
