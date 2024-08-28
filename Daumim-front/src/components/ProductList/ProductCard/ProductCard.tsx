import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
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
  const imageUrl = `data:image/png;base64,${picture}`;

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.image}
        component="img"
        src={imageUrl}
        title={name}
      />
      <CardContent>
        <Typography
          className={classes.cardTitle}
          gutterBottom
          variant="h5"
          component="div"
        >
          {name}
        </Typography>
        <div className={classes.chipContainer}>
          <Chip label={category} className={classes.chip} />
          <Chip label={location} className={classes.chip} />
        </div>
        <Typography className={classes.details}>{description}</Typography>
      </CardContent>
    </Card>
  );
};
