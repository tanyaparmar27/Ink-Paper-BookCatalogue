/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

// Create a context to hold the genre data
const GenreContext = createContext();

// Provider component to wrap around the parent component
export const GenreProvider = ({ children }) => {
  const [selectedGenre, setSelectedGenre] = useState(null);

  return (
    <GenreContext.Provider value={{ selectedGenre, setSelectedGenre }}>
      {children}
    </GenreContext.Provider>
  );
};

export const useGenre = () => useContext(GenreContext);