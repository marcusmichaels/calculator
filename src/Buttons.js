import React from "react";

class Buttons extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {
    document.addEventListener('mousedown', this.addPressStyle);
    document.addEventListener("mouseout", this.removePressStyle);
    document.addEventListener("mouseup", this.removePressStyle);

    document.addEventListener('touchstart', this.addPressStyle);
    document.addEventListener("touchend", this.removePressStyle);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.addPressStyle);
    document.removeEventListener("mouseup", this.removePressStyle);
    document.removeEventListener("mouseout", this.removePressStyle);

    document.removeEventListener('touchstart', this.addPressStyle);
    document.removeEventListener("touchend", this.removePressStyle);
  }


  addPressStyle = (e) => {
    e.target.classList.add("pressed");
  }

  removePressStyle = (e) => {
    e.target.classList.remove("pressed");
  }

  render() {
    return (
        <React.Fragment>
          <button id="seven" onClick={this.props.digit} className="calculator_button digit" value="7">7</button>
          <button id="eight" onClick={this.props.digit} className="calculator_button digit" value="8">8</button>
          <button id="nine" onClick={this.props.digit} className="calculator_button digit" value="9">9</button>

          <button id="divide" onClick={this.props.operator} className="calculator_button operator" value="/">/</button>

          <button id="four" onClick={this.props.digit} className="calculator_button digit" value="4">4</button>
          <button id="five" onClick={this.props.digit} className="calculator_button digit" value="5">5</button>
          <button id="six" onClick={this.props.digit} className="calculator_button digit" value="6">6</button>
          
          <button id="multiply" onClick={this.props.operator} className="calculator_button operator" value="*">*</button>

          <button id="one" onClick={this.props.digit} className="calculator_button digit" value="1">1</button>
          <button id="two" onClick={this.props.digit} className="calculator_button digit" value="2">2</button>
          <button id="three" onClick={this.props.digit} className="calculator_button digit" value="3">3</button>
          
          <button id="subtract" onClick={this.props.operator} className="calculator_button operator" value="-">-</button>

          <button id="decimal" onClick={this.props.decimal} className="calculator_button decimal" value=".">.</button>
          <button id="zero" onClick={this.props.digit} className="calculator_button digit double" value="0">0</button>

          <button id="add" onClick={this.props.operator} className="calculator_button operator" value="+">+</button>

          <button id="clear" onClick={this.props.clear} className="calculator_button clear">AC</button>

          <button id="equals" onClick={this.props.total} className="calculator_button equals triple" value="=">=</button>
        </React.Fragment>
    );
  }

}

export default Buttons;