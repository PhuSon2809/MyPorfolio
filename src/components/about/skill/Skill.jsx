import React from "react";
import skillApi from "../../../data/skillApi";
import "./skill.scss";

function Skill(props) {
  return (
    <div className="skill">
      <div className="head mb-2 mt-4 mt-md-0">
        <span>
          <i className="ri-award-fill"></i>
        </span>
        <h2 className="m-0">Skill</h2>
      </div>

      <div className="content">
        {skillApi.map((skill, index) => (
          <div className="skill-detail" key={index}>
            <span className="d-flex">
              <i className="ri-medal-line"></i>
            </span>
            <h6 className="m-0">{skill.title}</h6>
            <span className="time">{skill.experience}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skill;
