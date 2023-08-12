import { Container } from 'components/Container/Container.styled';
import { Form, Input, Label, Button } from 'components/Form/Form.styled';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signUp } from 'redux/auth/auth_operations';

export const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

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
      <Form onSubmit={handleSubmit}>
        <Label>
          Name
          <Input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            autoComplete="off"
          />
        </Label>
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
        <Button type="submit">Register</Button>
      </Form>
    </Container>
  );
};

export default RegisterForm;
