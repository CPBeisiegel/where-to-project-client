import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "../pages/Home";
import Signup from "../pages/auth/Signup";
import Login from "../pages/auth/Login";
import ProtectedRoute from "../pages/auth/ProtectedRoute";
import Stays from "../pages/Stays";
import NavbarExterna from "./Navbar";

import { AuthContextComponent } from "../contexts/authContext";

function App() {
  return (
    <AuthContextComponent>
      <NavbarExterna />
      <Routes>
        <Route path="/" element={<ProtectedRoute component={Home} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/stays" element={<Stays />} />
      </Routes>
    </AuthContextComponent>
  );
}

export default App;
