import React, { useState, useEffect } from "react";
import axios from "axios";
import "./cart.css";
import Tickets from "./tickets";

const Search = () => {
  const [searchField, setSearchField] = useState("");
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = () => {
    axios
      .get("/api/courses")
      .then((response) => {
        setCourses(response.data);
      })
      .catch((error) => {
        console.error("Greška prilikom dohvatanja kurseva:", error);
      });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    axios
      .get(`/api/courses/search?search=${searchField}`)
      .then((response) => {
        setCourses(response.data);
      })
      .catch((error) => {
        console.error("Greška prilikom pretrage kurseva:", error);
      });
  };

  const handleChange = (e) => {
    setSearchField(e.target.value);
  };

  return (
    <section className="search-container">
      <h1>Pronađi svoj kurs</h1>
      <form onSubmit={handleSearch}>
        <div className="search-input-container">
          <input
            className="search-input"
            type="search"
            placeholder="Pretraži ovde"
            value={searchField}
            onChange={handleChange}
          />
          <button type="submit" className="search-button">
            Pretraži
          </button>
        </div>
      </form>
      <Tickets tickets={courses} />
    </section>
  );
};

export default Search;
