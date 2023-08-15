import React from 'react';

import { Nav, NavHeader, Ul } from './Header.styled';
import { useSelector } from 'react-redux';
import { selectToken } from 'redux/auth/auth_selectors';
import AuthNav from 'components/AuthNav/AuthNav';
import UserMenu from 'components/UserMenu/UserMenu';

const Header = () => {
  const isAuth = useSelector(selectToken);

  return (
    <Nav>
      <Ul>
        {isAuth ? <UserMenu /> : <AuthNav />}
        <NavHeader to="/contacts">Contacts</NavHeader>
      </Ul>
    </Nav>
  );
};

export default Header;
