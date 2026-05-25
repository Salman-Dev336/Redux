import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increaseby5,
  increment,
} from "./redux/features/counterSlice";

const App = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);
  const [num, setnum] = useState(5);
  return (
    <div>
      <h1>{count}</h1>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        decrement
      </button>

      <input
      value={num}
        type="number"
        onChange={(e) => {
          // console.log(e.target.value);
          setnum(e.target.value);
        }}
      />

      <button
        onClick={() => {
          dispatch(increaseby5(Number(num)));
        }}
      >
        increase by 10
      </button>
    </div>
  );
};

export default App;
