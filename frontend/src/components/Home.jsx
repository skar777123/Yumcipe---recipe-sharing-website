import React from "react";
import Cards from "./Cards.jsx";

const Home = () => {
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
};

export default Home;
