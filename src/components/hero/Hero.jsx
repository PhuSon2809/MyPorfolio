import React from "react";
import { useTypewriter } from "react-simple-typewriter";
import { Col, Row } from "reactstrap";
import "./hero.scss";

function Hero(props) {
  const { text } = useTypewriter({
    words: ["A Front-end Developer.", "An Intern."],
    loop: 0,
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 1000,
  });

  return (
    <div className="hero" id="home">
      <div className="containers">
        <Row>
          <Col sm="12" md="7" className="left">
            <div className="content">
              <p className="uppercase">welcome to my world</p>
              <h1>
                Hi, I'm <span>Tran Phu Son</span>
              </h1>
              <h1 className="callback">
                <i className="ri-pantone-line"></i>
                <span>{text}</span>
              </h1>
              <p className="mt-3">
                I love programming and user interface design. Dark is an
                inquisitive person, seeking to develop his own programming
                skills. My goal is to become a Front-end Developer. And become a
                future user interface expert.
              </p>
            </div>
            <Row className="group-btn mt-5">
              <Col md="5">
                <p className="uppercase mb-4">find with me</p>
                <div>
                  <a
                    href="https://www.facebook.com/phu.son.2809/"
                    className="i-btn"
                  >
                    <i className="ri-facebook-fill"></i>
                  </a>
                  <a href="https://github.com/PhuSon2809" className="i-btn">
                    <i className="ri-github-fill"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/s%C6%A1n-tr%E1%BA%A7n-ph%C3%BA-288557246/"
                    className="i-btn"
                  >
                    <i className="ri-linkedin-fill"></i>
                  </a>
                </div>
              </Col>
              <Col md="6"></Col>
            </Row>
          </Col>
          <Col sm="12" md="5" className="right-img">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/porfolio-d552f.appspot.com/o/Avatar%2Fzyro-image.png?alt=media&token=e9697c95-41b9-4032-9681-72f14d37f6aa"
              alt="profile"
              className="img-fluid"
            />
            <div className="navi"></div>
            <div className="gray"></div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Hero;
