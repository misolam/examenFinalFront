import "./module.css";
import { Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { ThemeDataContext } from "../contexts/ThemeDataContext";

function Card({ data }) {
  const [isLiked, setIsLiked] = useState(false);
  const { addFavorite, removeFavorite, favorites } =
    useContext(ThemeDataContext);

  useEffect(() => {
    setIsLiked(favorites.includes(data.id));
  }, [data.id, favorites]);


  useEffect(() => {
    setIsLiked(favorites.includes(data.id));
  }, [data.id, favorites]);

  const handleToggleFav = () => {
    setIsLiked((prevIsLiked) => {
      const newIsLiked = !prevIsLiked;

      if (newIsLiked) {
        addFavorite(data.id);
      } else {
        removeFavorite(data.id);
      }

      return newIsLiked;
    });
  };

  return (
    <div key={data.id} className="card">
      <Link to={`/dentist/${data.id}`} className="link">
        <img src='/images/doctor.jpg' className="doctor-img" alt="doctor"/>
        <p>{data.name}</p>
        <p>{data.username}</p>
        <p>{data.email}</p>
      </Link>
      <button onClick={handleToggleFav}>
        <i className={isLiked ? "like heart" : "dislike heart"}>♥</i>
      </button>
    </div>
  );
}

export default Card;
