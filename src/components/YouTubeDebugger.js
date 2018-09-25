// Code YouTubeDebugger Component Here
import React, {Component} from 'react';

export default class YouTubeDebugger extends Component{
  constructor(props){
    super(props)
    this.state = {
      errors: [],
      user: null,
      settings:
        { bitrate: 8,
          video: { resolution: '1080p' }
        }
      }//this.state
  }//end constructor

  handleBitrate = () => {
    this.setState({
      settings:{
        ...this.state.settings,
        bitrate: 12}
      })//end setState
  }

  handleResolution = () => {
    this.setState({
      settings:{
        ...this.state.settings,
        video:{
          ...this.state.video,
          resolution: '720p'}
        }

    })//end setState
  }

  render(){
    return(
      <div>
        <button className="bitrate" onClick={this.handleBitrate}>Change Bitrate</button>
        <button className="resolution" onClick={this.handleResolution}>Change Resolution</button>
      </div>
    )
  }

}//end class YouTubeDebugger
