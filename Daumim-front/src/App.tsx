import { ThemeProvider } from "@mui/material";
import { theme } from "./context/themeContext";
import { ProductCard } from "./components/ProductList/ProductCard/ProductCard";
import { Product } from "./types/Product";

const App = () => {
  const product: Product = {
    id: 2,
    name: "טלפון",
    catagory: "חמשל",
    description: "גרכחעימגקלחדמכלךדכךדגל",
    location: "ראשון לציון",
    picture: "/assets/phone.jpg",
    date: "2020",
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <ProductCard {...product}></ProductCard>
      </ThemeProvider>
    </>
  );
};

export default App;
