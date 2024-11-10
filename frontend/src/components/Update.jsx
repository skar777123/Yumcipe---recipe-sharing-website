import React from "react";
import axios from "axios";

const Update = (props) => {
  const data = props.data;
  const _id = data._id;
  const [recipeName, setRecipeName] = React.useState(data.recipeName);
  const [ingredients, setIngredients] = React.useState(data.ingredients);
  const [instructions, setInstructions] = React.useState(data.instructions);
  const [successMessage, setSuccessMessage] = React.useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!recipeName || !ingredients || !instructions) {
      alert("All fields are required.");
      return;
    }
    console.log({
      _id: _id,
      recipeName: recipeName,
      ingredients: ingredients,
      instructions: instructions,
    });
    await axios
      .post(
        "https://yumcipe.onrender.com/updateRecipe",
        {
          id: _id,
          recipeName: recipeName,
          ingredients: ingredients,
          instructions: instructions,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("token"),
          },
        }
      )
      .then((res) => {
        console.log(res);
        setSuccessMessage("Recipe updated successfully!");
      })
      .catch((err) => console.error(err));
  };

  return (
    <div
      style={{ backgroundColor: "rgba(255, 255, 255, 0.8)" }}
      className="h-screen w-screen opacity-1"
    >
      <div className="flex flex-wrap justify-center items-center">
        <div
          className="fixed"
          style={{
            margin: "15px",
          }}
        >
          <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark">
              Edit:
              <br />
            </h5>
            {successMessage && (
              <div className="text-green-500 mb-4">{successMessage}</div>
            )}
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                value={recipeName}
                className="w-full rounded-xl"
                onChange={(e) => {
                  setRecipeName(e.target.value);
                }}
                placeholder="Recipe Name"
              />

              <input
                type="text"
                value={ingredients}
                className="w-full rounded-xl"
                onChange={(e) => {
                  setIngredients(e.target.value);
                }}
                placeholder="Ingredients"
              />
              <input
                type="text"
                value={instructions}
                className="w-full rounded-xl"
                onChange={(e) => {
                  setInstructions(e.target.value);
                }}
                placeholder="Instructions"
              />
              <input
                type="submit"
                value="Update"
                className="w-22 inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Update;
