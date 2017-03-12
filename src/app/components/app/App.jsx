import React, { Component } from 'react';

export default class App extends Component {
	constructor () {
		super();
	}

	componentDidMount() {}

	render () {
		return <div>{this.props.children}</div>
	}
}