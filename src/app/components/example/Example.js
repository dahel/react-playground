import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from './actions';
import config from 'config';

export class Example extends Component {
	constructor() {
		super();

		this.exampleMethod = this.exampleMethod.bind(this);
	}

	render () {
		console.log('################################################### rendering');
		console.log(this.props);
		return (
			<div className="example">
				<div>Example Component</div>
				<div>{this.props.exampleStore.name}</div>
				<div onClick={this.exampleMethod}>(click for example)</div>
				<div>Example config: {config.EXAMPLE_CONFIG}</div>
			</div>
			)
	}

	exampleMethod () {
		this.props.exampleAction();
	}
}

function mapStateToProps(state) {
	console.log('################################################### ??');
	return {exampleStore: state.example.toJS()}
}

export default connect(mapStateToProps, actions)(Example);