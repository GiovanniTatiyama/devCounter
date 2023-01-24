import { Component } from "react";
import "./button.css"

class Button extends Component{
  render(){
    return (
      <div className="App">
        <button
            onClick={this.props.changeCounter}
            style={{ backgroundColor: this.props.backgroundColor ? this.props.backgroundColor : "#444"}}>
            {this.props.label}
        </button>
      </div>
    );
  }
}

export default Button;
