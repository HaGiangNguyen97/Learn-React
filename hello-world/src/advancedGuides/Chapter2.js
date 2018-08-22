import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';

const Loading = () => <div>Loading...</div>;
const Home = Loadable({
	loader: () => import('../App'),
	loading: Loading
});
const About = Loadable({
	loader: () => import('./Exe'),
	loading: Loading
});

const MyComponent = () => (
	<Router>
		<Switch>
			<Route exact path="/" component={Home} />
			<Route path="/about" component={About} />
		</Switch>
	</Router>
);

export default MyComponent;
