import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menubar from "./Components/User/Menubar";
import HomePage from "./Components/User/HomePage";
import PostReview from "./Components/User/PostReview";
import UseProfile from "./Components/User/UseProfile";
import "./Components/User/User.css";
import UserLogin from "./Components/Auth/UserLogin";
import UserSignup from "./Components/Auth/UserSignup";
import AdminLogin from "./Components/Auth/AdminLogin";
import "./Components/Auth/Auth.css";
import AdminPanel from "./Components/Admin/AdminPanel";
import UserManagement from "./Components/Admin/UserManagement";
import PostsManagement from "./Components/Admin/PostsManagement";
import "./Components/Admin/Admin.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* Paths Related to Home of User */}
          <Route exact path="/" element={<Menubar />}>
            <Route path="" element={<HomePage />} />
            <Route path="postreview" element={<PostReview />} />
            <Route path="profile" element={<UseProfile />} />
          </Route>

          {/* Authentication Paths */}
          <Route path="/user/login" element={<UserLogin />} />
          <Route path="/user/signup" element={<UserSignup />} />
          <Route path="/admin/login" element={<AdminLogin />} />

          {/* AdminPanel Paths */}
          <Route path="/adminpanel" element={<AdminPanel />}>
            <Route path="user-management" element={<UserManagement />} />
            <Route path="post-management" element={<PostsManagement />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
