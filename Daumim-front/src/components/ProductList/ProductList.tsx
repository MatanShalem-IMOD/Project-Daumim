import { ProductCard } from "./ProductCard/ProductCard";
import { getClasses } from "./ProductListStyle";
import { useProducts } from "../../hooks/hooks";
import { Product } from "../../types/Product";

const ProductList = () => {
  const classes = getClasses();

  const { data: products, isLoading, error } = useProducts();

  

  return (
    <div className={classes.productList}>
      {products.map((product: Product) => (
        <ProductCard {...product} />
      ))}
    </div>
  );
};

export default ProductList;
