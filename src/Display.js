import React from "react";

const Display = (props) => {
  return (
    <div id="display" className="calculator_screen">
      {props.data}
    </div>
  );
}

export default Display;