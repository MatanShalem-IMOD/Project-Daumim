import { useState } from "react";
import { useProducts, useLocations, useCategories } from "../../hooks/hooks";
import { Product } from "../../types/Product";
import {
  Typography,
  Box,
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  CircularProgress,
} from "@mui/material";
import { getClasses } from "./ProductListStyle";
import { ProductCard } from "./ProductCard/ProductCard";
import { theme } from "../../context/themeContext";
import { Category } from "../../types/Category";
import { Location } from "../../types/Location";
import { SelectChangeEvent } from "@mui/material";

const ProductList = () => {
  const classes = getClasses(theme);
  const { data: products, isLoading, error } = useProducts();
  const { data: locations } = useLocations();
  const { data: categories } = useCategories();

  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedLocation, setSelectedLocation] = useState<string>("");

  const handleSearchTextChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchText(event.target.value);
  };

  const handleCategoryChange = (event: SelectChangeEvent<string>) => {
    setSelectedCategory(event.target.value);
  };

  const handleLocationChange = (event: SelectChangeEvent<string>) => {
    setSelectedLocation(event.target.value);
  };

  const filteredProducts = products?.filter((product: Product) => {
    return (
      product.description.toLowerCase().includes(searchText.toLowerCase()) &&
      (selectedCategory ? product.category === selectedCategory : true) &&
      (selectedLocation ? product.location === selectedLocation : true)
    );
  });

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
  }

  return (
    <Box>
      <Box className={classes.searchBar}>
        <FormControl variant="outlined" className={classes.dropdown}>
          <InputLabel>קטגוריה</InputLabel>
          <Select
            value={selectedCategory}
            onChange={handleCategoryChange}
            label="קטגוריה"
          >
            <MenuItem value="">כולם</MenuItem>
            {categories?.map((category: Category) => (
              <MenuItem key={category.id} value={category.name}>
                {category.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl variant="outlined" className={classes.dropdown}>
          <InputLabel>מיקום</InputLabel>
          <Select
            value={selectedLocation}
            onChange={handleLocationChange}
            label="מיקום"
            sx={{ width: "100%" }} // Ensure the Select component takes the full width
          >
            <MenuItem value="">כולם</MenuItem>
            {locations?.map((location: Location) => (
              <MenuItem key={location.id} value={location.name}>
                {location.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField
          className={classes.searchInput}
          label="חפש בתיאור"
          variant="outlined"
          onChange={handleSearchTextChange}
          value={searchText}
        />
      </Box>
      <Box className={classes.productList}>
        {filteredProducts?.map((product: Product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </Box>
    </Box>
  );
};

export default ProductList;
