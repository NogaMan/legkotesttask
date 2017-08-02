import React from 'react';
import ReactDOM from 'react-dom';


import RootComponent from './components/RootComponent.jsx';

require('../design/app.scss');

const app = document.getElementById("app");

ReactDOM.render(<RootComponent />, app);