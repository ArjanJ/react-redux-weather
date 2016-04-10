import React from 'react';

const WeatherConditions = ({ conditions }) =>
	<div className="WeatherConditions">
		{Object.keys(conditions).map((key) => {
			return <span key={key}>{conditions[key].main}</span>
		})}
	</div>

export default WeatherConditions;