import AddRecipe from "./components/AddRecipe.jsx";
import Home from "./components/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./components/Profile.jsx";
import Contact from "./components/Contact.jsx";
import Register from "./components/Register.jsx";
import Login from "./components/Login.jsx";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Contact />
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={localStorage.getItem("token") ? <Home /> : <Login />}
          />
          <Route exact path="/addRecipe" element={<AddRecipe />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />{" "}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
