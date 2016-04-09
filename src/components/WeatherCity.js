import React from 'react';

class WeatherCity extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { city } = this.props;

		return (
			<h2>{city}</h2>
		);
	}
}

export default WeatherCity;