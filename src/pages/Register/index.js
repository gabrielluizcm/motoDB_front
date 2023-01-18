import React from 'react';
import { toast } from 'react-toastify';
import { isEmail } from 'validator';
import { get } from 'lodash';

import { Container } from '../../styles/Global';
import { Form } from './styled';
import axios from '../../services/axios';
import history from '../../services/history';

export default function Register() {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');

  async function handleSubmit(evt) {
    evt.preventDefault();

    const formErrors = [];

    if (name.length < 3 || name.length > 255)
      formErrors.push('"Name" must be at least 3 characters long');
    if (!isEmail(email)) formErrors.push('"Email" must be valid');
    if (password.length < 6 || password.length > 50)
      formErrors.push('"Password" must have 6 to 50 characters');
    if (confirmPassword !== password) formErrors.push('Passwords must match');

    if (formErrors.length) {
      formErrors.forEach((error) => toast.warning(error));
      return false;
    }

    try {
      await axios.post('/users', {
        name,
        email,
        password,
      });
      toast.success('Account created successfully');
      history.push('/login');
    } catch (e) {
      const errors = get(e, 'response.data.errors', [
        'Unable to register at the moment!',
      ]);
      errors.map((error) => toast.error(`${error}`));
    }

    return true;
  }

  return (
    <Container>
      <h1>Register</h1>

      <Form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="name">
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
          />
        </label>
        <label htmlFor="email">
          Email:
          <input
            type="email"
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
        <label htmlFor="password">
          Password Confirmation:
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Password Confirmation"
          />
        </label>
        <button type="submit">Create new account</button>
      </Form>
    </Container>
  );
}
