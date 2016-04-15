import React, { PropTypes } from 'react';

const WeatherCity = ({ city }) => <h2 className="WeatherCity">{city}</h2>;

WeatherCity.propTypes = {
	city: PropTypes.string.isRequired
};

export default WeatherCity;