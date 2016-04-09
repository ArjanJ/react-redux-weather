import React from 'react';
import { connect } from 'react-redux';
import { fetchWeather, fetchLocation } from '../actions';

class SearchWeather extends React.Component {
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(e) {
		e.preventDefault();
		const input = this.refs.city;
		if (!input.value.trim()) return;
		// Update weather with user input
		this.props.dispatch(fetchWeather(`q=${input.value}`));
		input.value = '';
	}

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<input placeholder="Enter City" ref="city" />
				</form>
			</div>
		);
	}
}

function mapStateToProps(state) {
	const { location } = state;

	return {
		location
	};
} 

SearchWeather = connect(mapStateToProps)(SearchWeather);

export default SearchWeather;
