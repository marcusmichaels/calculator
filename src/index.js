import React from "react";
import ReactDOM from "react-dom";
import Buttons from "./Buttons";
import Display from "./Display";

import "./index.scss";

class Calculator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      val: "0",
      prev: "0",
      prevOp: "",
      equation:"",
      operator:""
    }
  }

  handleDigit = (e) => {
    let activeDigit = e.target.value;

    if (this.state.operator === "=") {
      this.setState({
        val:"",
        operator:""
      });
    }

    if (this.state.operator.length > 0 && this.state.operator !== "=") {
      this.setState(prevState => {
        return {
          val: "",
          prev: prevState.val,
          prevOp: prevState.operator.slice(0,1) === " " ? "-" : prevState.operator.slice(0,1),
          operator: "",
          equation: `${prevState.equation.length > 0 ? prevState.equation + " " : ""}${prevState.val} ${prevState.operator}`
        }
      });
    }

    if ((activeDigit.toString() === "0" && this.state.val.toString() === "0") || this.state.val.length > 9) {
      this.setState({
        val:"0"
      });
      return;
    } else if (this.state.val === "0") {

      this.setState({
        val: activeDigit
      })
    } else {
      this.setState( prevState => {
        return {
          val: prevState.val + activeDigit
        }
      });
    }
  }

  handleClear = () => {
    this.setState({
      val: "0",
      prev: "0",
      prevOp: "",
      equation:"",
      operator:""
    })
  }

  handleOperator = (e) => {
    let operator = e.target.value;

    if (operator === "-" && this.state.operator.slice(-1) !== "-") {
      this.setState(prevState => {

        if (prevState.operator !== "=") {
          return {
            operator: `${prevState.operator} ${operator}`
          }
        } else {
          return {
            operator
          }
        }

      });
    } else {
      this.setState({ operator });
    }
  }

  handleDecimal = () => {
    // TODO: Diagnose and fix decimal bugs
    // > issue when using an operator directly before using the decimal
    // > probably some other bits too

    if (this.state.operator === "=") {
      this.setState(prevState => ({val:"0"}));
    }
    if (this.state.val.toString().indexOf(".") === -1) {
      this.setState(prevState => ({val: prevState.val + "."}));
    }
  }

  handleTotal = () => {

    if ((this.state.val !== 0 && this.state.val !== "0") && this.state.operator.indexOf("=") === -1 ) {

      this.setState({
        prev: this.state.val,
        prevOp: this.state.operator.indexOf("=") !== -1 ? this.state.operator : this.state.prevOp
      });

      let total = Math.round(100000000 * eval(`${this.state.equation} ${this.state.val}`)) / 100000000;

      // console.log(total);

      this.setState({
        val: total,
        equation: "",
        operator: "=",
      });
    }
  }

  render() {
    return (
      <div className="calculator">

        <Display data={this.state.val}/>
        <Buttons 
          digit={this.handleDigit}
          clear={this.handleClear}
          operator={this.handleOperator}
          decimal={this.handleDecimal}
          total={this.handleTotal}
        />
        
      </div>
    );
  }
}

ReactDOM.render(<Calculator />, document.getElementById('root'));