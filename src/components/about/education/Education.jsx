import React from "react";
import PropTypes from "prop-types";
import "./education.scss";

Education.propTypes = {};

function Education(props) {
  return (
    <div className="education">
      <div className="head mb-2">
        <span>
          <i className="ri-award-fill"></i>
        </span>
        <h2 className="m-0">Education</h2>
      </div>

      <div className="content">
        <div className="school item">
          <span className="d-flex">
            <i className="ri-medal-line"></i>
            <h6> School: FPT University</h6>
          </span>
          
          <span>(HCM Campus)</span>
        </div>
        <div className="major item">
          <span className="d-flex">
            <i className="ri-code-line"></i>
            <h6> Major: Software Engineering</h6>
          </span>
          
          <span>September 2019 - Now</span>
        </div>
        <ul>
          <li><span>GPA:</span> 7.5/10</li>
          <li><span>Semester:</span> 5/9</li>
        </ul>
      </div>
    </div>
  );
}

export default Education;
