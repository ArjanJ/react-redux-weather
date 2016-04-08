import { connect } from 'react-redux';
import { requestWeather } from '../actions';
import WeatherCard from '../components/WeatherCard';

const mapStateToProps = (state) => {
	return {
		weather: state.weather
	};
};

const Weather = connect(mapStateToProps)(WeatherCard);

export default Weather;
