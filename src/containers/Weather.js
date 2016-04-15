import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchWeather, fetchForecast } from '../actions';
import WeatherCity from '../components/WeatherCity/WeatherCity';
import WeatherConditions from '../components/WeatherConditions/WeatherConditions';
import WeatherTemp from '../components/WeatherTemp/WeatherTemp';
import WeatherForecast from '../components/WeatherForecast/WeatherForecast';
import WeatherBackground from '../components/WeatherBackground/WeatherBackground';
import Loading from '../components/Loading/Loading';


class Weather extends React.Component {

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
		this.props.dispatch(fetchForecast(params));
	}

	render() {
		const { isFetching, weather } = this.props;

		if (weather.error) {
			return (
				<p>Failed to get data: {weather.error}</p>
			);
		}

		if (!weather.current || !weather.forecast || isFetching) {
			return (
				<Loading />
			);
		}

		return (
			<div className="Weather">
				<WeatherCity city={weather.current.name} />
				<WeatherTemp temperature={weather.current.main.temp} />
				<WeatherConditions conditions={weather.current.weather} />
				<WeatherForecast forecast={weather.forecast.list} />
				<WeatherBackground background={weather.current.weather[0].main} />
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
