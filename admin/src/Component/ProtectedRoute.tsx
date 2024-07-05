import { Navigate } from "react-router-dom";

type props = {
  children: JSX.Element;
  isLogin: boolean;
};
function ProtectedRoute({ children, isLogin }: props) {
  if (isLogin) {
    return children;
  }
  return <Navigate to="/login" />;
}

export default ProtectedRoute;
