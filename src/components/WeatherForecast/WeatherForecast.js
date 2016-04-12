import React from 'react';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts';

const dateToString = (date, multiplier = 1) => {
	return new Date(date * multiplier).toDateString();
};

/**
 * Filter forecast data so that it only returns one object for the next
 * five days instead of the default object for the weather every 3 hours
 * for the next five days.
 * Map over the filtered forecast data and add properties to the top level
 * of the object so that the LineChart can access that data.
 */
const formatData = (forecast) => {
	let nextDay = dateToString(forecast[0].dt, 1000);
	const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

	const days = forecast.filter((day, i) => {
		let prevDay = nextDay;
		let dateString = dateToString(day.dt, 1000);
		nextDay = dateString;
		return dateString.indexOf(prevDay) < 0 || i === 0;
	})
	.map((day) => {
		day.temp = day.main.temp;
		day.dayName = dayNames[new Date(day.dt * 1000).getDay()];
		return day;
	});

	return days;
};

class WeatherForecast extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="WeatherForecast">
				<ResponsiveContainer className="WeatherForecastChart">
					<LineChart data={formatData(this.props.forecast)}>
						<XAxis dataKey="dayName" />
						<YAxis />
		        <Line type='monotone' dataKey='temp' stroke='#8884d8' strokeWidth={2} />
		      </LineChart>
	     </ResponsiveContainer>
	    </div>
		);
	}
}

export default WeatherForecast;
