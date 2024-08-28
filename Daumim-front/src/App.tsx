import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import { theme } from "./context/themeContext";
import { MainPage } from "./view/MainPage";
import { ContactUs } from "./view/ContactUs";
import { AboutUs } from "./view/AboutUs";
import { MainAppBar } from "./components/MainAppBar";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <MainAppBar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
