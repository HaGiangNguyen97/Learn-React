import React, { Component } from "react";
import Chapter4 from "./mainConcepts/Chapter4";
import Chapter5 from "./mainConcepts/Chapter5";
class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Chapter4 /> */}
        <Chapter5 date={new Date()} />
        <Chapter5 date={new Date()} />
        <Chapter5 date={new Date()} />
      </div>
    );
  }
}

export default App;
