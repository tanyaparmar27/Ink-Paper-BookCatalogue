import { ThemeProvider } from "@emotion/react";
import "./App.css";
import Routers from "./routers/Routers";
import { darkTheme } from "./theme/DarkTheme";
import { CssBaseline } from "@mui/material";
import { GenreProvider } from "./customers/context/genreContext";
function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <GenreProvider>
        <CssBaseline />
        <Routers />
      </GenreProvider>
    </ThemeProvider>
  );
}

export default App;
