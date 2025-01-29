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
      <Pizza
        name="Pizza Focaccia"
        inggridients="Bread with italian olive oil and rosemary"
        price={6}
        photoName="../assets/pizzas/focaccia.jpg"
      />
      <Pizza
        name="Pizza funghi"
        inggridients="Tomato, mozarella, mushrooms, and onion"
        price={13}
        photoName="../assets/pizzas/funghi.jpg"
      />
      <Pizza
        name="Pizza Margherita"
        inggridients="Tomato and mozarella"
        price={10}
        photoName="../assets/pizzas/margherita.jpg"
      />
      <Pizza
        name="Pizza Spinaci"
        inggridients="Tomato, mozarella, spinach, and ricotta cheese"
        price={12}
        photoName="../assets/pizzas/spinaci.jpg"
      />
      <Pizza
        name="Pizza Salamino"
        inggridients="Tomato, mozarella, and pepperoni"
        price={15}
        photoName="../assets/pizzas/salamino.jpg"
      />
      <Pizza
        name="Pizza Prosciutto"
        inggridients="Tomato, mozarella, ham, aragula, and burrata cheese"
        price={18}
        photoName="../assets/pizzas/prosciutto.jpg"
      />
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

function Pizza(props) {
  return (
    <div className="pizza">
      <img src={props.photoName} alt={props.name} />
      <div>
        <h3>{props.name} </h3>
        <p>{props.inggridients}</p>
        <span>{props.price}</span>
      </div>
    </div>
  );
}

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
