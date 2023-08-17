import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { selectToken } from 'redux/auth/auth_selectors';

const PrivateRoute = ({ children }) => {
  const isToken = useSelector(selectToken);
  const location = useLocation();

  return isToken ? children : <Navigate to={'/login'} state={location} />;
};

export default PrivateRoute;
