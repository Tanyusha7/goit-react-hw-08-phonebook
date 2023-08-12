import { useDispatch, useSelector } from 'react-redux';
import { selectAuth } from 'redux/auth/auth_selectors';
import { BtnOut, Text } from './UserMenu.styled';
import { logOut } from 'redux/auth/auth_operations';

const UserMenu = () => {
  const name = useSelector(selectAuth);
  const dispatch = useDispatch();

  return (
    <>
      <Text>{name}</Text>
      <BtnOut type="button" onClick={() => dispatch(logOut())}>
        Logout
      </BtnOut>
    </>
  );
};

export default UserMenu;
