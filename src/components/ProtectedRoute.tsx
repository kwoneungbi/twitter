import { Navigate } from "react-router-dom";
import { auth } from "../firebase";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const user = auth.currentUser;
  return user ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
