import React from "react";
import "./activities.scss";

function Activities(props) {
  return (
    <div className="activities mt-4">
      <div className="head mb-2">
        <span>
          <i className="ri-award-fill"></i>
        </span>
        <h2 className="m-0">Activities</h2>
      </div>

      <div className="content">
        <span className="d-flex">
          <i className="ri-check-line"></i>
          <h6>FPTU Event Club - FEV</h6>
        </span>
        <ul>
          <li>The club belongs to FPT University.</li>
          <li>
            Fanpage:{" "}
            <a className="fanpage" href="https://www.facebook.com/FPTEventClub">
              FPT Event Club - The Way We Went
            </a>
          </li>
        </ul>
        <span className="d-flex">
          <i className="ri-check-line"></i>
          <h6>Position:</h6>
        </span>

        <ul>
          <li>
            Head of Implementation <span>May 2020 - April 2021</span>
          </li>
          <li>
            Vice President <span>May 2021 - April 2022</span>
          </li>
        </ul>
        <div className="d-flex align-items-center">
          <span className="d-flex">
            <i className="ri-check-line"></i>
            <h6 className="m-0">Activities: </h6>
          </span>

          <p className="m-0 ml-1"> Organize more than 20 events.</p>
        </div>

        <span className="d-flex">
          <i className="ri-check-line"></i>
          <h6 className="mt-1">Have learned: </h6>
        </span>

        <ul className="mb-1 mt-0">
          <li>Project Management.</li>
          <li>Problem Solving.</li>
          <li>Teamwork.</li>
          <li>Improve Microsoft Office.</li>
        </ul>
      </div>
    </div>
  );
}

export default Activities;
