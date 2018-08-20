import React from 'react';

const scaleName = { c: 'Celsius', f: 'Fahrenheit' };

function BoilingVerdict(props) {
	if (props.celsius >= 100) {
		return <p>The water would boil .</p>;
	}
	return <p>The water would not boil .</p>;
}

function toCelsius(fahrenheit) {
	return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
	return celsius * 9 / 5 + 32;
}

function tryConvert(temp, convert) {
	const input = parseFloat(temp);
	if (Number.isNaN(input)) {
		return '';
	}
	const output = convert(input);
	const rounded = Math.round(output * 1000) / 1000;
	return rounded.toString();
}

class TemperatureInput extends React.Component {
	constructor(props) {
		super(props);
		this.state = { temp: '' };
		this.handleChangeTemp = this.handleChangeTemp.bind(this);
	}
	handleChangeTemp(e) {
		// this.setState({ temp: e.target.value });
		this.props.onTempChange(e.target.value);
	}
	render() {
		// const temp = this.state.temp;
		const temp = this.props.temp;
		const scale = this.props.scale;
		return (
			<div>
				<fieldset>
					<legend>Enter temperature in {scaleName[scale]} : </legend>
					<input value={temp} onChange={this.handleChangeTemp} />
					<BoilingVerdict celsius={parseFloat(temp)} />
				</fieldset>
			</div>
		);
	}
}
class Chapter10 extends React.Component {
	constructor(props) {
		super(props);
		this.state = { temp: '', scale: 'c' };
		this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
		this.handleHahrenheitChange = this.handleHahrenheitChange.bind(this);
	}
	handleCelsiusChange(temp) {
		this.setState({ scale: 'c', temp });
	}

	handleHahrenheitChange(temp) {
		this.setState({ scale: 'f', temp });
	}
	render() {
		const scale = this.state.scale;
		const temp = this.state.temp;
		const celsius = scale === 'f' ? tryConvert(temp, toCelsius) : temp;
		const fahrenheit = scale === 'c' ? tryConvert(temp, toFahrenheit) : temp;
		return (
			<div>
				<TemperatureInput scale="c" temp={celsius} onTempChange={this.handleCelsiusChange} />
				<TemperatureInput scale="f" temp={fahrenheit} onTempChange={this.handleHahrenheitChange} />
				<BoilingVerdict celsius={parseFloat(celsius)} />
			</div>
		);
	}
}
export default Chapter10;
