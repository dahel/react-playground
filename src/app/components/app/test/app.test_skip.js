import React from 'react'
import {
	shallow,
	mount,
	render
} from 'enzyme'
import sinon from 'sinon';
import { expect } from 'chai'

import App from '../App'

describe('(Component) App', () => {
	it('renders root div with proper className', () => {
		const wrapper = render(<App />);

		expect(wrapper.children().length).to.equal(1);
		expect(wrapper.children().first()).to.deep.equal(wrapper.find('div.app'));
	});

	it('should have props for className', function () {
		const wrapper = shallow(<App />);

		expect(wrapper.props().className).to.equal('app')
	});

	it('calls componentDidMount', () => {
		sinon.spy(App.prototype, 'componentDidMount');

		mount(<App />);

		expect(App.prototype.componentDidMount.calledOnce).to.equal(true);

		App.prototype.componentDidMount.restore();
	});
});