import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const findRecipes = createAsyncThunk("findRecipe", async () => {
  const response = await fetch("https://yumcipe.onrender.com/recipe");
  return response.json();
});

const findRecipe = createSlice({
  name: "findRecipe",
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(findRecipe.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(findRecipe.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(findRecipe.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isError = true;
    });
  },
});

export default findRecipe.reducer;