import { createTheme } from "@mui/material";

export const theme = createTheme({
  typography: {
    fontFamily: "Heebo, sans-serif !important",
  },
  palette: {
    primary: {
      main: "#EAF8BF",
    },
    secondary: {
      main: "#5296A5",
    },
    error: {
      main: "#d32f2f",
    },
    success: {
      main: "#2e7d32",
    },
  },
});
