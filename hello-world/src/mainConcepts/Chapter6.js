import React from "react";

class Chapter6 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true, isToggleOff: true };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      isToggleOn: !this.state.isToggleOn,
      isToggleOff: !this.state.isToggleOff
    });
    console.log(this);
  }

  render() {
    return (
      <div>
        <button onClick={e => this.handleClick(e)}>
          {this.state.isToggleOn ? "ON" : "OFF"}
        </button>
        <button onClick={this.handleClick.bind(this)}>
          {this.state.isToggleOff ? "OFF" : "ON"}
        </button>
      </div>
    );
  }
}
export default Chapter6;
