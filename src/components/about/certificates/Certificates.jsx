import React from "react";
import certificateApi from "../../../data/certificateApi";
import "./certificates.scss";

function Certificates(props) {
  return (
    <div className="certificates mt-4">
      <div className="head mb-2">
        <span>
          <i className="ri-award-fill"></i>
        </span>
        <h2 className="m-0">Certificates</h2>
      </div>

      <div className="content">
        {certificateApi.map((certi, index) => (
          <div className="item" key={index}>
            <span className="d-flex">
              <i className="ri-check-line"></i>
              <h6>{certi.title}</h6>
            </span>

            <ul>
              {certi.gpa ? (
                <li>
                  <span>GPA:</span> {certi.gpa}
                </li>
              ) : (
                <></>
              )}
              <li>
                <span>Semester:</span> {certi.semester}
              </li>
              {certi.certificate ? (
                <li>
                  <div className="view">
                    <span>Detail:</span>{" "}
                    <a href={certi.certificate} className="btn">
                      View more
                    </a>
                  </div>
                </li>
              ) : (
                <></>
              )}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Certificates;
