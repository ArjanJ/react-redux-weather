import React from 'react';
import { connect } from 'react-redux';
import { fetchWeather, fetchForecast } from '../actions';

class Search extends React.Component {
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
		this.props.dispatch(fetchForecast(`q=${input.value}`));
		input.value = '';
	}

	render() {
		return (
			<form className="Search" onSubmit={this.handleSubmit}>
				<input className="Search__input" placeholder="Search city" ref="city" />
			</form>
		);
	}
}

Search = connect()(Search);

export default Search;