import React from "react";
import { AiFillLike } from "react-icons/ai";

function Cards2(props) {
  return (
    <div className="flex flex-row justify-center mt-10">
      {props.data?.map((data, index) => {
        return (
          <div
            className="flex flex-row justify-evenly "
            style={{
              margin: "15px",
            }}
          >
            <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
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
                Like
                <AiFillLike />
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Cards2;
