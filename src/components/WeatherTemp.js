import React from 'react';

class WeatherTemp extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { temperature } = this.props;

		return (
			<h2>{temperature}<sup>&#8451;</sup></h2>
		);
	}
}

export default WeatherTemp;