import { AppBar, Box, Toolbar, Button } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { theme } from "../context/themeContext";

export const MainAppBar = () => {
  return (
    <AppBar sx={{ backgroundColor: theme.palette.primary.main }}>
      <Toolbar variant="dense">
        {/* Logo on the left */}
        <Box sx={{ flexGrow: 1 }}>
          <Box
            component="img"
            src="/src/assets/logo.png"
            alt="Logo"
            sx={{ height: 50 }}
          />
        </Box>

        {/* Navigation links on the right */}
        <Box>
          <Button color="inherit" component={RouterLink} to="/contact-us">
            צור קשר
          </Button>
          <Button color="inherit" component={RouterLink} to="/about-us">
            עלינו
          </Button>
          <Button color="inherit" component={RouterLink} to="/">
            דף הבית
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
