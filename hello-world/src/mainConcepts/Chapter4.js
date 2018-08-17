import React, { Component } from "react";

// const element =( <Welcome name="Sara" />
// );
function formatDate(date) {
  return date.toLocaleDateString();
}
const Info = {
  date: new Date(),
  text: "blue rose",
  author: {
    name: "rose",
    avturl: "../img/blue-rose.jpg"
  }
};
function Avt(props) {
  return (
    <div className="cmt">
      <img className="w4" src={props.avt.avturl} alt={props.avt.name} />
    </div>
  );
}
function InfoAvt(props) {
  return (
    <div>
      <Avt avt={props.avt} />
      <div>{props.avt.name}</div>
    </div>
  );
}
function Comment(props) {
  return (
    <div>
      <InfoAvt avt={props.author} />
      <div>{props.text}</div>
      <div>{formatDate(props.date)}</div>
    </div>
  );
}
function Application() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Soro" />
      <Welcome name="Sere" />
    </div>
  );
}
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
class Chapter4 extends Component {
  render() {
    return (
      <div>
        {/* {element} */}
        <Application />
        <Comment date={Info.date} text={Info.text} author={Info.author} />
      </div>
    );
  }
}
export default Chapter4;
