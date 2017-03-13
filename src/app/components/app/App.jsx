import React, { Component } from 'react';

export default class App extends Component {
	constructor () {
		super();
	}

	componentDidMount() {}

	render () {
		return <div className="app">{this.props.children}</div>
	}
}