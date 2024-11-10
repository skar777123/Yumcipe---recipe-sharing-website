import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import router from "./route.js";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cookieParser());
dotenv.config();
app.use(
  cors({
    origin: ["https://yumcipe-app.netlify.app/", "http://localhost:3000"],
    credentials: true,
  })
);

app.use("/", router);
mongoose.connect(process.env.URI).then(() => {
  console.log("MongoDB connected");
  app.listen(process.env.PORT, () => {
    console.log(`Server is Running on ${process.env.PORT}`);
  });
});

/*
http://localhost:3003/register
http://localhost:3003/login
http://localhost:3003/createRecipe
http://localhost:3003/updateRecipe
http://localhost:3003/delete
http://localhost:3003/findRecipe
http://localhost:3003/usersRecipe
*/
