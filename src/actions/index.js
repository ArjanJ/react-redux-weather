import fetch from 'isomorphic-fetch';

const APP_ID = '9ccb20b5e2fd3d34779cb287dcc4e336';
const BASE_URL = 'http://api.openweathermap.org/data/2.5';

export const REQUEST_WEATHER = 'REQUEST_WEATHER';
export const RECEIVE_WEATHER = 'RECEIVE_WEATHER';
export const REQUEST_WEATHER_FAILED = 'REQUEST_WEATHER_FAILED';

export const REQUEST_FORECAST = 'REQUEST_FORECAST';
export const RECEIVE_FORECAST = 'RECEIVE_FORECAST';
export const REQUEST_FORECAST_FAILED = 'REQUEST_FORECAST_FAILED';

export function requestWeather() {
	return {
		type: REQUEST_WEATHER
	};
}

export function requestWeatherFailed(error) {
	return {
		type: REQUEST_WEATHER_FAILED,
		error
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

export function requestForecast() {
	return {
		type: REQUEST_FORECAST
	};
}


export function requestForecastFailed(error) {
	return {
		type: REQUEST_FORECAST_FAILED,
		error
	};
}

export function receiveForecast(json) {
	return {
		type: RECEIVE_FORECAST,
		payload: {
			json
		}
	};
}

export function fetchWeather(params) {
	const url = `${BASE_URL}/weather?${params}&units=metric&appid=${APP_ID}`;

	return function (dispatch) {
		dispatch(requestWeather());

		return fetch(url)
			.then(response => response.json())
			.then(json => dispatch(receiveWeather(json)))
			.catch(error => dispatch(requestWeatherFailed(error.toString())));
	};
}

export function fetchForecast(params) {
	const url = `${BASE_URL}/forecast?${params}&units=metric&appid=${APP_ID}`;

	return function (dispatch) {
		dispatch(requestForecast());

		return fetch(url)
			.then(response => response.json())
			.then(json => dispatch(receiveForecast(json)))
			.catch(error => dispatch(requestForecastFailed(error.toString())));
	};
}

export const REQUEST_LOCATION = 'REQUEST_LOCATION';
export const RECEIVE_LOCATION = 'RECEIVE_LOCATION';

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
			console.error(error);
		}
	}
}