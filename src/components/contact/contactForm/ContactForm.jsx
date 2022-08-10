import React from "react";
import PropTypes from "prop-types";
import { Form, FormFeedback, FormGroup, Input, Label } from "reactstrap";
import "./contactForm.scss";

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
  phoneError,
  subjectError,
  messageError,
  inputValue,
  handleOnChange,
  handleValidate,
}) {
  return (
    // <Form onSubmit={handleOnSubmit}>
    <Form>
      <div className="row contactForm">
        <FormGroup className="col-md-6">
          <Label for="fullName">Full Name:</Label>
          <Input
            type="text"
            id="fullName"
            name="fullName"
            placeholder="fullName"
            value={inputValue.fullName}
            onChange={handleOnChange}
            valid={fullNameError === ""}
            invalid={fullNameError !== ""}
            onBlur={handleValidate}
          />
          <FormFeedback>{fullNameError}</FormFeedback>
        </FormGroup>
        <FormGroup className="col-md-6">
          <Label for="phone">Phone:</Label>
          <Input
            type="number"
            id="phone"
            name="phone"
            placeholder="phone"
            value={inputValue.phone}
            onChange={handleOnChange}
            valid={phoneError === ""}
            invalid={phoneError !== ""}
            onBlur={handleValidate}
          />
          <FormFeedback>{phoneError}</FormFeedback>
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
      <input type="submit" value="Update" className="btn" />
    </Form>
  );
}

export default ContactForm;
