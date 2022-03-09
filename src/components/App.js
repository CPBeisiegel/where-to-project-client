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
import { EditStay } from "../pages/EditStay";
import { UserEditProfile } from "../pages/UserEditProfile";
import { PostNewComent } from "../pages/PostNewComent/index";

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
        <Route
          path="/stays/user-stay/:id"
          element={<ProtectedRoute component={StayDetails} />}
        />
        <Route path="/stays/create-stay" element={<PostNewStay />} />
        <Route path="/stays/user-stay/update/:id" element={<EditStay />} />
        <Route path="/:stayId/create-review" element={<PostNewComent />} />
        <Route path="/users/profile/update/:id" element={<UserEditProfile />} />
        <Route path="/:stayId/create-review" element={<PostNewComent />} />
        <Route path="/reviews/:id/create-review" element={<PostNewComent />} />
        <Route path="/reviews/:id/create-review" element={<PostNewComent />} />
      </Routes>
    </AuthContextComponent>
  );
}

export default App;
