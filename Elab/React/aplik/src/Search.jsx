import React, { useState } from "react";
import Tickets from "./tickets";
import "./cart.css";

function Search({ details }) {
  const [searchField, setSearchField] = useState("");

  const filteredTickets = details.filter((ticket) => {
    return ticket.title.toLowerCase().includes(searchField.toLowerCase());
  });

  const handleChange = (e) => {
    setSearchField(e.target.value);
  };

  function showTickets() {
    return <Tickets tickets={filteredTickets} />;
  }

  return (
    <section className="h1">
      <h1>Pronađi svoj kurs</h1>
      <div className="card-cart{">
        <h3 className="h1" style={{ marginLeft: 10 }}>
         Pretraži ovde
        </h3>
      </div>
      <div className="h1" style={{ marginLeft: 10 }}>
        <input
          className="pa3"
          type="search"
          placeholder="Pretraži ovde"
          onChange={handleChange}
        />
      </div>
      {showTickets()}
    </section>
  );
}

export default Search;
