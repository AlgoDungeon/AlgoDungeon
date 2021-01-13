import React, { Component } from "react";
import "../styles/AlgoQuestionInput.scss";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";
import { Controlled as ControlledEditor } from "react-codemirror2";

class AlgoQuestionInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
  }
  handleChange(editor, data, value) {
    onChange(value);
  }
  render() {
    return (
      <div id="dynamicproblem">
        <div id="question">This is where the problem will go...</div>
        <div id="solution">
          <ControlledEditor
            id="code-mirror-wrapper"
            value={this.state.value}
            options={{
              mode: "javascript",
              theme: "material",
              lineNumbers: true,
            }}
            onBeforeChange={(editor, data, value) => {
              this.setState({ value });
            }}
          />
          <br></br>
          <button id="submitsolution">Submit Answer</button>
        </div>
      </div>
    );
  }
}

export default AlgoQuestionInput;
