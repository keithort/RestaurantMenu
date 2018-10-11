import React, { Component } from "react";

import { Consumer } from "../../Context";

import Course from "./Course";

export default class Menu extends Component {
  state = {
    step: null
  };

  componentDidMount() {
    this.setState({
      step: this.props.step
    });
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const { step } = nextProps;
    if (step) {
      return {
        step
      };
    }
    return null;
  }

  render() {
    const { step } = this.state;
    return (
      <Consumer>
        {value => {
          const { menu } = value;
          const options = menu.filter(option =>
            option.courseType.includes(step)
          );
          return <Course course={options} step={step} />;
        }}
      </Consumer>
    );
  }
}
