import React from "react";
import { render } from "react-dom";

function Hi() {
  return <p>Hello world!</p>;
}

render(<Hi></Hi>, document.getElementById("app"));
