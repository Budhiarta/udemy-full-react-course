import React from "react";
import ReactDom from "react-dom/client";

function App() {
  return (
    <>
      <Pizza />;
      <Pizza />;
      <Pizza />;
    </>
  );
}

function Pizza() {
  return (
    <>
      <h2>Pizza Focaccia </h2>
      <p>Bread with italian olive oil and rosemary super test</p>
      <img src="../assets/pizzas/focaccia.jpg" />
    </>
  );
}

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
