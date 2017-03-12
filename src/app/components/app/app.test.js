import React from 'react'
import { shallow, mount } from 'enzyme'
import sinon from 'sinon';
import { expect } from 'chai'
import App from './App'

const wrapper = shallow(<App />);
//
// xdescribe('(Component) App', () => {
// 	it('renders...', () => {
// 		console.log(wrapper);
// 		expect(wrapper).to.have.length(1);
// 	});
//
// 	it('calls componentDidMount', () => {
// 		const wrapper = mount(<App />);
//
// 		expect(App.prototype.componentDidMount.calledOnce).to.equal(true);
// 	});
// });

describe('<App />', () => {

	it('calls componentDidMount', () => {
		const wrapper = mount(<App />);

		sinon.spy(App.prototype, 'componentDidMount');

		expect(App.prototype.componentDidMount.calledOnce).to.equal(true);
	});

});