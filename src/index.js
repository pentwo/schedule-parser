import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './style.css';

// import environmental variables from our variables.env file
import dotenv from 'dotenv';
dotenv.config();

ReactDOM.render(<App />, document.getElementById('root'));
