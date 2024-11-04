import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    name: String,
    email: String,
    password: String,
  },
  { timestamps: true }
);
export const User = mongoose.model("user", userSchema);

const recipeSchema = new Schema(
  {
    recipeName: String,
    ingredients: String,
    instructions: String,
    likes: number,
    userId: { type: Schema.Types.ObjectId, ref: "user" },
  },
  { timestamps: true }
);
export const Recipe = mongoose.model("recipe", recipeSchema);
