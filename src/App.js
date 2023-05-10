import Navbar from "./components/Navbar";

import { ThemeProvider } from "@emotion/react";
import { theme } from "./theme";

import Landing from "./pages/landing";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Services from "./pages/services";
import { Blogs } from "./pages/Blogs";
import { Contact } from "./pages/Contact";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { ProfileDetails } from "./pages/ProfileDetails";
import { ProfileUser } from "./pages/ProfileUser";
import { Should } from "./pages/Should";

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
          <Route path="/Should" element={<Should />} />
         
          <Route path="/Blogs" element={<Blogs />} />
          <Route path="/Contact_Us" element={<Contact />} />
          <Route path="/Log_in" element={<Login />} />
          <Route path="/Sign_up" element={<SignUp />} />
          <Route path="/Profile_details/:id" element={<ProfileDetails />} />
          <Route path="/Profile_user" element={<ProfileUser />} />
          



        </Routes>

      <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
