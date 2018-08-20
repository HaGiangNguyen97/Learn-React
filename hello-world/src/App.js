import React, { Component } from "react";
import Chapter4 from "./mainConcepts/Chapter4";
import Chapter5 from "./mainConcepts/Chapter5";
import Chapter6 from "./mainConcepts/Chapter6";
import Chapter7 from "./mainConcepts/Chapter7";
import Chapter7Inline from "./mainConcepts/Chapter7Inline";
class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Chapter4 /> */}
        {/* <Chapter5 date={new Date()} /> */}
        {/* <Chapter5 date={new Date()} /> */}
        <Chapter5 date={new Date()} />
        <Chapter6 />
        <Chapter7 />
        <Chapter7Inline />
      </div>
    );
  }
}

export default App;
