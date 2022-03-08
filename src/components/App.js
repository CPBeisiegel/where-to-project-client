import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "../pages/Home";
import Signup from "../pages/auth/Signup";
import Login from "../pages/auth/Login";
import ProtectedRoute from "../pages/auth/ProtectedRoute";
import UserHome from "../pages/UserHome";
import { Stays } from "../pages/Stays";
import { StayDetails } from "../pages/StayDetails/index";
import { NavbarExterna } from "./Navbar";
import { PostNewStay } from "../pages/PostNewStay";
<<<<<<< HEAD
import { EditStay } from "../pages/EditStay";
=======
import { PostNewComent } from "../pages/PostNewComent";
>>>>>>> eaa73994cff963ee58d8262818b831757074ec86

import { AuthContextComponent } from "../contexts/authContext";

function App() {
  return (
    <AuthContextComponent>
      <NavbarExterna />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/user-home"
          element={<ProtectedRoute component={UserHome} />}
        />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/stays" element={<Stays />} />
        <Route path="/stays/user-stay/:id" element={<StayDetails />} />
        <Route path="/stays/create-stay" element={<PostNewStay />} />
<<<<<<< HEAD
        <Route path="/stays/user-stay/update/:id" element={<EditStay />} />
=======
        <Route path="/:stayId/create-review" element={<PostNewComent />} />
>>>>>>> eaa73994cff963ee58d8262818b831757074ec86
      </Routes>
    </AuthContextComponent>
  );
}

export default App;
