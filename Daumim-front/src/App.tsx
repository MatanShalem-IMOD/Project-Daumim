import { ThemeProvider } from "@mui/material";
import { theme } from "./context/themeContext";
import ProductList from "./components/ProductList/ProductList";

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <ProductList/>
      </ThemeProvider>
    </>
  );
};

export default App;
