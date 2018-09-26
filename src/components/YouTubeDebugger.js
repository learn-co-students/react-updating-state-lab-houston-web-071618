// Code YouTubeDebugger Component Here

import React, { Component } from 'react';

export default class YouTubeDebugger extends Component {

	state = {
			errors: [], 
			user: null,
			settings: {
				bitrate: 8, 
				video: {
					resolution: "1080p"
				},
			},
		}

	handleBitrate = (event) => {
		this.setState({
			settings: {
				...this.state.settings,
				bitrate: 12
			}
		})
	}


	handleResolution = (event) => {
		this.setState({
			settings: {
				...this.state.settings,
				video: {
					...this.state.settings.video,
					resolution: "720p"
				},
			},
		})
	}

	render() {
		return (
			<div>
				<button className="bitrate" onClick={this.handleBitrate}>Bitrate: {this.state.settings.bitrate}</button>
				<div></div>
				<button className="resolution" onClick={this.handleResolution}>Bitrate: {this.state.settings.video.resolution}</button>
			</div>
		);
	}
}
