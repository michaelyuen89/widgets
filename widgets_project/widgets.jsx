import React from 'react'; // we don't specify file path. this is one of packages in node_modules/
import ReactDOM from 'react-dom';
import App from './frontend/app';



document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById("root");
  // const firstReactElement = React.createElement("h1", null, ["Hello, from React"]);
  // const firstReactElement = <h1>Hello, from React, hello hello</h1>;
  // ReactDOM.render(firstReactElement, root);
  // props are data given from parent to children
  // Three ways to cause components to re-render
  // - changes to our props should trigger render
  // - if state changes
  // - if parent re-renders then children will re-render
  ReactDOM.render(<App />, root);
  // ReactDOM.render(<h1>overwriting</h1>, root);
});