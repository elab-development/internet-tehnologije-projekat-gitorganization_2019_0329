import React from "react";
import OneTicket from "./oneTicket";
import "./cart.css";

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

      <h3>Ukupno za naplatu: {total} RSD</h3>
    </div>
  );
};

export default Cart;

