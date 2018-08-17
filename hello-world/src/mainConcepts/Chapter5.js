import React, { Component } from "react";

function FormattedDate(props) {
  return (
    <div>
      <h1>Hello, world</h1>
      <h2>
        Today
        {props.today.toLocaleDateString()}
      </h2>
    </div>
  );
}
class Chapter5 extends Component {
  constructor(props) {
    super(props);
    this.state = { today: new Date() };
  }
  tick() {
    this.setState({
      today: new Date()
    });
  }
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
    //giay cua dong ho tang deu 1s
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  render() {
    return (
      <div>
        <FormattedDate today={this.state.today} />
        <p>It is {this.props.date.toLocaleTimeString()} </p>
      </div>
    );
  }
}
export default Chapter5;
