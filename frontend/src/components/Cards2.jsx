import React, { useState } from "react";
import { AiFillLike } from "react-icons/ai";
import { FaPencilAlt } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Update from "./Update";
import axios from "axios";

function Cards2(props) {
  const [update, setUpdate] = useState(false);
  const [_id, setId] = useState("");
  const [recipeName, setRecipeName] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  return (
    <div>
      {update && (
        <Update
          data={{
            _id: _id,
            recipeName: recipeName,
            ingredients: ingredients,
            instructions: instructions,
          }}
        />
      )}

      <div className="flex flex-wrap justify-center mt-10">
        {props.data?.map((data, index) => {
          const deleteRecipe = async (e) => {
            await axios
              .post(
                "https://yumcipe.onrender.com/delete",
                { id: data._id },
                { headers: { Authorization: localStorage.getItem("token") } }
              )
              .then((response) => {
                window.location.reload();
              })
              .catch((error) => {
                console.log(error);
              });
          };
          return (
            <div
              key={index}
              className="flex flex-row justify-evenly "
              style={{
                margin: "15px",
              }}
            >
              <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div className="flex flex-row justify-end">
                  <button onClick={deleteRecipe} className="mr-2">
                    <MdDelete size={"20px"} />
                  </button>
                  <button
                    onClick={() => {
                      setUpdate(!update);
                      setId(data._id);
                      setRecipeName(data.recipeName);
                      setIngredients(data.ingredients);
                      setInstructions(data.instructions);
                    }}
                  >
                    <FaPencilAlt />
                  </button>
                </div>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {data.recipeName || "not Found"}
                </h5>

                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  <b>Ingredients:</b>
                  <br />
                  {data.ingredients || "not Found"}
                </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  <b>Instructions:</b>
                  <br />
                  {data.instructions || "not Found"}
                </p>
                <a
                  href="/"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  {data.likes?.length || 0}
                  - Like
                  <AiFillLike />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Cards2;
