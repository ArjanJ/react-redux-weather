import { REQUEST_LOCATION, RECEIVE_LOCATION } from '../actions';

const initialState = {};

export default function location(state = initialState, action) {
	switch (action.type) {
		case REQUEST_LOCATION:
			return Object.assign({}, state, {
				isFetching: true,
			});
		case RECEIVE_LOCATION:
			return Object.assign({}, state, {
				isFetching: false,
				data: action.payload.location
			});
		default:
			return state;
	}
}