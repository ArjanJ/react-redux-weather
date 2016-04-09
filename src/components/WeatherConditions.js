import React from 'react';

class WeatherConditions extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { conditions } = this.props;

		return (
			<div>
				{Object.keys(conditions).map((key) => {
					return <span key={key}>{conditions[key].main}</span>
				})}
			</div>
		);
	}
}

export default WeatherConditions;