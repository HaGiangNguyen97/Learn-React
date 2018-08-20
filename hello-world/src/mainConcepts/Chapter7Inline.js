import React from 'react';

function MailBox(props) {
	const unreadMail = props.unreadMail;
	// console.log(unreadMail);
	return (
		<div>
			<h1> Hello</h1>
			{unreadMail.length > 0 && <h2>You have {unreadMail.length} unread messsages</h2>}
		</div>
	);
}

const messages = ['React', 'Re:React', 'Re:Re:React'];

function WarningBanner(props) {
	if (!props.warn) {
		return null;
	}
	return <div className="  bg-black red pa3 w-20 tc">Warning !</div>;
}
class Chapter7Inline extends React.Component {
	constructor(props) {
		super(props);
		this.state = { isLoggedIn: true, showWarnig: true };
	}
	handleHide() {
		this.setState(preState => ({
			showWarnig: !preState.showWarnig
		}));
	}
	render() {
		// console.log(this.state.isLoggedIn)
		return (
			<div className="ml2">
				<MailBox unreadMail={messages} />
				<p>
					The user is <b>{this.state.isLoggedIn ? ' currently ' : ' not '}</b>logged in .
				</p>
				<p>
					<WarningBanner warn={this.state.showWarnig} />
					<button onClick={this.handleHide.bind(this)}>{this.state.showWarnig ? 'Hide' : 'Show'}</button>
				</p>
			</div>
		);
	}
}
export default Chapter7Inline;
