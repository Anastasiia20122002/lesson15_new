import React from "react";
import "./styles.css";
function Description(props) {
  return (
    <div>
      <div id="pizza-name">
        <h3>{props.pizza}</h3>
      </div>
      <div id="mini-des">{props.description}</div>
      <div id="line-block">
        <hr id="line" />
      </div>
    </div>
  );
}

export default Description;
