import React from 'react';
import { toast } from 'react-toastify';
import { isEmail } from 'validator';
import { get } from 'lodash';
import { useDispatch, useSelector } from 'react-redux';

import { Container } from '../../styles/Global';
import { Form } from './styled';
import * as actions from '../../store/modules/auth/actions';

import Loading from '../../components/Loading';

export default function Login(props) {
  const dispatch = useDispatch();

  const prevPath = get(props, 'location.state.prevPath', '/');

  const isLoading = useSelector((state) => state.auth.isLoading);

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  async function handleSubmit(e) {
    e.preventDefault();

    const formErrors = [];

    if (!isEmail(email)) formErrors.push('Invalid email');
    if (password.length < 6 || password.length > 50)
      formErrors.push('Invalid password');

    if (formErrors.length) {
      formErrors.forEach((error) => toast.warning(error));
      return false;
    }

    dispatch(actions.loginRequest({ email, password, prevPath }));

    return true;
  }

  return (
    <Container>
      <Loading isLoading={isLoading} />
      <h1>Login</h1>

      <Form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="email">
          Email:
          <input
            type="text"
            inputMode="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
        </label>
        <label htmlFor="password">
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </label>
        <button type="submit">Enter</button>
      </Form>
    </Container>
  );
}
