import React from 'react';
import { toast } from 'react-toastify';
import { isEmail } from 'validator';
import { useSelector, useDispatch } from 'react-redux';

import { Container } from '../../styles/Global';
import { Form } from './styled';
import Loading from '../../components/Loading';
import * as actions from '../../store/modules/register/actions';

export default function Register() {
  const dispatch = useDispatch();

  const {
    id: storedId,
    name: storedName,
    email: storedEmail,
  } = useSelector((state) => state.auth.user);
  const { isLoading } = useSelector((state) => state.auth.isLoading);

  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');

  React.useEffect(() => {
    if (!storedId) return;
    setName(storedName);
    setEmail(storedEmail);
  }, [storedId, storedName, storedEmail]);

  async function handleSubmit(evt) {
    evt.preventDefault();

    const formErrors = [];

    if (name.length < 3 || name.length > 255)
      formErrors.push('"Name" must be at least 3 characters long');
    if (!isEmail(email)) formErrors.push('"Email" must be valid');
    if (!storedId && (password.length < 6 || password.length > 50))
      formErrors.push('"Password" must have 6 to 50 characters');
    if (confirmPassword !== password) formErrors.push('Passwords must match');

    if (formErrors.length)
      return formErrors.forEach((error) => toast.warning(error));

    dispatch(
      actions.registerRequest({
        name,
        email,
        password,
        confirmPassword,
        storedId,
        storedEmail,
      })
    );

    return true;
  }

  return (
    <Container>
      <Loading isLoading={isLoading} />

      <h1>{storedId ? 'Edit your info' : 'Register'}</h1>

      <Form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="name">
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={storedId ? 'New name' : 'Name'}
          />
        </label>
        <label htmlFor="email">
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={storedId ? 'New email' : 'Email'}
          />
        </label>
        <label htmlFor="password">
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder={storedId ? 'New password' : 'Password'}
          />
        </label>
        <label htmlFor="password">
          Password Confirmation:
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder={
              storedId ? 'New password confirmation' : 'Password confirmation'
            }
          />
        </label>
        <button type="submit">
          {storedId ? 'Save changes' : 'Create new account'}
        </button>
      </Form>
    </Container>
  );
}
