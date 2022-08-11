import React, { useRef } from "react";
import PropTypes from "prop-types";
import { Form, FormFeedback, FormGroup, Input, Label } from "reactstrap";
import "./contactForm.scss";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

ContactForm.propTypes = {
  fullNameError: PropTypes.string,
  phoneError: PropTypes.string,
  subjectError: PropTypes.string,
  messageError: PropTypes.string,
  inputValue: PropTypes.object,
  handleOnChange: PropTypes.func,
  handleValidate: PropTypes.func,
};

function ContactForm({
  fullNameError,
  emailError,
  subjectError,
  messageError,
  inputValue,
  handleOnChange,
  handleValidate,
}) {
  const form = useRef();


  const sendEmail = (e) => {
    const value = e.target.value;
    e.preventDefault();
    if (inputValue.fullName === "" || inputValue.email === "" || inputValue.subject === "" || inputValue.message === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    } else {
      emailjs
        .sendForm(
          "service_xgxvdbv",
          "template_88ftwdo",
          form.current,
          "aioupPQHZhEE0Dyt7"
        )
        .then(
          (result) => {
            console.log(result.text);
            Swal.fire(
              "Send email successfully",
              "Click button to continute!",
              "success"
            );
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <h2 className="text-white">Contact for cooperation</h2>
      <div className="row contactForm">
        <FormGroup className="col-md-6">
          <Label for="fullName">Full Name:</Label>
          <Input
            type="text"
            id="fullName"
            name="fullName"
            placeholder="full name"
            value={inputValue.fullName}
            onChange={handleOnChange}
            valid={fullNameError === ""}
            invalid={fullNameError !== ""}
            onBlur={handleValidate}
          />
          <FormFeedback>{fullNameError}</FormFeedback>
        </FormGroup>
        <FormGroup className="col-md-6">
          <Label for="email">Email:</Label>
          <Input
            type="email"
            id="email"
            name="email"
            placeholder="email"
            value={inputValue.email}
            onChange={handleOnChange}
            valid={emailError === ""}
            invalid={emailError !== ""}
            onBlur={handleValidate}
          />
          <FormFeedback>{emailError}</FormFeedback>
        </FormGroup>
        <FormGroup className="col-12">
          <Label for="subject">Subject:</Label>
          <Input
            type="text"
            id="subject"
            name="subject"
            placeholder="subject"
            value={inputValue.subject}
            onChange={handleOnChange}
            valid={subjectError === ""}
            invalid={subjectError !== ""}
            onBlur={handleValidate}
          />
          <FormFeedback>{subjectError}</FormFeedback>
        </FormGroup>
        <FormGroup className="col-12">
          <Label for="message">Your message:</Label>
          <Input
            type="textarea"
            id="message"
            name="message"
            placeholder="message"
            value={inputValue.message}
            onChange={handleOnChange}
            valid={messageError === ""}
            invalid={messageError !== ""}
            onBlur={handleValidate}
          />
          <FormFeedback>{messageError}</FormFeedback>
        </FormGroup>
      </div>
      <input type="submit" value="Sent mail" className="btn" />
    </form>
  );
}

export default ContactForm;
