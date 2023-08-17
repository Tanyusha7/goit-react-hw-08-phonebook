import { NavHeader } from 'components/Header/Header.styled';

const AuthNav = () => {
  return (
    <>
      <NavHeader to="/">Register</NavHeader>
      <NavHeader to="/login">Login</NavHeader>
    </>
  );
};

export default AuthNav;
