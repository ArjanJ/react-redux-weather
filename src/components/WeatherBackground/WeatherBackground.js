import React, { PropTypes } from 'react';

const WeatherBackground = ({ background }) =>
	<div className={`WeatherBackground ${background}`}></div>

WeatherBackground.propTypes = {
	background: PropTypes.string.isRequired
};

export default WeatherBackground;