import React, { Component } from 'react';
import Chapter4 from './mainConcepts/Chapter4';
import Chapter5 from './mainConcepts/Chapter5';
import Chapter6 from './mainConcepts/Chapter6';
import Chapter7 from './mainConcepts/Chapter7';
import Chapter7Inline from './mainConcepts/Chapter7Inline';
import Chapter8 from './mainConcepts/Chapter8';
import Chapter9 from './mainConcepts/Chapter9';
import Chapter10 from './mainConcepts/Chapter10';

class App extends Component {
	render() {
		return (
			<div className="App">
				{/* <Chapter4 /> */}
				{/* <Chapter5 date={new Date()} /> */}
				{/* <Chapter5 date={new Date()} /> */}
				<div>
					<p className="bg-lightest-blue pa2 w-20 tc pointer bb b--silver hover-bg-light-blue hover-b--mid-gray">
						Chapter 5
					</p>
					<Chapter5 date={new Date()} />
				</div>
				<div>
					<p className="bg-lightest-blue pa2 w-20 tc pointer bb b--silver hover-bg-light-blue hover-b--mid-gray">
						Chapter 6
					</p>
					<Chapter6 />
				</div>
				<div>
					<p className="bg-lightest-blue pa2 w-20 tc pointer bb b--silver hover-bg-light-blue hover-b--mid-gray">
						Chapter 7
					</p>{' '}
					<Chapter7 />
				</div>
				<div>
					<p className="bg-lightest-blue pa2 w-20 tc pointer bb b--silver hover-bg-light-blue hover-b--mid-gray">
						Chapter 7 Inline
					</p>
					<Chapter7Inline />
				</div>
				<div>
					<p className="bg-lightest-blue pa2 w-20 tc pointer bb b--silver hover-bg-light-blue hover-b--mid-gray">
						Chapter 8
					</p>
					<Chapter8 />
				</div>
				<div>
					<p className="bg-lightest-blue pa2 w-20 tc pointer bb b--silver hover-bg-light-blue hover-b--mid-gray">
						Chapter 9
					</p>
					<Chapter9 />
				</div>
				<div>
					<p className="bg-lightest-blue pa2 w-20 tc pointer bb b--silver hover-bg-light-blue hover-b--mid-gray">
						Chapter 10
					</p>
					<Chapter10 />
				</div>
			</div>
		);
	}
}

export default App;
