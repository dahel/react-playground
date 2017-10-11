import React, { Component } from 'react';
import { TransitionMotion , spring} from 'react-motion';

const willLeave = () => ({
	borderWidth: spring(0)
})

const Thing = (props) => (
	<TransitionMotion
		styles={props.items ? props.items.map(item => ({
			key: item.key,
			styles: item.styles,
			data: item.data
		})) : []}
		willLeave={willLeave}
	>
		{(styles) => (
			<div>
				{ styles.map(({ key, style, data}) => (
					<div key={key} style={{
						borderColor: 'red',
						borderStyle: 'solid',
						...style
					}}>{ data }</div>
				))}
			</div>
		)}
	</TransitionMotion>
);

export default class App extends Component {
	constructor() {
		super();

		this.state = {
			done: false
		}
	}

	render () {
		this.go();

		if (this.state.done) {
		    return <div>done</div>;
		} else {
			return <Thing items={[
				{ key: 'one', styles: { borderWidth: spring(10) }, data: 'one'},
				{ key: 'two', styles: { borderWidth: spring(5) }, data: 'two'},
				{ key: 'three', styles: { borderWidth: spring(15) }, data: 'three'}
			]}></Thing>
		}
	}

	go () {
		setTimeout(() => {
			this.setState({done: true});
		}, 2000)
	}
}