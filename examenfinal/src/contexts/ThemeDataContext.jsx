import { useState, useEffect, createContext } from "react";
export const ThemeDataContext = createContext();

function ThemeDataProvider({ children }) {
  const [theme, setTheme] = useState("light");
  const [data, setData] = useState(null);
  const [favorites, setFavorites] = useState([]);

  function toggleTheme() {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();
        setData(data);

        // Verificar si hay favoritos guardados en el localStorage
        const storedFavorites = window.localStorage.getItem("favorites");
        if (storedFavorites) {
          setFavorites(JSON.parse(storedFavorites));
        }
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const addFavorite = (cardId) => {
    setFavorites((prevFavorites) => {
      if (!prevFavorites.includes(cardId)) {
        const updatedFavorites = [...prevFavorites, cardId];
        window.localStorage.setItem(
          "favorites",
          JSON.stringify(updatedFavorites)
        );
        return updatedFavorites;
      }
      return prevFavorites;
    });
  };

  const removeFavorite = (cardId) => {
    setFavorites((prevFavorites) => {
      const updatedFavorites = prevFavorites.filter((id) => id !== cardId);
      window.localStorage.setItem(
        "favorites",
        JSON.stringify(updatedFavorites)
      );
      return updatedFavorites;
    });
  };

  const contextValue = {
    data,
    favorites,
    addFavorite,
    removeFavorite,
    toggleTheme,
  };

  return (
    <ThemeDataContext.Provider value={contextValue}>
      {children}
    </ThemeDataContext.Provider>
  );
}

export default ThemeDataProvider;
