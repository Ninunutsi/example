import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";

const ProtectedRoute = ({ element }) => {
  const { auth } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // If the user is not authenticated, redirect them to the login page
    if (!auth) {
      navigate("/");
    }
  }, [auth, navigate]);

  // Return null or loading state while checking authentication
  return auth ? element : null;
};

export default ProtectedRoute;
