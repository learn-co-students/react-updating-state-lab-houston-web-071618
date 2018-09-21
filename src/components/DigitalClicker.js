import React, { Component } from "react";
class DigitalClicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timesClicked: 0
    };
  }

  handleClick = () => {
    const incrementTimesClicked = this.state.timesClicked + 1;
    this.setState({
      timesClicked: incrementTimesClicked
    });
  };

  render() {
    return (
      <button onClick={this.handleClick}>{this.state.timesClicked}</button>
    );
  }
}

export default DigitalClicker;
