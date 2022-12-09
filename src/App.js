import { ToastContainer } from "react-toastify";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import UserDashboard from "./pages/UserDashboard";
import SignUpUser from "./pages/UserSignUp";
import LogInUser from "./pages/UserLogIn";
import DoctorDashboard from "./pages/DoctorDashboard";
import SignUpDoctor from "./pages/DoctorSignUp";
import LogInDoctor from "./pages/DoctorLogIn";
import FindDoctor from "./pages/FindDoctor";
import PageNotFound from "./pages/PageNotFound";
import DoctorDetail from "./pages/DoctorDetail";
import UserEditProfile from "./pages/UserEditProfile";
import DoctorEditProfile from "./pages/DoctorEditProfile";

const PrivateRoute = ({ auth: { isAuthenticated }, children }) => {
  return isAuthenticated ? children : <Navigate to="/login-doctor" />;
};

const PrivateRouteD = ({ auth: { isAuthenticated }, children }) => {
  return isAuthenticated ? children : <Navigate to="/login-doctor" />;
};

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup-user" element={<SignUpUser />} />
          <Route path="/login-user" element={<LogInUser />} />
          <Route path="/signup-doctor" element={<SignUpDoctor />} />
          <Route path="/login-doctor" element={<LogInDoctor />} />
          <Route path="/find-doctor" element={<FindDoctor />} />
          <Route path="/doctor-dashboard" element={<DoctorDashboard />} />
          <Route path="/user-dashboard" element={<UserDashboard />} />
          <Route path="/doctor/:id" element={<DoctorDetail />} />
          <Route path="/user-edit-profile" element={<UserEditProfile />} />
          <Route path="/edit-profile" element={<DoctorEditProfile />} />
          {/* <Route
            path="/doctor-dashboard"
            element={
              <PrivateRouteD auth={{ isAuthenticated: false }}>
                <DoctorDashboard />
              </PrivateRouteD>
            }
          />
          <Route
            path="/user-dashboard"
            element={
              <PrivateRoute auth={{ isAuthenticated: false }}>
                <UserDashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/doctor/:id"
            element={
              <PrivateRoute auth={{ isAuthenticated: false }}>
                <DoctorDetail />
              </PrivateRoute>
            }
          /> */}
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </Router>
      <ToastContainer />
    </>
  );
}
export default App;
