import React, { useState } from "react";

const AddRecipe = () => {
  const [name, setName] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [instructions, setInstructions] = useState([]);
  const [preview, setPre] = useState(true);

  return (
    <>
      <div className="flex flex-col items-center">
        <h1 className="mt-10 text-3xl font-bold">
          Add Your <span className="text-blue-600">Recipes</span>
        </h1>
      </div>
      <div className="container flex items-center justify-center min-h-screen p-10">
        <div className="flex flex-col justify-center w-96 mt-8">
          <form className="bg-white shadow-md rounded-lg p-6">
            <div className="relative z-0 mb-5">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                name="floating_email"
                id="floating_email"
                className="rounded-xl block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_email"
                className="absolute pl-2 text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0"
              >
                Name of the Recipe
              </label>
            </div>
            <div className="relative z-0 mb-5">
              <input
                type="text"
                name="floating_password"
                id="floating_password"
                className="rounded-xl block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                value={ingredients}
                onChange={(e) => setIngredients(e.target.value)}
                required
              />
              <label
                htmlFor="floating_password"
                className="absolute pl-2 text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0"
              >
                Ingredients
              </label>
            </div>
            <div className="relative z-0 mb-5">
              <input
                type="text"
                name="repeat_password"
                id="floating_repeat_password"
                value={instructions}
                onChange={(e) => setInstructions(e.target.value)}
                className="rounded-xl block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_repeat_password"
                className="absolute pl-2 text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0"
              >
                Instruction
              </label>
            </div>

            <button
              type="button"
              onClick={() => {
                setPre(!preview);
              }}
              className="w-22 inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
            >
              Preview
            </button>

            {!preview && name && ingredients && instructions && (
              <div className="max-w-lg p-6 bg-white border border-gray-200 rounded-lg shadow-lg mt-6 md:mt-0">
                <a href="/">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                    {name}
                  </h5>
                </a>
                <p class="mb-3 font-normal text-gray-700">
                  Ingredients: {ingredients}
                </p>
                <p class="mb-3 font-normal text-gray-700">
                  Instructions: {instructions}
                </p>
              </div>
            )}
            {!preview && name && (
              <div className="flex flex-row justify-center mt-4">
                <button
                  type="button"
                  className="w-22 inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
                >
                  Submit
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default AddRecipe;
