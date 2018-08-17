import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import Chapter5 from "./mainConcepts/Chapter5";
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
// //function phai co return

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

//trong element2 phai de khai bao user len truoc

//CHAPTER 5
// function Clock(props) {
//   return (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {props.date.toLocaleTimeString()}</h2>
//     </div>
//   );
// }

function tick(props) {
  ReactDOM.render(<App />, document.getElementById("root"));
}
setInterval(tick, 1000);
registerServiceWorker();

// function tick() {
//   const Action = (
//     <div>
//       {/* {element}
//       <HelloWorld />
//       {element1}
//       {element2}
//       {element3}
//       {element4}
//       {element5}
//       {element6}
//       {console.log(element6)}
//       {console.log(element7)} */}

//       <App />
//       <h2>It is {new Date().toLocaleTimeString()}</h2>
//     </div>
//   );
//   ReactDOM.render(Action, document.getElementById("root"));
// }
// setInterval(tick, 1000);
// registerServiceWorker();
