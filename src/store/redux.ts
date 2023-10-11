import { configureStore } from "@reduxjs/toolkit";
import customerReducer from "./customerSlice";

const store = configureStore({
  reducer: {
    customer: customerReducer, 
    // Add other reducers if needed
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
