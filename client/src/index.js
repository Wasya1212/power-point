import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'foundation-sites/dist/css/foundation.min.css';
import 'foundation-sites/dist/css/foundation-float.min.css';
import './App.css';
import './theme.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
