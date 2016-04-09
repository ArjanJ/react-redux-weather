if (module.hot) {
	module.hot.accept();
}

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers';
import { fetchLocation } from './actions';

import App from './components/App';

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

if (module.hot) {
	// Enable Webpack hot module replacement for reducers
	module.hot.accept('./reducers', () => {
		const nextRootReducer = require('./reducers').default;
		store.replaceReducer(nextRootReducer);
	});
}

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

