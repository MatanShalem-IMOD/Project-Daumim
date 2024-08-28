import { css } from "@emotion/css";

export const getClasses = () => ({
  productList: css({
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
  }),
  center: css({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  }),
});
