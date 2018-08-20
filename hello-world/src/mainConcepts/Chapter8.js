import React, { Component } from 'react';

function NumberList(props) {
	const numbers = props.numbers;
	const listItems = numbers.map(number => <ListItem key={number.toString()} value={number} />);
	return <ul>{listItems}</ul>;
}
const numbers = [1, 2, 3, 4, 5];

function ListItem(props) {
	const value = props.value;
	return <li>{value}</li>;
}
function Blog(props) {
	const sideBar = <ul className="list ">{props.posts.map(post => <li key={post.id}>{post.title}</li>)}</ul>;
	const content = props.posts.map(post => (
		<div key={post.id}>
			<h3>{post.tilte}</h3>
			<p>{post.content}</p>
		</div>
	));
	return (
		<div>
			{sideBar}
			<hr />
			{content}
		</div>
	);
}

const posts = [
	{ id: 1, tilte: 'Hello world', content: 'Welcome to learning React !' },
	{
		id: 2,
		tilte: 'Installation ',
		content: 'You can install React from npm'
	}
];
class Chapter8 extends Component {
	render() {
		return (
			<div>
				<NumberList numbers={numbers} />
				<Blog posts={posts} />
			</div>
		);
	}
}
export default Chapter8;
