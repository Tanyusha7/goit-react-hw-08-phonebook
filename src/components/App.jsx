import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import RegisterForm from '../pages/RegisterForm';
import LoginForm from '../pages/LoginForm';
import Contacts from 'pages/contacts';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<RegisterForm />} />
        <Route path="login" element={<LoginForm />} />
        <Route path="/contacts" element={<Contacts />} />
      </Route>
    </Routes>
  );
};

export default App;
