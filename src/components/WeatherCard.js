import React, { PropTypes } from 'react';

const renderData = (data = {}) => (
	<div>
		<h2>{ data.name }</h2>
	</div>
)

const WeatherCard = ({ weather }) => (
	<div className="Weather">
		<h1>Weather</h1>
		<p>{ weather.isFetching ? 'Loading...' : 'Loaded'}</p>
		{ renderData(weather.data) }
	</div>
);

export default WeatherCard;
