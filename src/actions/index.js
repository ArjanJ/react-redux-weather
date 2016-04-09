import fetch from 'isomorphic-fetch';

export const REQUEST_WEATHER = 'REQUEST_WEATHER';
export const RECEIVE_WEATHER = 'RECEIVE_WEATHER';
export const REQUEST_LOCATION = 'REQUEST_LOCATION';
export const RECEIVE_LOCATION = 'RECEIVE_LOCATION';

const APP_ID = '9ccb20b5e2fd3d34779cb287dcc4e336';
const BASE_URL = 'http://api.openweathermap.org/data/2.5/weather';

export function requestWeather() {
	return {
		type: REQUEST_WEATHER
	};
}

export function receiveWeather(json) {
	return {
		type: RECEIVE_WEATHER,
		payload: {
			json
		}
	};
}

export function fetchWeather(params) {
	const url = `${BASE_URL}?${params}&appid=${APP_ID}`;

	return function (dispatch) {
		dispatch(requestWeather());

		return fetch(url)
			.then(response => response.json())
			.then(json => dispatch(receiveWeather(json)))
			.catch(error => console.error(error));
	};
}

export function requestLocation() {
	return {
		type: REQUEST_LOCATION
	};
}

export function receiveLocation(location) {
	return {
		type: RECEIVE_LOCATION,
		payload: {
			location
		}
	};
}

export function fetchLocation() {
	return function (dispatch) {
		
		if (navigator.geolocation) {			
			dispatch(requestLocation());
			navigator.geolocation.getCurrentPosition(success, error);
		} else {
			console.log('navigator.geolocation not supported.');
		}

		function success(position) {
			const { latitude, longitude } = position.coords;
			dispatch(receiveLocation({ latitude, longitude }));
		}

		function error(error) {
			// console.error(error);
			console.log('error callback here');
			dispatch(fetchWeather('q=London'));
		}
	}
}