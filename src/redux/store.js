import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./reducers/counterReducer";
import { balanceReducer } from "./reducers/balanceReducer";
import { ticketReducer } from "./reducers/ticketReducer";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    balance: balanceReducer,
    ticket: ticketReducer,
  },
});
