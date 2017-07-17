// Dependencies
import React from 'react';
import ReactDOM from 'react-dom';

import injectTapEventPlugin from 'react-tap-event-plugin';

// Components
import App from './components/App.js';


injectTapEventPlugin();


ReactDOM.render(<App />, document.getElementById('app'));
