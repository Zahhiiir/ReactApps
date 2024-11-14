import React from "react";

const greetMessage = "Hello there!";
const date = new Date();
function Greet() {
  return (
    <div>
      <h1>{greetMessage}</h1>
      <p>Date: {date.toDateString()}</p>
    </div>
  );
}

export default Greet;
