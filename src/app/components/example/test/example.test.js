import React from 'react'
import {
	shallow,
	mount,
	render
} from 'enzyme'
import sinon from 'sinon';
import { expect } from 'chai'

import Example from '../Example'

describe('Example Component', () => {
	it('should have proper root element', () => {

	});

	it('should have props for className', function () {
		const wrapper = shallow(<Example />);

		expect(wrapper.props().className).to.equal('app')
	});
});