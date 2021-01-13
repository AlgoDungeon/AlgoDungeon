import React, { Component } from "react";
import "../styles/AlgoQuestionInput.scss";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";
import {UnControlled as CodeMirror} from 'react-codemirror2';

class AlgoQuestionInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
    this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(editor, data, value) {
    onChange(value);
  }
  render() {
    return (
      <div id="dynamicproblem">
        hello world
        <div id="question">This is where the problem will go...</div>
        <div id="solution">
          <CodeMirror
            id="code-mirror-wrapper"
            value={this.state.value}
            options={{
              mode: "javascript",
              theme: "material",
              lineNumbers: true,
              // pollInterval: 2000,
              // readOnly: false,
            }}
            onChange={(editor, data, value) => {
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
