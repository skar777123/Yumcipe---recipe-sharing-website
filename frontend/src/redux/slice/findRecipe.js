import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const findRecipes = createAsyncThunk("findRecipe", async () => {
  const response = await fetch("https://yumcipe.onrender.com/recipe", {
    method: "GET",
    headers: {
      "Access-Control-Allow-Origin": "https://yumcipe.onrender.com",
    },
  });
  return response.json();
});

export const userRecipes = createAsyncThunk("userRecipes", async () => {
  const response = await fetch("https://yumcipe.onrender.com/userRecipe", {
    headers: {
      Authorization: localStorage.getItem("token"),
      "Access-Control-Allow-Origin": "https://yumcipe.onrender.com",
    },
  });

  return response.json();
});

export const Login = createAsyncThunk("login", async (value) => {
  const response = await axios
    .post(
      "https://yumcipe.onrender.com/login",
      {
        email: value.email,
        password: value.password,
      },
      {
        headers: {
          "Access-Control-Allow-Origin": "https://yumcipe.onrender.com",
        },
      }
    )
    .then((res) => res.data)
    .catch((err) => console.error(err));
  return response;
});

export const Register = createAsyncThunk("register", async (value) => {
  const response = await axios
    .post(
      "https://yumcipe.onrender.com/register",
      {
        email: value.email,
        password: value.password,
        name: value.name,
      },
      {
        headers: {
          "Access-Control-Allow-Origin": "https://yumcipe.onrender.com",
        },
      }
    )
    .then((res) => res.data)
    .catch((err) => console.error(err));
  return response;
});

export const Contact = createAsyncThunk("contact", async (value) => {
  const response = await fetch("https://yumcipe.onrender.com/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("token"),
      "Access-Control-Allow-Origin": "https://yumcipe.onrender.com",
    },
    body: JSON.stringify({
      email: value.email,
      message: value.message,
      subject: value.subject,
    }),
  });
  return response.json();
});

export const AddRecipe = createAsyncThunk("addRecipe", async (value) => {
  const response = await fetch("https://yumcipe.onrender.com/createRecipe", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("token"),
    },
    body: JSON.stringify({
      recipeName: value.name,
      ingredients: value.ingredients,
      instructions: value.instructions,
    }),
  })
    .then((res) => res.data)
    .catch((err) => console.error(err));
  return response;
});

export const Likes = createAsyncThunk("likes", async (value) => {
  const response = await fetch("https://yumcipe.onrender.com/likes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("token"),
    },
    body: JSON.stringify({
      _id: value.data._id,
    }),
  });
  return response.json();
});

export const Update = createAsyncThunk("update", async (value) => {
  const response = await fetch("https://yumcipe.onrender.com/updateRecipe", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("token"),
    },
    body: JSON.stringify({
      _id: value._id,
      recipeName: value.recipeName,
      ingredients: value.ingredients,
      instructions: value.instructions,
    }),
  })
    .then((res) => res.data)
    .catch((err) => console.error(err));
  return response;
});

const fecthed = createSlice({
  name: "data",
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(findRecipes.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(findRecipes.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(findRecipes.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isError = true;
    });
    builder.addCase(userRecipes.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(userRecipes.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(userRecipes.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isError = true;
    });
    builder.addCase(Login.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(Login.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(Login.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isError = true;
    });
    builder.addCase(Register.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(Register.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(Register.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isError = true;
    });
    builder.addCase(AddRecipe.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(AddRecipe.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(AddRecipe.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isError = true;
    });
    builder.addCase(Contact.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(Contact.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(Contact.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isError = true;
    });
  },
});

export default fecthed.reducer;
