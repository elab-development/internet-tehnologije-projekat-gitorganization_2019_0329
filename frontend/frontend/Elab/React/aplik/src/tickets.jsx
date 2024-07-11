import React from "react";
import OneTicket from "./oneTicket";
import { ShoppingCartOutlined } from "@ant-design/icons";
import "./tickets.css";
import { Link } from "react-router-dom";

const Tickets = ({ tickets, onAdd, onRemove, cartNum }) => {
  return (
    <>
      <div className="header">
        <button className="btn" style={{ marginTop: 20, marginLeft: 20 }}>
          <Link to="../cart">
            <ShoppingCartOutlined />
          </Link>
        </button>
        <div className="cartNumber">{cartNum}</div>
      </div>
      <h1>ODABERI KURS</h1>
      

      <div className="all-tickets">
        {tickets.map((ticket) => (
          <OneTicket
            key={ticket.id}
            ticket={ticket}
            onAdd={onAdd}
            onRemove={onRemove}
          />
        ))}
      </div>
    </>
  );
};

export default Tickets;
