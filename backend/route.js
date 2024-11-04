import {
  Login,
  Register,
  createRecipe,
  findRecipe,
  usersRecipe,
  deleteRecipe,
  updateRecipe,
  contactUs,
} from "./Controller.js";
import express from "express";
import { verifyToken } from "./middleware.js";
const router = express.Router();

router.post("/register", Register);
router.post("/login", Login);
router.post("/createRecipe", verifyToken, createRecipe);
router.post("/updateRecipe", verifyToken, updateRecipe);
router.post("/delete", deleteRecipe);
router.post("/contact", verifyToken, contactUs);
router.get("/recipe", findRecipe);
router.get("/userRecipe", verifyToken, usersRecipe);

export default router;
