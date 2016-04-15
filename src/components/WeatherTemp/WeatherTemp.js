import React, { PropTypes } from 'react';

const WeatherTemp = ({ temperature }) => <h2>{temperature}<sup>&#8451;</sup></h2>;

WeatherTemp.propTypes = {
	temperature: PropTypes.number.isRequired
};

export default WeatherTemp;