import React from 'react'
import { shallow, mount } from 'enzyme'
import sinon from 'sinon';
import { expect } from 'chai'
import App from './App'

describe('(Component) App', () => {
	it('renders...', () => {
		const wrapper = shallow(<App />);

		expect(wrapper).to.have.length(1);
	});

	it('calls componentDidMount', () => {
		sinon.spy(App.prototype, 'componentDidMount');

		mount(<App />);

		expect(App.prototype.componentDidMount.calledOnce).to.equal(true);
	});
});