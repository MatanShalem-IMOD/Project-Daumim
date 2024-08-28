import { ProductCard } from "./ProductCard/ProductCard";
import { getClasses } from "./ProductListStyle";
import { useProducts } from "../../hooks/hooks";
import { Product } from "../../types/Product";
import Alert from "@mui/material/Alert";
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
      <div className={classes.center}>
        <Alert severity="error">
          אופס! לא הצלחנו לטעון את המוצרים, נסה שוב בעוד כמה דקות
        </Alert>
      </div>
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
