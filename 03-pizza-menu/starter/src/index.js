import React from "react";
import ReactDom from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  const hour = new Date().getHours();
  const openHour = 10;
  const clossedHour = 22;
  const isOpen = hour >= openHour && hour <= clossedHour;
  console.log(isOpen);

  //js logic on function
  // if (hour >= openHour && hour <= clossedHour) alert("we're Already open");
  // else alert("we're Clossed");

  return (
    <header className="header">
      <h1> Lightning Pizza Restaurant</h1>
    </header>
  );
}

function Menu() {
  return (
    <main className="menu">
      <h2>OUR MENU</h2>
      <Pizza />;
      <Pizza />;
      <Pizza />;
    </main>
  );
}

function Footer() {
  return (
    <footer className="menu">
      We already open {new Date().toLocaleTimeString()}
    </footer>
  );
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
