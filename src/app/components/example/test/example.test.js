import React from 'react'
import { connect } from 'react-redux';
import {
	shallow,
	mount,
	render
} from 'enzyme'
import { createMockStore } from 'redux-test-utils';
import { Provider } from 'react-redux';
import sinon from 'sinon';
import { expect } from 'chai'

//http://www.thereformedprogrammer.net/unit-testing-react-components-that-use-redux/

import ConnectedExample, {Example} from '../Example'

describe('Example Component', () => {
	const store = createMockStore({
		example: {
			toJS: function () {
				console.log('################################################### gooo');

				return {
					name: 'asdfasdf'
				}
			}
		}
	});
	const props = {};


	it('should have props for className', function () {
		const wrapper = mount(<Provider store={store}>
				<ConnectedExample />
			</Provider>
			);

		console.log('################################################### div');
		console.log(wrapper.first('div').hasClass('app'));

		expect(wrapper.hasClass('app')).to.equal(true)
	});
});