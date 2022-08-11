import React, { useState } from "react";
import { Row, Col } from "reactstrap";
import "./contact.scss";
import ContactForm from "./contactForm/ContactForm";

function Contact(props) {
  const [fullNameError, setFullNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [subjectError, setSubjectError] = useState("");
  const [messageError, setMessageError] = useState("");

  const [inputValue, setInputValue] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleOnChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const inputNew = {
      ...inputValue,
      [name]: value,
    };
    setInputValue(inputNew);
  };

  const handleValidate = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const phoneTest = emailPattern.test(value);

    if (name === "fullName" && value.length === 0) {
      setFullNameError("Please field your name.");
    } else {
      setFullNameError("");
    }
    if (name === "subject" && value.length === 0) {
      setSubjectError("Please field your subject.");
    } else {
      setSubjectError("");
    }
    if (name === "message" && value.length === 0) {
      setMessageError("Please field your message.");
    } else {
      setMessageError("");
    }

    if (name === "email") {
      if (value.length === 0) {
        setEmailError("Please field your phone.");
      } else if (!phoneTest) {
        setEmailError(
          "Enter a valid email address"
        );
      } else {
        setEmailError("");
      }
    }
  };

  return (
    <div className="contact" id="contact">
      <div className="containers">
        <div className="heading text-center mb-3">
          <h1>Contact</h1>
        </div>

        <Row className="content">
          <Col md="3" className="m-auto">
            <div className="infor">
              <span>
                <i className="ri-phone-line"></i>
                <h5 className="mb-0">Phone</h5>
              </span>

              <p className="m-0">091 360 736</p>
            </div>
            <div className="infor">
              <span>
                <i className="ri-mail-line"></i>
                <h5 className="mb-0">Email</h5>
              </span>

              <p className="m-0">tranphuson28@gmail.com</p>
            </div>
            <div className="infor mb-0">
              <span>
                <i className="ri-map-pin-line"></i>
                <h5 className="mb-0">Location</h5>
              </span>

              <p className="m-0">District 9, Ho Chi Minh City, Vietnam</p>
            </div>
          </Col>
          <Col className="form" md="9">
            <ContactForm
              fullNameError={fullNameError}
              emailError={emailError}
              subjectError={subjectError}
              messageError={messageError}
              inputValue={inputValue}
              handleOnChange={handleOnChange}
              handleValidate={handleValidate}
            />
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Contact;
