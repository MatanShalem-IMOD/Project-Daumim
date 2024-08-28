import { ProductCard } from "./ProductCard/ProductCard";
import { getClasses } from "./ProductListStyle";
import { useProducts } from "../../hooks/hooks";
import { Product } from "../../types/Product";
import { Typography, Box } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

const ProductList = () => {
  const classes = getClasses();
  const { data: products, isLoading, error } = useProducts();

  if (isLoading) {
    return (
      <div className={classes.center}>
        <CircularProgress />
      </div>
    );
  }

  if (error) {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          textAlign: "center",
          backgroundColor: "#f5f5f5",
          padding: 2,
        }}
      >
        <Typography variant="h3" gutterBottom>
          אופס סליחה
        </Typography>
        <Typography variant="h5" gutterBottom>
          ...משהו לא עבד
        </Typography>
        <Typography variant="body1">!נסה שוב בעוד כמה דקות</Typography>
      </Box>
    );
  } else {
    return (
      <div className={classes.productList}>
        {products.map((product: Product) => (
          <ProductCard {...product} />
        ))}
      </div>
    );
  }
};

export default ProductList;
