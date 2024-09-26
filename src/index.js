import React from "react";
import ReactDOM from "react-dom/client";

// Create a simple component to render
const HomePage = () => {
  return (
    <div>
      <h1>Apple</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HomePage />);
