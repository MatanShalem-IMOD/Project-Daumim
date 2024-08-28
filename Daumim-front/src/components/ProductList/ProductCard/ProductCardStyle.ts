import { Theme } from "@mui/material";
import { css } from "@emotion/css";

export const getClasses = (theme: Theme) => ({
  card: css({
    alignItems: "center",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    marginBottom: "10px",
    direction: "rtl",
    maxWidth: "345",
    cursor: "pointer",
    justifyContent: "center",
    ":hover": {
      backgroundColor: "gray",
    },
    flex: "0 0 24%",
    margin: theme.spacing(1),
  }),
  image: css({
    maxHeight: "140px",
    maxWidth: "300px",
  }),
  details: css({
    flex: "0 0 70%",
    paddingLeft: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-end",
  }),
  cardTitle: css({
    fontWeight: "bold",
    fontSize: "12px",
    color: theme.palette.primary.dark,
  }),
});
