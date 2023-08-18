import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectToken } from 'redux/auth/auth_selectors';

const PublicRoute = ({ children }) => {
  const isToken = useSelector(selectToken);

  return !isToken ? children : <Navigate to={'/Contacts'} />;
};

export default PublicRoute;
