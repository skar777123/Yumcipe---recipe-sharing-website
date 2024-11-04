import React from "react";
import Register from "./Register";
import Login from "./Login";

const Creds = () => {
  return (
    <div style={{ marginTop: '80px' }} className="flex flex-col lg:flex-row justify-center items-center">
      <div className="w-1/2">
        <Login />
      </div>
      <div className="w-1/2">
        <Register />
      </div>
    </div>
  );
};

export default Creds;
