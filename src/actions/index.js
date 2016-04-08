export const REQUEST_WEATHER = 'REQUEST_WEATHER';
export const RECEIVE_WEATHER = 'RECEIVE_WEATHER';

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

export function fetchWeather(city) {
	const url = `${BASE_URL}?q=${city}&appid=${APP_ID}`;

	return function (dispatch) {
		dispatch(requestWeather());

		return fetch(url)
			.then(response => response.json())
			.then(json => dispatch(receiveWeather(json)))
			.catch(error => console.error(error));
	};
}
