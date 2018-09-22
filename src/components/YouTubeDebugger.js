import React from 'react'

  class YouTubeDebugger extends React.Component {
    constructor() {
      super()

      this.state = {
        errors: [],
        user: null,
        settings: {
          bitrate: 8,
          video: {
            resolution: '1080p'
          }
        }
      }
    }

    handleClickBitrate = (e) => {
      this.setState({
        settings: Object.assign({}, this.state.settings, {
          bitrate: 12
        }),
      }, console.log(this.state))
    }

    handleClickRes = (e) => {
      this.setState({
        settings: {
          ...this.state.settings,
          video: {
            ...this.state.settings.video,
            resolution: '720p'
          }
        }
      }, console.log(this.state))
    }



    render() {
      return (
        <div>
          <button className='bitrate'  onClick={this.handleClickBitrate}>bitrate: {this.state.settings.bitrate}</button>
          <button className='resolution' onClick={this.handleClickRes}>video res: {this.state.settings.video.resolution}</button>
        </div>
      )
    }
  }

export default YouTubeDebugger;
