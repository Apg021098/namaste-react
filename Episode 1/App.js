let heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from React !"
);
let root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(heading);

//creating nested react elements
/**
 * Let's say we want to create an element of something like this
 * <div id="parent">
 *  <div id="child">
 *      <h1>I am a h1 tag and this is nested element in react </h1>
 *  </div>
 * </div>
 */

let parentElement = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement(
      "h1",
      {},
      "I am a h1 tag and this is nested element in react"
    )
  )
);

//root.render(parentElement);

//creating multiple children siblings in nested react elements
/**
 * Let's say we want to create an element of something like this
 * <div id="parent">
 *  <div id="child">
 *      <h1>I am a h1 tag and this is nested element in react </h1>
 *      <h2>I am a h2 tag and this is nested element in react </h2>
 *  </div>
 * </div>
 */

let parentElement1 = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement(
      "h1",
      { id: "h1" },
      "I am a h1 tag and this is nested element in react"
    ),
    React.createElement(
      "h2",
      { id: "h2" },
      "I am a h2 tag and this is nested element in react"
    ),
  ])
);

root.render(parentElement1);
