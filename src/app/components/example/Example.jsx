import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from './actions';
import config from 'config';

class Example extends Component {
	constructor() {
		super();

		this.exampleMethod = this.exampleMethod.bind(this);
	}

	render () {
		return (
			<div>
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
	return {exampleStore: state.example.toJS()}
}

export default connect(mapStateToProps, actions)(Example);