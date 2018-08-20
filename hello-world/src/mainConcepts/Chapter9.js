import React from 'react';

class Chapter9 extends React.Component {
	constructor(props) {
		super(props);
		this.state = { value: 'coconut', isGoing: true, num: 2 };
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
	}
	handleChange(e) {
		this.setState({ value: e.target.value });
	}
	handleInputChange(e) {
		const target = e.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const name = target.name;
		this.setState({
			[name]: value
		});
	}
	handleSubmit(e) {
		alert(' Flavor : ' + this.state.value);
		e.preventDefault();
	}

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<label>
						Is Going
						<input
							name="isGoing"
							type="checkbox"
							checked={this.state.isGoing}
							onChange={this.handleInputChange}
						/>
					</label>
					<br />
					<label>
						Number of guests :
						<input type="number" name="num" value={this.state.num} onChange={this.handleInputChange} />
					</label>
					<br />
					<label>
						Pick your favorite flavor :
						<select value={this.state.value} onChange={this.handleChange}>
							<option value="grapefruit">Grapefruit</option>
							<option value="lime">Lime</option>
							<option value="coconut">Coconut</option>
							<option value="mango">Mango</option>
						</select>
					</label>
					<br />
					<input type="submit" value="Submit" />
				</form>
			</div>
		);
	}
}

export default Chapter9;
