// Code YouTubeDebugger Component Here
import React from 'react';
class YouTubeDebugger extends React.Component {
  state = {
    errors: [],
    user: null,
    settings: {
      bitrate: 8,
      video: {
        resolution: '1080p'
      }
    }
  }

  updateBitrate = () => {
    this.setState({
      settings: Object.assign({}, this.state.settings, {
        bitrate: 12
      }),
    });
  }

  updateResolution = ()  => {
    this.setState({
      settings: {...this.state.settings, 
        video: {...this.state.settings.video, 
          resolution: '720p'
        }
      }
    })
  }

  render() {
    return (
      <div>
        <button class='bitrate' onClick={this.updateBitrate}>Change BitRate</button><br/><br/>
        {this.state.settings.bitrate}<br/><br/>
        <button class='resolution' onClick={this.updateResolution}>Change Resolution</button><br/><br/>
        {this.state.settings.video.resolution}
      </div>
    );
  }

}
export default YouTubeDebugger;