import React from 'react';
import { connect } from 'react-redux';
import { fetchWeather } from '../actions';

let SearchWeather = ({ dispatch }) => {
	let input;

	return (
		<div>
			<form onSubmit={e => {
				e.preventDefault();
				if (!input.value.trim()) {
					return;
				}
				dispatch(fetchWeather(input.value));
				input.value = '';
			}}>
				<input placeholder="Enter City" ref={node => {
					input = node;
				}} />
			</form>
		</div>
	);
};

SearchWeather = connect()(SearchWeather);

export default SearchWeather;
