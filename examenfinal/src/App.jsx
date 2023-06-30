import { useState, useEffect } from "react";
import "./App.css";
import { Link, Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import ThemeDataProvider from "./contexts/ThemeDataContext";
import Card from "./components/Card";
import Detail from "./components/Detail";
import Form from "./components/Form";
import Home from "./components/Home";
import { useLocation, useNavigate } from "react-router-dom";
import Favs from "./components/Favs";

function App() {
  return (
    <>
      <ThemeDataProvider>
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/dentist/:id" element={<Detail />} />
          <Route path="/contacto" element={<Form />} />
          <Route path="/destacados" element={<Favs />} />
        </Routes>
      </ThemeDataProvider>
    </>
  );
}

export default App;
