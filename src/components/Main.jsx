import React from "react";
import Left from "./Left";
import Right from "./Right";

const Main = () => {
  return (
    <div className="border border-y-1 border-x-0 border-gray-500 grid grid-cols-2 gap-6">
      <Left />
      <Right />
    </div>
  );
};

export default Main;
