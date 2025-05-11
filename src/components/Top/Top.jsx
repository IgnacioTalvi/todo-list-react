import React from "react";
import "./Top.css";

const Top = () => {
  return <div className="top">

      <h1>Todo list</h1>
    <div className="top-content">
      <input type="text" placeholder="Add new task" />
      <button>+</button>
    </div>

  </div>;
};

export default Top;
