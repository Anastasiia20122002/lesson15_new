import React from "react";
import { useState } from "react";
function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div id="counter">
      <span id="plus" onClick={() => setCount(count + 1)}>
        +
      </span>
      <span id="begcount">{count}</span>
      <span id="minus" onClick={() => setCount(count - 1)}>
        -
      </span>
    </div>
  );
}

export default Counter;
