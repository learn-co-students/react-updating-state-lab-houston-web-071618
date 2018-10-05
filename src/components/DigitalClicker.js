// Code DigitalClicker Component Here
import React from 'react';
class DigitalClicker extends React.Component {

  state = {
    timesClicked: 0
  }

  handleClick = () => {
    this.setState( state => ({
      timesClicked: state.timesClicked + 1
    }))
  }


  render () {
    return (
      <div>
        <p>Times Clicked: </p>
        <button onClick={this.handleClick}>{this.state.timesClicked}</button>
        <hr/>
        <br/><br/>
      </div>
    )
  }

}

export default DigitalClicker;