import React, { Component } from 'react';
import Chapter4 from './mainConcepts/Chapter4';
import Chapter5 from './mainConcepts/Chapter5';
import Chapter6 from './mainConcepts/Chapter6';
import Chapter7 from './mainConcepts/Chapter7';
import Chapter7Inline from './mainConcepts/Chapter7Inline';
import Chapter8 from './mainConcepts/Chapter8';
import Chapter9 from './mainConcepts/Chapter9';
import Chapter10 from './mainConcepts/Chapter10';
import Chapter11 from './mainConcepts/Chapter11';
// import Extendsion from './mainConcepts/Extendsion';
//Advanced Guides
import Chapter12 from './advancedGuides/Chapter1';
import Chapter13 from './advancedGuides/Chapter2';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = { showMainConcepts: false };
		this.handleShowMC = this.handleShowMC.bind(this);
	}
	handleShowMC() {
		this.setState({ showMainConcepts: !this.state.showMainConcepts });
	}
	render() {
		return (
			<div className="App">
				<div className="mainConcepts ">
					<div
						onClick={this.handleShowMC}
						className=" tc f1  pv2 bg-gray near-white hover-white pointer lh-title"
					>
						Main Concepts
					</div>
					{this.state.showMainConcepts && (
						<div>
							{/* <Chapter4 /> */}
							{/* <Chapter5 date={new Date()} /> */}
							{/* <Chapter5 date={new Date()} /> */}
							<div>
								<p className="bg-lightest-blue pa2 w-20-l w-50 tc pointer bb b--silver hover-bg-light-blue hover-b--mid-gray">
									Chapter 5
								</p>
								<Chapter5 date={new Date()} />
							</div>
							<div>
								<p className="bg-lightest-blue pa2 w-20-l w-50  tc pointer bb b--silver hover-bg-light-blue hover-b--mid-gray">
									Chapter 6
								</p>
								<Chapter6 />
							</div>
							<div>
								<p className="bg-lightest-blue pa2 w-20-l w-50 tc pointer bb b--silver hover-bg-light-blue hover-b--mid-gray">
									Chapter 7
								</p>
								<Chapter7 />
							</div>
							<div>
								<p className="bg-lightest-blue pa2 w-20-l w-50 tc pointer bb b--silver hover-bg-light-blue hover-b--mid-gray">
									Chapter 7 Inline
								</p>
								<Chapter7Inline />
							</div>
							<div>
								<p className="bg-lightest-blue pa2 w-20-l w-50 tc pointer bb b--silver hover-bg-light-blue hover-b--mid-gray">
									Chapter 8
								</p>
								<Chapter8 />
							</div>
							<div>
								<p className="bg-lightest-blue pa2 w-20-l w-50 tc pointer bb b--silver hover-bg-light-blue hover-b--mid-gray">
									Chapter 9
								</p>
								<Chapter9 />
							</div>
							<div>
								<p className="bg-lightest-blue pa2 w-20-l w-50 tc pointer bb b--silver hover-bg-light-blue hover-b--mid-gray">
									Chapter 10
								</p>
								<Chapter10 />
							</div>
							<div>
								<p className="bg-lightest-blue pa2 w-20-l w-50 tc pointer bb b--silver hover-bg-light-blue hover-b--mid-gray">
									Chapter 11
								</p>
								<Chapter11 />
							</div>
							{/* <div>
								<p className="bg-lightest-blue pa2 w-20-l w-50 tc pointer bb b--silver hover-bg-light-blue hover-b--mid-gray">
									Chapter Extendsion
								</p>
								<Extendsion />
							</div> */}
						</div>
					)}
				</div>
				<div className="advanced ">
					<div className=" tc f1 mt2 pv2 bg-gray near-white hover-white pointer lh-title">
						Advanced Guides
					</div>
					<div>
						<div>
							<p className="bg-lightest-blue pa2 w-20-l w-50 tc pointer bb b--silver hover-bg-light-blue hover-b--mid-gray">
								Chapter 1
							</p>
							<Chapter12 />
						</div>
						<div>
							<p className="bg-lightest-blue pa2 w-20-l w-50 tc pointer bb b--silver hover-bg-light-blue hover-b--mid-gray">
								Chapter 2
							</p>
							<Chapter13 />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
