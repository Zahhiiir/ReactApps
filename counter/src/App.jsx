import { useState } from "react";

function App() {
  let [counter, setCounter] = useState(0);

  const addValue = () => {
    setCounter((counter += 1));
  };

  const removeValue = () => {
    setCounter((counter -= 1));
  };

  return (
    <div className="flex flex-col pt-11 justify-center items-center">
      <h1 className="bg-slate-500 w-25 text-center">Welcome to Counter!</h1>
      <button
        onClick={addValue}
        className="m-10 px-6   bg-lime-600 w-20 text-center"
      >
        +
      </button>
      <h3 className="text-center">{counter}</h3>
      <button
        onClick={removeValue}
        className="m-10 px-6 bg-red-500 w-20 text-center"
      >
        -
      </button>
    </div>
  );
}

export default App;
