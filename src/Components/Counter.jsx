import React, { useState } from "react";
import "./counter.css";

const Counter = (props) => {
  const [count, setCount] = useState(props.counter);

  return (
    <>
      <div>
        <h1 className={count % 2 === 0 ? "green" : "red"}>{count}</h1>
        <button onClick={() => setCount(count - 1)} className="decreament">
          -
        </button>
        <button onClick={() => setCount(count * 2)} className="double">
          Double
        </button>

        <button onClick={() => setCount(count + 1)} className="increament">
          +
        </button>
      </div>
    </>
  );
};

export default Counter;
