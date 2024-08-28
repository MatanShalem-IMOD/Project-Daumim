import './App.css'
import {MainPage} from "./view/MainPage.tsx";

import { ThemeProvider } from "@mui/material";
import { theme } from "./context/themeContext";

const App = () => {

  return (
    <>
      <ThemeProvider theme={theme}>
          <MainPage/>
      </ThemeProvider>
    </>
  )
}

export default App;
