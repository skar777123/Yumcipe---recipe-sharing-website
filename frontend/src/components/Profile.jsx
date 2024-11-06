import React, { useEffect } from "react";
import Cards2 from "./Cards2";
import { useDispatch, useSelector } from "react-redux";
import { userRecipes } from "../redux/slice/findRecipe";

const Profile = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.data);
  console.log("State", user);
  useEffect(() => {
    dispatch(userRecipes());
  }, [dispatch]);
  localStorage.setItem("user",user.data?.user?._id)
  return (
    <div>
      <div className="flex flex-row justify-center">
        <h1
          style={{
            color: "#1a56db",
            fontSize: "30px",
            fontWeight: "bold",
          }}
        >
          Profile
        </h1>
      </div>
      <div className="flex flex-row justify-center">
        <div className="w-full max-w-sm p-6 flex flex-col justify-center items-center bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
            {user.data?.user?.name || "___"}
          </h5>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {user.data?.user?.email || "_______"}
          </span>
        </div>
      </div>

      <div className="flex flex-row justify-center">
        <hr
          style={{
            width: "70%",
            marginTop: "30px",
          }}
        />
      </div>
      <div className="flex flex-row justify-center">
        <h1
          style={{
            marginTop: "20px",
            fontSize: "30px",
            fontWeight: "bold",
          }}
        >
          Your{" "}
          <span
            style={{
              color: "#1a56db ",
            }}
          >
            Recipes
          </span>
        </h1>
      </div>
      <Cards2 data={user.data?.userRecipe} />
    </div>
  );
};

export default Profile;
