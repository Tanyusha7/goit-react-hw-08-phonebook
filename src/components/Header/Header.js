import { Div, NavHeader, Ul } from './Header.styled';
import { useSelector } from 'react-redux';
import { selectToken } from 'redux/auth/auth_selectors';
import AuthNav from 'components/AuthNav/AuthNav';
import UserMenu from 'components/UserMenu/UserMenu';

import AppBar from '@mui/material/AppBar';

import Toolbar from '@mui/material/Toolbar';

import Container from '@mui/material/Container';

const Header = () => {
  const isAuth = useSelector(selectToken);

  return (
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Ul>
            <NavHeader to="/contacts">Contacts</NavHeader>
            <Div>{isAuth ? <UserMenu /> : <AuthNav />}</Div>
          </Ul>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
