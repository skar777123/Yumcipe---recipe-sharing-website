import React, { useEffect } from "react";
import Cards from "./Cards.jsx";
import { useDispatch, useSelector } from "react-redux";
import { findRecipes } from "../redux/slice/findRecipe.js";

function Home() {
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.data); 
  useEffect(() => {
    dispatch(findRecipes());
  }, [dispatch]); 

  return (
    <div className="App">
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
        {
          recipes.data ? ( 
            <Cards data={recipes.data.findRecipe} /> 
          ) : (
            <p>Loading recipes...</p> 
          )
        }
      </div>
    </div>
  );
}

export default Home;