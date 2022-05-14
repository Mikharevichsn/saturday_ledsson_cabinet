import shortid from "shortid";
import { createReducer } from "@reduxjs/toolkit";
import { add, remove, markAsDone } from "../actions/ticketActions";

// action.payload = {
//   title: 'sdfsdfsdf',
//   description: 'sdfsdfsdf'
// }

export const ticketReducer = createReducer(
  { tickets: [] },
  {
    [add]: (state, action) => ({
      ...state,
      tickets: [...state.tickets, { id: shortid(), ...action.payload }],
    }),
    [remove]: (state, action) => ({
      ...state,
      tickets: state.tickets.filter((el) => el.id !== action.payload),
    }),
    [markAsDone]: (state, action) => ({
      ...state,
      tickets: state.tickets.map((el) => {
        if (el.id === action.payload) {
          return { ...el, isDone: true };
        }

        return el;
      }),
    }),
  }
);
