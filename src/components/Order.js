import React from "react";
import Counter from "./Counter";
import "./styles.css";
import { useState } from "react";

// import { useSelector, useDispatch } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as actionCreators from "./state/action-creators/index";
function Order(props) {
  const [count, setCount] = useState(0);
  // const dispatch = useDispatch();
  // const { loadPizza } = bindActionCreators(actionCreators, dispatch);
  return (
    <div id="order">
      <span id="price">{props.price}</span>
      <span id="valute">UAH</span>
      <div id="counter">
        <span id="plus" onClick={() => setCount(count + 1)}>
          +
        </span>
        <span id="begcount">{count}</span>
        <span id="minus" onClick={() => setCount(count - 1)}>
          -
        </span>
      </div>
      <div id="add-div">
        <button
          id="add"
          // onClick={() =>
          //   loadPizza({
          //     pizzaCount: { count },
          //     pizzaName: props.pizza,
          //     pizzaWeight: props.amount,
          //     pizzaPrice: props.price,
          //   })
          // }
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default Order;
