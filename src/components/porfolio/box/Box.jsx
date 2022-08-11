import React, { useState } from "react";
import Dialog from "../dialog/Dialog";
import "./box.scss";

function Box({portfolio}) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div className="box" onClick={toggle}>
      <img
        src={portfolio.image}
        alt="porfolio"
      />
      <div className="navy"></div>
      <div className="content mt-3">
        <h2>{portfolio.title}</h2>
        <p className="mb-0">Description: {portfolio.description}</p>
      </div>
      <Dialog portfolio={portfolio} modal={modal} toggle={toggle} />
    </div>
  );
}

export default Box;
