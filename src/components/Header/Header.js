import React from 'react';

import { Nav, NavHeader, Ul } from './Header.styled';
import { useSelector } from 'react-redux';
import { selectLoggedIn } from 'redux/auth/auth_selectors';
import AuthNav from 'components/AuthNav/AuthNav';
import UserMenu from 'components/UserMenu/UserMenu';

const Header = () => {
  const isLoggedIn = useSelector(selectLoggedIn);
  return (
    <Nav>
      <Ul>
        {isLoggedIn ? <UserMenu /> : <AuthNav />}

        <NavHeader to="/contacts">Contacts</NavHeader>
      </Ul>
    </Nav>
  );
};

export default Header;
