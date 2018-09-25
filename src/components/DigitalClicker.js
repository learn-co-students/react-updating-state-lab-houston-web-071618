// Code DigitalClicker Component Here
import React, {Component} from 'react';

export default class DigitalClicker extends Component{

  constructor(props){
    super(props)
    this.state = {
      timesClicked: 0
    }
  }//end constructor

  handleClick = () =>{
    const newCount = this.state.timesClicked + 1;
    this.setState({timesClicked: newCount})
  }

  render(){

    return(
      <div>
        <button onClick={this.handleClick}>{this.state.timesClicked}</button>
      </div>
    );

  }//end render

}//end class DigitalClicker
