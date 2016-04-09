import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchWeather } from '../actions';


class WeatherCard extends React.Component {
	constructor(props) {
		super(props);
		this.renderWeather = this.renderWeather.bind(this);
	}

	componentWillUpdate(nextProps, nextState) {
		if (this.props.location !== nextProps.location) {
			const { latitude, longitude } = nextProps.location.data;
			// Update weather with new coordinates
			this.updateWeather(`lat=${latitude}&lon=${longitude}`);
		}
	}

	updateWeather(params) {
		// Fetch weather data from API
		this.props.dispatch(fetchWeather(params));
	}

	renderWeather(data) {
		return (
			<div>
				<h2>{ data.name }</h2>
				<div>
					{ Object.keys(data.weather).map(key => <span key={key}>{ data.weather[key].main }</span>)}
				</div>
			</div>
		);
	}

	render() {
		const { weather } = this.props;
		return(
			<div className="WeatherCard">
				<h1>Weather</h1>
				<p>{ weather.isFetching ? 'Loading...' : 'Loaded'}</p>
				{ weather.data ? this.renderWeather(weather.data) : false }
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	const { location, weather } = state;
	return {
		location,
		weather
	};
};

WeatherCard = connect(mapStateToProps)(WeatherCard);

export default WeatherCard;
