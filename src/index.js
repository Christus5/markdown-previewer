import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { createStore } from "redux";
import { Provider } from "react-redux";
import allReducers from "./store/reducers/allReducers";

let store = createStore(allReducers);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>
	, document.getElementById('root'));

