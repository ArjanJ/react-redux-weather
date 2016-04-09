import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchWeather } from '../actions';
import WeatherCity from '../components/WeatherCity';
import WeatherConditions from '../components/WeatherConditions';
import WeatherTemp from '../components/WeatherTemp';
import Loading from '../components/Loading';


class Weather extends React.Component {
	constructor(props) {
		super(props);
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

	render() {
		const { isFetching, weather } = this.props;

		if (!weather.data || isFetching) {
			return (
				<Loading />
			);
		}

		return (
			<div className="Weather">
				<WeatherCity city={weather.data.name} />
				<WeatherTemp temperature={weather.data.main.temp} />
				<WeatherConditions conditions={weather.data.weather} />
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

Weather = connect(mapStateToProps)(Weather);

export default Weather;
