import { ThemeProvider } from "@mui/material";
import { theme } from "./context/themeContext";

const App = () => {

  return (
    <>
      <ThemeProvider theme={theme}>

      </ThemeProvider>
      
    </>
  )
}

export default App;
