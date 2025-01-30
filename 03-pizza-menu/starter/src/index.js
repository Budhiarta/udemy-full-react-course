import React from "react";
import ReactDom from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "../assets/pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "../assets/pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "../assets/pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "../assets/pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "../assets/pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "../assets/pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

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
  const pizzas = pizzaData;
  // const pizzas = [];
  const dataLenght = pizzas.length;

  return (
    <main className="menu">
      <h2>OUR MENU</h2>
      {/* menggunakan ternari untuk membalikan value 2 kondisi.  */}
      {dataLenght > 0 ? (
        <ul className="pizzas">
          {pizzas.map((pizza) => (
            <Pizza pizzaObj={pizza} key={pizza.name} />
          ))}
        </ul>
      ) : (
        <p>Were still working on the menu. Please comback letter :)</p>
      )}

      {/* <Pizza
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
      /> */}
    </main>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 10;
  const clossedHour = 22;
  const isOpen = hour >= openHour && hour <= clossedHour;
  console.log(isOpen);

  return (
    <footer className="footer">
      {/* We already open {new Date().toLocaleTimeString()} */}
      {/* menggunakan & operator untuk menampilkan data dengan 1 kondisi */}
      {isOpen ? (
        <Order clossedHour={clossedHour} />
      ) : (
        // pada pemanggilan komponen order diatas ini sudah menggunakan props agar properti dari komponen footer nantinya bisa digunakan dalam komponen order
        <p>
          we're happy to welcome you from {openHour}:00 until {clossedHour}:00.
        </p>
      )}
    </footer>
  );
}

function Order({ clossedHour }) {
  // pada komponen ini ada contoh menggunakan props yang dimana props menjadi parameter dan pemanggilan props sama dengan nama yang sudah di assign pada komponen parent.
  return (
    <div className="order">
      <p>we already open until {clossedHour}:00. Don't forget to order</p>
      <button className="btn">Order</button>
    </div>
  );
}

function Pizza({ pizzaObj }) {
  // mengganti props menjadi nama properti yang sudah di assign pada komponen parent.
  // dengan memanggil nama properti langsung dapat disebut sebagai destructuring props
  return (
    <li className="pizza">
      <img
        src={pizzaObj.photoName}
        // src={f}
        alt={pizzaObj.name}
      />
      <div>
        <h3>{pizzaObj.name} </h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.price}</span>
      </div>
    </li>
  );
}

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
