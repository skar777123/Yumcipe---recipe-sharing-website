import React from "react";
import { AiFillLike } from "react-icons/ai";
import axios from "axios";

const Cards = (props) => {
  return (
    <div className="flex flex-wrap justify-center mt-10">
      {props.data.map((data, index) => {
        const handleSubmit = () => {
          axios
            .post(
              "https://yumcipe.onrender.com/likes",
              {
                _id: data._id,
              },
              {
                headers: {
                  Authorization: localStorage.getItem("token"),
                  "Access-Control-Allow-Origin": "*",
                },
              }
            )
            .then((res) => window.location.reload())
            .catch((err) => console.error(err));
        };
        return (
          <div
            className="flex flex-col justify-between m-4 max-w-sm p-6  "
            key={index}
            style={{
              margin: "15px",
            }}
          >
            <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-blue-400 dark:border-blue-800">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {data.recipeName}
              </h5>

              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                <b>Ingredients:</b>
                <br />
                {data.ingredients}
              </p>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                <b>Instructions:</b>
                <br />
                {data.instructions}
              </p>
              <button
                onClick={handleSubmit}
                class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                {data.likes?.length || 0}
                - Like
                <AiFillLike />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
