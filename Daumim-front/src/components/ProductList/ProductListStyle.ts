import { css } from "@emotion/css";

export const getClasses = () => ({
  productList: css({
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
  }),
});
