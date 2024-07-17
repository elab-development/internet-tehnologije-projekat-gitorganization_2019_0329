import React from "react";
import { PlusOutlined } from "@ant-design/icons";
import { MinusOutlined } from "@ant-design/icons";

const OneTicket = ({ ticket, onAdd, onRemove }) => {
  return (
    <div className="card">
     
     <img
   className="card-image-top"
   src={ticket.img}
   height="150"
   width="200"
 ></img>
     
     
     
     
      <div className="card-body">
        <h3 className="card-title">{ticket.title}</h3>
        <p className="card-text">{ticket.description}</p>
        <p className="card-price">Cena: {ticket.price}</p>
        <div className="footer">
          <button className="btn" onClick={() => onAdd(ticket.id)}>
            <PlusOutlined />
          </button>
          <p>{ticket.amount}</p>
          <button className="btn" onClick={() => onRemove(ticket.id)}>
            <MinusOutlined />
          </button>
        </div>
      </div>
    </div>
  );
};

export default OneTicket;
