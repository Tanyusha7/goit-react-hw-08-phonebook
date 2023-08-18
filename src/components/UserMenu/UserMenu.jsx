import { useDispatch, useSelector } from 'react-redux';
import { selectAuth } from 'redux/auth/auth_selectors';
import { Contacts } from './UserMenu.styled';
import { logOut } from 'redux/auth/auth_operations';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import { NavHeader } from 'components/Header/Header.styled';

const UserMenu = () => {
  const [auth, setAuth] = useState(true);
  const name = useSelector(selectAuth);
  const dispatch = useDispatch();

  const handleChange = event => {
    setAuth(event.target.checked);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        width: '600px',
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <Contacts>
        <NavHeader to="/contacts">Contact</NavHeader>
      </Contacts>
      <Toolbar sx={{ justifyContent: 'flex-end', gap: '15px' }}>
        {auth && (
          <>
            <Typography
              variant="h6"
              component="div"
              sx={{
                marginRight: '10px',
              }}
            >
              {name}
            </Typography>

            <AccountCircleIcon />
            <FormGroup>
              <FormControlLabel
                control={
                  <Switch
                    type="button"
                    onClick={() => dispatch(logOut())}
                    checked={auth}
                    onChange={handleChange}
                    aria-label="login switch"
                    color="secondary"
                  />
                }
                label={auth ? 'Logout' : 'Login'}
              />
            </FormGroup>
          </>
        )}
      </Toolbar>
    </Box>
  );
};

export default UserMenu;
