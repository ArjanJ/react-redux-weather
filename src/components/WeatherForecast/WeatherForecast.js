import React from 'react';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts';

const formatData = (forecast) => {
	let nextDay = new Date(forecast[0].dt * 1000).toDateString();
	const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

	const days = forecast.filter((day, i) => {
		let date = new Date(day.dt * 1000).toDateString();
		if (date.indexOf(nextDay) < 0 || i === 0) {
			nextDay = date;
			day.temp = day.main.temp;
			day.date = weekdays[new Date(day.dt * 1000).getDay()]
			return day;
		}
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
						<XAxis dataKey="date" />
						<YAxis />
		        <Line type='monotone' dataKey='temp' stroke='#8884d8' strokeWidth={2} />
		      </LineChart>
	     </ResponsiveContainer>
	    </div>
		);
	}
}

export default WeatherForecast;
