'use strict';

import jsdom from 'jsdom';

global.document = jsdom.jsdom('<html><body></body></html>');
global.window = document.defaultView;

Object.keys(document.defaultView).forEach((property) => {
	if (typeof global[property] === 'undefined') {
		global[property] = document.defaultView[property];
	}
});

global.navigator = {
	userAgent: 'node.js'
};

function noop() {
	return {};
}

// prevent mocha tests from breaking when trying to require a css file
require.extensions['.css'] = noop;
require.extensions['.svg'] = noop;