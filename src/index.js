import React from 'react';
import ReactDOM from 'react-dom';
import './styles/style.css';
import './styles/mystyles.scss';
import App from './App';
import fontawesome from '@fortawesome/fontawesome';


import registerServiceWorker from './registerServiceWorker';
import 'bulma/css/bulma.css'



ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

