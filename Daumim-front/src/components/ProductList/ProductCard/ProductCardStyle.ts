import { Theme } from "@mui/material";
import { css } from "@emotion/css";

export const getClasses = (theme: Theme) => ({
  card: css({
    display: "flex",
    flexDirection: "row-reverse",
    alignItems: "center",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    marginBottom: "10px",
    direction: "rtl",
    width: "90%",
    cursor: "pointer",
    justifyContent: "center",
    ":hover": {
      backgroundColor: "gray",
    },
  }),
  leftSide: css({
    flex: "0 0 70%",
    textAlign: "center",
    marginRight: "12px",
    height: "100%",
    display: "flex",
  }),
  rightSide: css({
    flex: "0 0 30%",
    paddingLeft: "10px",
  }),
  icon: css({
    flex: "0 0 30%",
    textAlign: "center",
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
  }),
  subtitle: css({
    color: theme.palette.primary.main,
    fontSize: "12px",
  }),
});
