import { AuthDiv, NavHeader } from 'components/Header/Header.styled';

const AuthNav = () => {
  return (
    <>
      <NavHeader to="/">Home</NavHeader>
      <AuthDiv>
        <NavHeader to="/">Register</NavHeader>
        <NavHeader to="/login">Login</NavHeader>
      </AuthDiv>
    </>
  );
};

export default AuthNav;
