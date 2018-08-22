import React from 'react';

function FancyBorder(props) {
	return <div className={props.color}>{props.children}</div>;
	//props.chidren : lay tat ca cac thanh phan con co trong no
}

function Dialog(props) {
	return (
		<div>
			<FancyBorder color=" tc ba b--blue">
				<h1>{props.title}</h1>
				<p>{props.message}</p>
				{props.children}
			</FancyBorder>
		</div>
	);
}

function WelcomeDialog() {
	return <Dialog title="Welcome" message="Thank you " />;
}
function Chat() {
	return <div className="w-30 h5 bg-light-blue fl " />;
}
function Contacts() {
	return <div className="w-70 h5 bg-light-pink fl " />;
}
function SplitPane(props) {
	return (
		<div>
			<div>{props.left}</div>
			<div>{props.right}</div>
		</div>
	);
}

function App() {
	return <SplitPane left={<Contacts />} right={<Chat />} />;
}
class Chapter11 extends React.Component {
	constructor(props) {
		super(props);
		this.state = { login: '' };
		this.handleChange = this.handleChange.bind(this);
		this.handleSignUp = this.handleSignUp.bind(this);
	}
	handleChange(e) {
		this.setState({
			login: e.target.value
		});
	}
	handleSignUp() {
		alert(`Welcome aboard, ${this.state.login}!`);
	}
	render() {
		return (
			<div className="overflow-hidden">
				<WelcomeDialog />
				<App /><Dialog title="Mars Exploration Program" message="How should we refer to you?">
				<input value={this.state.login} onChange={this.handleChange} />
				<button onClick={this.handleSignUp}>Sign me up !</button>
			</Dialog>
			</div>
			
		);
	}
}
export default Chapter11;
