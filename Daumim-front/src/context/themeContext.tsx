import { createTheme } from "@mui/material";

export const theme = createTheme({
  typography: {
    fontFamily: "Heebo, sans-serif !important",
  },
  palette: {
    primary: {
      main: "#EAF8BF",
      dark: "#004346",
    },
    secondary: {
      main: "#E1CDB5",
    },
    error: {
      main: "#d32f2f",
    },
    success: {
      main: "#2e7d32",
    },
  },
});