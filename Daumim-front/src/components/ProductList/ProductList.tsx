import { ProductCard } from "./ProductCard/ProductCard";
import { getClasses } from "./ProductListStyle";
import { useProducts } from "../../hooks/hooks";
import { Product } from "../../types/Product";
import LoadingButton from "@mui/lab/LoadingButton";
import Alert from "@mui/material/Alert";


const ProductList = () => {
  const classes = getClasses();

  const { data: products, isLoading, error } = useProducts();

  if (isLoading) {
    return (
      <>
        <LoadingButton
          size="small"
          loadingIndicator="Loading…"
          variant="outlined"
        >
          טוענים את המוצרים, רק עוד שנייה!
        </LoadingButton>
        ;
      </>
    );
  } else if (error) {
    <>
      <Alert severity="error">אופס! לא הצלחנו לטעון את המוצרים, נסה שוב בעוד כמה דקות</Alert>
    </>;
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
