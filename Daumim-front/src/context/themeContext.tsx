import { createTheme } from "@mui/material";

export const theme = createTheme({
  typography: {
    fontFamily: "Heebo, sans-serif !important",
  },
  palette: {
    primary: {
      main: "#E1CDB5",
      dark: "#004346",
    },
    secondary: {
      main: "#EAF8BF",
    },
    error: {
      main: "#d32f2f",
    },
    success: {
      main: "#2e7d32",
    },
  },
});