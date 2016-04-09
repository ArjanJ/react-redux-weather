if (module.hot) {
	module.hot.accept();
}

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store';
import { fetchLocation } from './actions';

import App from './components/App';

const store = configureStore();

store.subscribe(() => {
	console.log(store.getState());
});

store.dispatch(fetchLocation());

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('app')
);

