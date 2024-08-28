import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Product } from "../../../types/Product";
import { getClasses } from "./ProductCardStyle";
import { useTheme } from "@mui/material";

export const ProductCard = ({
  name,
  category,
  description,
  location,
  picture,
}: Product) => {
  const theme = useTheme();
  const classes = getClasses(theme);

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.image}
        component="img"
        image={picture}
        title="product picture"
      />
      <CardContent>
        <Typography
          className={classes.cardTitle}
          gutterBottom
          variant="h5"
          component="div"
        >
          {name}, {category}, {location}
        </Typography>
        <Typography className={classes.details}>{description}</Typography>
      </CardContent>
    </Card>
  );
};
