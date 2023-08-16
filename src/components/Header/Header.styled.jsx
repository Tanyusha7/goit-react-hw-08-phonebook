import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  width: auto;
  padding-left: 40px;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 1;
  background-color: white;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const NavHeader = styled(NavLink)`
  color: #e2e2ef;
  &.active {
    color: #bef9fb;
  }
`;

export const Ul = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 20px;
  width: 100%;
  font-size: 24px;
  font-weight: 600;

  align-items: center;
`;
export const Div = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 15px;
  width: 200px;
`;
