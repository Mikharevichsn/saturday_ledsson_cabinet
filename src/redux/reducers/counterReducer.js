import { createReducer } from "@reduxjs/toolkit";
import { increment, decrement } from "../actions/counterActions";

export const counterReducer = createReducer(
  // 0
  { value: 10 },
  {
    // [increment]: (state, action) => state + action.payload,
    [increment]: (state, action) => ({
      ...state,
      value: state.value + action.payload,
    }),
    [decrement]: (state, action) => ({
      ...state,
      value: state.value - action.payload,
    }),
  }
);
