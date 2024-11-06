import { configureStore } from "@reduxjs/toolkit";
import { findRecipes } from "./slice/Api";

export const store = configureStore({
  reducer: {
    findRecipes: findRecipes,
  },
});