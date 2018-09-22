// Code YouTubeDebugger Component Here
import React, { Component } from 'react'
  class YouTubeDebugger extends Component {

      constructor() {
        super()

        this.state = {
          errors: [],
          user: null,
          settings: {
            bitrate: 8,
            video: { resolution: '1080p' }
          }
        }

        console.log(this.state)
      }

      handleClick = () => {
        this.setState({
          settings: {
          ...this.state.settings,
          bitrate: 12
        }}, () => {
          console.log(this.state)
        })
      }

      handleClickRes = () => {
        this.setState({
          settings: {
            ...this.state.settings,
            video: {
              ...this.state.video,
              resolution: '720p'
            }
          }
        },() => {
          console.log(this.state)
        })
      }

      render() {
      return (
        <div className='YouTubeDebugger'>
          <button className='bitrate' onClick={this.handleClick}>Bitrate</button>
          <button className='resolution' onClick={this.handleClickRes}>Resolution</button>
        </div>
      )
    }
  }

export default YouTubeDebugger;
