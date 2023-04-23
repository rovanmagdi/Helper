import Navbar from "./components/Navbar";

import { ThemeProvider } from "@emotion/react";
import { theme } from "./theme";

import Landing from "./pages/landing";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Services from "./pages/services";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
      <Navbar />

        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/Home" element={<Landing />} />
          <Route path="/About_US" element={<About />} />
          <Route path="/Services" element={<Services />} />

        </Routes>

      <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
