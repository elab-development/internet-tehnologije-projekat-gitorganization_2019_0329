import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./home";
import Tickets from "./tickets";
import { useState } from "react";
import NavBar from "./navBar";

import Card from "./cards";
import Search from './Search'

import Cart from "./cart";
import Images from "./imagesPacked";
import OneCard from "./OneCard";


function App() {
  const home = {
    title: 'POVEŽI SE SA CELIM SVETOM',
    desc:
      'Izaberi kurs i nauči jezik koji želiš',
  }
  const addToCart = (id) => {
    tickets.map((ticket) => {
      if (ticket.id === id) {
        ticket.amount = ticket.amount + 1
        const cN = cartNum + 1
        setCartNum(cN)
        refreshCart()
        console.log('ticket.id=', ticket.id, 'amount=', ticket.amount)
      }
    })
  }
  const removeFromCart = (id) => {
    tickets.map((ticket) => {
      if (ticket.id === id) {
        if (ticket.amount > 0) {
          ticket.amount = ticket.amount - 1
          const cN = cartNum - 1
          setCartNum(cN)
          refreshCart()
          console.log('ticket.id=', ticket.id, 'amount=', ticket.amount)
        } else {
          alert('Kolicina karata je vec na nuli.')
        }
      }
    })
  }
  const [tickets, setTickets] = useState([
    {
      id: 1,
      title: 'POČETNI NIVO-A1',
   
  img:Images.pocetni,
      
      price: 13600,
      amount: 0,
    },
    {
      id: 2,
      
      title: 'SREDNJI NIVO-B1',
      img:Images.srednji,
     
      price: 35000,
      amount: 0,
    },
    {
      id: 3,
      
      title: 'NAPREDNI NIVO-C1',
      img:Images.naprredni,
      
      price: 54000,
      amount: 0,
    },
 ])
  
  const [cartNum, setCartNum] = useState(0)
  const [cartProducts, setCartProducts] = useState([])
  const [isPlaying, setIsPlaying] = useState(true)
  const refreshCart = () => {
    const newTickets = tickets.filter((ticket) => ticket.amount > 0)
    setCartProducts(newTickets)
  }

  return (
    <BrowserRouter>
    <NavBar/>
    <Routes>
     <Route path="/" element={<Home home={home} />} />
     <Route
  path="/tickets"
  element={
    <Tickets
      tickets={tickets}
      onAdd={addToCart}
      onRemove={removeFromCart}
      cartNum={cartNum}
    />
  }
/>
<Route
  path="/cart"
  element={
    <Cart
      cartProducts={cartProducts}
      onAdd={addToCart}
      onRemove={removeFromCart}
    />
  }

/>
<Route path="/cards" element={<Card />} />
<Route path="/Search" element={<Search details={tickets} />} />
      </Routes>
     </BrowserRouter>
   
  );
}

export default App;
