import React, { useEffect } from "react";
import Cards from "./Cards.jsx";
import { useDispatch, useSelector } from "react-redux";
import { findRecipes } from "../redux/slice/Api.js";

function Home() {
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state);
  console.log("State: ", recipes);
  useEffect(() => {
    dispatch(findRecipes());
  },[]);
  if (recipes.findRecipes.isLoading) {
    return <h1>Loading....</h1>;
  }
  // async function fetchData() {
  //   await fetch("/recipe")
  //     .then((res) => res.json())
  //     .then((data) => console.log(data))
  //     .catch((err) => console.error(err));
  // }
  // useEffect(() => {
  //   fetchData();
  // }, []);
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <p className="text-4xl font-bold">
          Daily New{" "}
          <span
            style={{
              color: "#1a56db ",
            }}
          >
            Recipes With Ease
          </span>
        </p>
      </div>
      <Cards />
    </div>
  );
}

export default Home;
