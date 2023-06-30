import "./module.css";
import { useContext } from "react";
import { ThemeDataContext } from "../contexts/ThemeDataContext";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";
import Card from "./Card";

function Home() {
  const { data } = useContext(ThemeDataContext);

  return (
    <div className="home">
      {data ? (
        data.map((item) => <Card key={item.id} data={item} />)
      ) : (
        <div>Cargando datos...</div>
      )}
    </div>
  );
}

export default Home;
