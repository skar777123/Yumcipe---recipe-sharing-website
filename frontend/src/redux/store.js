import { configureStore } from "@reduxjs/toolkit";
import fetched from "./slice/findRecipe.js";

export const store = configureStore({
  reducer: {
    data: fetched,
  },
});
