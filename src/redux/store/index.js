import { configureStore } from "@reduxjs/toolkit";
import HomePageReducer from "../reducer";

const store = configureStore({
  reducer: HomePageReducer,
});

export default store;
