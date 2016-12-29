import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';
import Todobox from './components/todobox';

const store = createStore(reducer);

render(
	<Provider store={store}>
		<Todobox />
	</Provider>,
	document.getElementById('container')
);

