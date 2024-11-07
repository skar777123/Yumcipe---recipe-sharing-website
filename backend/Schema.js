import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    name: {
      type: String,
      default: "",
    },
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
      default: "",
    },
    recipes: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);
export const User = mongoose.model("user", userSchema);

const recipeSchema = new Schema(
  {
    recipeName: {
      type: String,
      default: ""
    },
    ingredients: {
      type: String,
      default: ""
    },
    instructions: {
      type: String,
      default: ""
    },
    likes: {
      type: Array,
      default: []
    },
  },
  { timestamps: true }
);
export const Recipe = mongoose.model("recipe", recipeSchema);

const contact = new Schema(
  {
    email: String,
    subject: String,
    message: String,
  },
  { timestamps: true }
);
export const Contact = mongoose.model("contact", contact);
