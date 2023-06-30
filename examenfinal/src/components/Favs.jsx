import React from 'react'
import { useState, useEffect } from "react";
import Card from './Card';
import { useContext } from "react";
import { ThemeDataContext } from "../contexts/ThemeDataContext";

function Favs() {
    const { data, favorites, addFavorite, removeFavorite } = useContext(ThemeDataContext);
  
    if (!data) {
      return <div>Cargando...</div>;
    }
  
    if (favorites.length === 0) {
      return <div className='title'>No hay dentistas favoritos</div>;
    }
  
    const filteredData = data.filter((card) => favorites.includes(card.id));
  
    return (
      <div className='home'>
        {filteredData.map((card) => (
          <Card key={card.id} data={card} />
        ))}
      </div>
    );
  }
  
  export default Favs;