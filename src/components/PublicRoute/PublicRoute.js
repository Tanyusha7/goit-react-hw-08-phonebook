import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { selectToken } from 'redux/auth/auth_selectors';

const PublicRoute = ({ children }) => {
  const isToken = useSelector(selectToken);
  const { state } = useLocation();

  return !isToken ? children : <Navigate to={state ? state : '/'} />;
};

export default PublicRoute;
