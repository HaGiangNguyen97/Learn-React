import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import HelloWorld from "./mainConcepts/HelloWorld";
import registerServiceWorker from "./registerServiceWorker";

function formatName(user) {
  return user.firstName + "  " + user.lastName;
}

function getGreetingUser(user) {
  if (!user) {
    return (
      <h1>
        Hello,
        {formatName(user)}!
      </h1>
    );
  } else return <h1>Hello, Stranger</h1>;
}
//function phai co return

const user = {
  firstName: "Nguyen",
  lastName: "Tien"
};
const name = "Giang";
const element = <h1> HELLO, WORLD</h1>;
const element1 = <h2>Hello, {name}</h2>;
const element2 = <h3>Hello, {formatName(user)}</h3>;
const element3 = <div tabIndex="0"> {getGreetingUser(user)}</div>;
const element4 = (
  <div>
    <h1>hello</h1>
    <h2>Good to see you here</h2>
  </div>
);
const title = Response.potentiallyMaliciousInput;
const element5 = <h1>{title}</h1>;
const element6 = React.createElement(
  "h1",
  { className: "greeting" },
  "Bonjour"
);
const element7 = {
  type: "h1",
  props: {
    className: "greeting",
    children: "Bonjour"
  }
};

//tronf element2 phai de khai bao user len truoc
ReactDOM.render(
  <div>
    {element}
    <HelloWorld />
    {element1}
    {element2}
    {element3}
    {element4}
    {element5}
    {element6}
    {console.log(element6)}
    {console.log(element7)}
  </div>,
  document.getElementById("root")
);
registerServiceWorker();
