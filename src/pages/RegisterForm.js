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
import { signUp } from 'redux/auth/auth_operations';
import { selectAuthError, selectAuthLoading } from 'redux/auth/auth_selectors';

export const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const error = useSelector(selectAuthError);
  const isLoading = useSelector(selectAuthLoading);

  const [state, setState] = useState({
    open: false,
    vertical: 'top',
    horizontal: 'left',
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
      case 'name':
        return setName(value);
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

    dispatch(signUp({ name, email, password }));

    setName('');
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
          message={error}
          key={vertical + horizontal}
        >
          <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
            {error}!
          </Alert>
        </Snackbar>
      ) : (
        <Snackbar
          anchorOrigin={{ vertical, horizontal }}
          open={open}
          onClose={handleClose}
          message={error}
          key={vertical + horizontal}
        >
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: '100%' }}
          >
            Success{name}! You have created an account.
          </Alert>
        </Snackbar>
      )}
      <Form onSubmit={handleSubmit}>
        <Label>
          Name
          <TextField
            sx={{
              background: '#fff9f9',
            }}
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            autoComplete="off"
            id="outlined-textarea"
            label="name"
            multiline
          />
        </Label>
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
          Register
        </Button>
      </Form>
    </Container>
  );
};

export default RegisterForm;
