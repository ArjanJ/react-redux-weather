import { REQUEST_WEATHER, RECEIVE_WEATHER } from '../actions/index';

const initialState = [{
	data: {}
}];

export default function weather(state = initialState, action) {
	switch (action.type) {
	case REQUEST_WEATHER:
		return Object.assign({}, state, {
			isFetching: true,
		});
	case RECEIVE_WEATHER:
		return Object.assign({}, state, {
			isFetching: false,
			data: action.payload.json
		});
	default:
		return state;
	}
}
