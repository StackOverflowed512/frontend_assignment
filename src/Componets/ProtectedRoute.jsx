import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const username = localStorage.getItem("username");
  const email = localStorage.getItem("email");

  if (!username || !email) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
