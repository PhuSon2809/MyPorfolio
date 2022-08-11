import React from "react";
import porfolioApi from "../../data/porfolioApi";
import Box from "./box/Box";
import "./porfolio.scss";

function Porfolio(props) {
  return (
    <div className="porfolio" id="porfolio">
      <div className="containers">
        <div className="heading text-center mb-3">
          <h1>Portfolio</h1>
        </div>

        <div className="listBox justify-content-center">
          {porfolioApi.map((item) => (
            <Box portfolio={item} key={item.id}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Porfolio;
