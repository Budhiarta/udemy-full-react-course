import React from "react";
import ReactDom from "react-dom/client";

function App() {
  return (
    <>
      <Header />
      <Menu />
      <Footer />
    </>
  );
}

function Header() {
  return <h1>Light Speed PIZZA</h1>;
}

function Menu() {
  return (
    <>
      <h2>OUR MENU</h2>
      <Pizza />;
      <Pizza />;
      <Pizza />;
    </>
  );
}

function Footer() {
  return <footer>We already open {new Date().toLocaleTimeString()}</footer>;
}

function Pizza() {
  return (
    <>
      <h3>Pizza Focaccia </h3>
      <p>Bread with italian olive oil and rosemary super test</p>
      <img src="../assets/pizzas/focaccia.jpg" alt="pizza" />
    </>
  );
}

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
