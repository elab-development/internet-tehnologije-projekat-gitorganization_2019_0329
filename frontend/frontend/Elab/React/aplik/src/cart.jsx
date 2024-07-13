import React from "react";
import OneTicket from "./oneTicket";
import "./cart.css";
import React from 'react';


const Cart = ({ cartProducts, onAdd, onRemove }) => {
  const initPrice = 0;
  const total = cartProducts.reduce(
    (accumulator, current) => accumulator + current.price * current.amount,
    initPrice
  );

  return (
    <div className="cart-container">
      <h1>Ovo je vaša korpa</h1>
      <div className="cart-all">
        {cartProducts.map((ticket) => (
          <OneTicket
            key={ticket.id}
            ticket={ticket}
            onAdd={onAdd}
            onRemove={onRemove}
          />
        ))}
      </div>

      <h3>Ukupna cena kursa je: {total} RSD</h3>

     
      <h2>Vaši podaci</h2>
      <div className="user-data">
        <label htmlFor="imePrezime">Ime i prezime:</label>
        <input type="text" id="imePrezime" />
        <label htmlFor="email">E-mail:</label>
        <input type="email" id="email" />
        <label htmlFor="brojTelefona">Broj telefona:</label>
        <input type="tel" id="brojTelefona" />
        <label htmlFor="adresa">Adresa:</label>
        <input type="text" id="adresa" />
      </div>

      <button className="prijavi-se-btn" >PRIJAVI SE</button>
    </div>
  );
};

export default Cart;





















