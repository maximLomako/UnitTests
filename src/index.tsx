import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {value01_01} from "./01-hello-tests/01";
import {value02_02} from "./02/02";
import {value03_03} from "./03/03";
import {value04_04} from "./04/04";
import {value05_05} from "./05/05";

let a = value01_01;
let b = value02_02;
let c = value03_03;
let d = value04_04;
let e = value05_05;


ReactDOM.render(
    <App />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
