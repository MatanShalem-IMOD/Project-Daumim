import { Theme } from "@mui/material";
import { css } from "@emotion/css";

export const getClasses = (theme: Theme) => ({
  searchBar: css({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: theme.spacing(2),
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    marginBottom: theme.spacing(2),
  }),
  searchInput: css({
    flex: 1,
    maxWidth: 700,
    marginRight: theme.spacing(2),
  }),
  dropdown: css({
    marginLeft: theme.spacing(2),
    minWidth: 200, // Set a smaller minWidth
    width: "30%", // Adjust the width to your preference
    maxWidth: 450, // Optional: Set a maximum width
  }),
  productList: css({
    display: "flex",
    flexWrap: "wrap",
    gap: theme.spacing(2),
  }),
  center: css({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  }),
});
