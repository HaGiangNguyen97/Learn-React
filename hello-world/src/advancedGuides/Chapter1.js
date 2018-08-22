import React from 'react';

class Chapter1 extends React.Component {
	constructor(props) {
		super(props);
		this.state = { isOpen: false };
		this.toggleContainer = React.createRef();
	}
	onClickHandler() {
		this.setState(currentState => ({ isOpen: !currentState.isOpen }));
	}
	onBlurHandler() {
		this.timOutId = setTimeout(() => {
			this.setState({
				isOpen: false
			});
		});
	}
	onFocusHandle() {
		clearTimeout(this.timOutId);
	}
	render() {
		return (
			<div onBlur={this.onBlurHandler.bind(this)} OnFocus={this.onFocusHandle.bind(this)}>
				<button onClick={this.onClickHandler.bind(this)}>Select a option</button>
				{this.state.isOpen ? (
					<ul>
						<li>Option 1</li>
						<li>Option 2</li>
						<li>Option 3</li>
					</ul>
				) : null}
			</div>
		);
	}
}
export default Chapter1;
