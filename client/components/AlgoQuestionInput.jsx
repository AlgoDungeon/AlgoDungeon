import React, { Component } from 'react';
import '../styles/AlgoQuestionInput.scss';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';
import { UnControlled as CodeMirror } from 'react-codemirror2';
import fizzBuzz from '../features/algos/algos.js';

class AlgoQuestionInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
    this.onChange = this.onChange.bind(this);
  }
  componentDidMount() {
    console.log(fizzBuzz);
  }

  onChange(e) {
    this.setState({ [e.target.name]: [e.target.value] });
  }

  handleChange(editor, data, value) {
    onChange(value);
  }

  render() {
    return (
      <div id="dynamicproblem">
        <div id="question">
          <p>{fizzBuzz.prompt}</p>
        </div>
        <div id="solution">
          <CodeMirror
            id="code-mirror-wrapper"
            value={this.state.value}
            options={{
              mode: 'javascript',
              theme: 'material',
              lineNumbers: true,
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
