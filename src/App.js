import React from 'react';
import Header from './components/Header';
import Offer from './components/Offer';
import Body from './components/Body';
import Footer from './components/Footer';
import { BrowserRouter, Route, Switch, Routes } from "react-router-dom";

import HomePage from "./components/HomePage";
import MenuPage from "./components/MenuPage";
import AboutPage from "./components/AboutPage";
import BookPage from "./components/BookPage";

function App() {
    return (
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<MenuPage />} />
          <Route path="book" element={<MenuPage />} />
        </Routes>
        <Footer />
      </div>
    );
}

export default App;