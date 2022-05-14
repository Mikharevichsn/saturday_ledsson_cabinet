import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "redux/actions/counterActions";

export const Counter = () => {
  const dispatch = useDispatch();
  const value = useSelector((store) => store.counter.value);

  return (
    <div>
      Counter: {value}
      <button
        onClick={() => {
          dispatch(decrement(5));
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          dispatch(increment(5));
        }}
      >
        +
      </button>
    </div>
  );
};
