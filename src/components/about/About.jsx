import React from "react";
import "./about.scss";
import { Col, Row } from "reactstrap";
import Skill from "./skill/Skill";
import Education from "./education/Education";
import Certificates from "./certificates/Certificates";
import Activities from "./acticities/Activities";

function About(props) {
  return (
    <div className="about" id="about">
      <div className="containers">
        <div className="heading text-center mb-3">
          <h1>About me</h1>
        </div>
        <Row>
          <Col md="5">
            <Education />
            <Activities />
          </Col>
          <Col md="7">
            <Skill />
            <Certificates />
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default About;
