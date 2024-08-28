import { useTheme } from "@mui/material";
import { ProductCard } from "./ProductCard/ProductCard";
import { getClasses } from "./ProductListStyle";

const ProductList = () => {
  const theme = useTheme();
  const classes = getClasses(theme);

  const products = [
    {
      id: 2,
      name: "טלפון",
      catagory: "חמשל",
      description: "גרכחעימגקלחדמכלךדכךדגל",
      location: "ראשון לציון",
      picture: "/assets/phone.jpg",
      date: "2020",
    },
    {
      id: 2,
      name: "טלפון",
      catagory: "חמשל",
      description: "גרכחעימגקלחדמכלךדכךדגל",
      location: "ראשון לציון",
      picture: "/assets/phone.jpg",
      date: "2020",
    },
    {
      id: 2,
      name: "טלפון",
      catagory: "חמשל",
      description: "גרכחעימגקלחדמכלךדכךדגל",
      location: "ראשון לציון",
      picture: "/assets/phone.jpg",
      date: "2020",
    },
    {
      id: 2,
      name: "טלפון",
      catagory: "חמשל",
      description: "גרכחעימגקלחדמכלךדכךדגל",
      location: "ראשון לציון",
      picture: "/assets/phone.jpg",
      date: "2020",
    },
    {
      id: 2,
      name: "טלפון",
      catagory: "חמשל",
      description: "גרכחעימגקלחדמכלךדכךדגל",
      location: "ראשון לציון",
      picture: "/assets/phone.jpg",
      date: "2020",
    },
    {
      id: 2,
      name: "טלפון",
      catagory: "חמשל",
      description: "גרכחעימגקלחדמכלךדכךדגל",
      location: "ראשון לציון",
      picture: "/assets/phone.jpg",
      date: "2020",
    },
    {
      id: 2,
      name: "טלפון",
      catagory: "חמשל",
      description: "המוצר ממש שווה תקחו אותי",
      location: "ראשון לציון",
      picture: "/assets/phone.jpg",
      date: "2020",
    },
    {
      id: 2,
      name: "טלפון",
      catagory: "חמשל",
      description: "גרכחעימגקלחדמכלךדכךדגל",
      location: "ראשון לציון",
      picture: "/assets/phone.jpg",
      date: "2020",
    },
    {
      id: 2,
      name: "טלפון",
      catagory: "חמשל",
      description: "גרכחעימגקלחדמכלךדכךדגל",
      location: "ראשון לציון",
      picture: "/assets/phone.jpg",
      date: "2020",
    },
  ];

  return (
    <div className={classes.productList}>
      {products.map((product) => (
        <ProductCard {...product} />
      ))}
    </div>
  );
};

export default ProductList;
