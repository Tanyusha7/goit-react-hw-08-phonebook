import {
  Alert,
  Button,
  LinearProgress,
  Snackbar,
  TextField,
} from '@mui/material';
import { Container } from 'components/Container/Container.styled';
import { Form, Label } from 'components/Form/Form.styled';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getCurrentUser, logIn } from 'redux/auth/auth_operations';
import { selectAuthError, selectAuthLoading } from 'redux/auth/auth_selectors';
// import { selectAuth } from 'redux/auth/auth_selectors';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  // const isAuth = useSelector(selectAuth);
  const navigate = useNavigate();
  const error = useSelector(selectAuthError);
  const isLoading = useSelector(selectAuthLoading);

  const [state, setState] = useState({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });
  const { vertical, horizontal, open } = state;

  const handleClick = newState => () => {
    setState({ ...newState, open: true });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);

      case 'password':
        return setPassword(value);

      default:
        break;
    }
  };
  const handleSubmit = e => {
    e.preventDefault();

    dispatch(logIn({ email, password }))
      .unwrap()
      .then(() => {
        dispatch(getCurrentUser());
        navigate('/contacts');
      })
      .catch(error);

    setEmail('');
    setPassword('');
  };
  return (
    <Container>
      {isLoading && <LinearProgress color="primary" />}
      {error ? (
        <Snackbar
          anchorOrigin={{ vertical, horizontal }}
          open={open}
          onClose={handleClose}
          // message={error}
          key={vertical + horizontal}
        >
          <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
            {error}. Try again!
          </Alert>
        </Snackbar>
      ) : (
        <Snackbar
          anchorOrigin={{ vertical, horizontal }}
          open={open}
          onClose={handleClose}
          key={vertical + horizontal}
        >
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: '100%' }}
          >
            Welcome!
          </Alert>
        </Snackbar>
      )}
      <Form onSubmit={handleSubmit}>
        <Label>
          Email
          <TextField
            sx={{
              background: '#fff9f9',
            }}
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            autoComplete="off"
            id="outlined-textarea"
            label="rty@email.com"
            multiline
          />
        </Label>
        <Label>
          Password
          <TextField
            sx={{
              background: '#fff9f9',
            }}
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            autoComplete="off"
            id="outlined-textarea"
            label="********"
          />
        </Label>
        <Button
          sx={{
            width: '200px',
            padding: '10px',
          }}
          type="submit"
          variant="contained"
          onClick={handleClick({ vertical: 'top', horizontal: 'right' })}
        >
          Log in
        </Button>
      </Form>
    </Container>
  );
};

export default LoginForm;
