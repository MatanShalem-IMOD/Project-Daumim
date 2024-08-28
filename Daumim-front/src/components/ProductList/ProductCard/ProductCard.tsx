import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Product } from "../../../types/Product";
import { getClasses } from "./ProductCardStyle";
import { useTheme } from "@mui/material";

export const ProductCard = ({ name, catagory, description, location, picture }: Product) => {
  const theme = useTheme();
  const classes = getClasses(theme);

  return (
    <Card className={classes.card}>
      <CardMedia image={picture} title="product picture" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}, {catagory}, {location}
        </Typography>
        <Typography>{description}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}