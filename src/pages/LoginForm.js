import { Container } from 'components/Container/Container.styled';
import { Button, Form, Input, Label } from 'components/Form/Form.styled';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getCurrentUser, logIn } from 'redux/auth/auth_operations';
// import { selectAuth } from 'redux/auth/auth_selectors';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  // const isAuth = useSelector(selectAuth);
  const navigate = useNavigate();

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
      .catch(error => alert(error));

    setEmail('');
    setPassword('');
  };
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Label>
          Email
          <Input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            autoComplete="off"
          />
        </Label>
        <Label>
          Password
          <Input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            autoComplete="off"
          />
        </Label>
        <Button type="submit">Log in</Button>
      </Form>
    </Container>
  );
};

export default LoginForm;
