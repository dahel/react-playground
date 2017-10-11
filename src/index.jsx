import React from 'react';
import { render } from 'react-dom';

import App from './app/App';

require("!style!css!sass!./sass/loader.scss");

render(
	<App></App>,
	document.getElementById('app')
);