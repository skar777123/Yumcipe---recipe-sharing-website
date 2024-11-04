import AddRecipe from "./components/AddRecipe.jsx";
import Home from "./components/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./components/Profile.jsx";
import Contact from "./components/Contact.jsx";
import Creds from "./components/Creds.jsx";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Contact/>
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={localStorage.getItem("token") ? <Home /> : <Creds />}
          />
          <Route exact path="/addRecipe" element={<AddRecipe />} />
          <Route exact path="/profile" element={<Profile />} />
          {/* <Route exact path="/contact" element={<Contact />} /> */}
          <Route exact path="/creds" element={<Creds />} />{" "}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
