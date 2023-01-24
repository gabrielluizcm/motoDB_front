import React from 'react';
import {
  FaHome,
  FaSignInAlt,
  FaPowerOff,
  FaUser,
  FaUserPlus,
  FaMotorcycle,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import * as actions from '../../store/modules/auth/actions';
import history from '../../services/history';
import { Nav, Title } from './styled';

export default function Header() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(actions.logoutRequest());
    history.push('/');
  };

  return (
    <Nav>
      <Title>
        MotoDB
        <p>
          Developed by{' '}
          <a
            href="http://github.com/gabrielluizcm"
            target="_blank"
            rel="noreferrer"
          >
            Gabriel Luiz
          </a>
        </p>
      </Title>
      <Link to="/">
        <FaHome size={20} />
      </Link>
      <Link to="/motorcycles">
        <FaMotorcycle size={20} />
      </Link>
      {isLoggedIn ? (
        <>
          <Link to="/register">
            <FaUser size={20} />
          </Link>
          <Link onClick={handleLogout} to="/logout">
            <FaPowerOff size={20} />
          </Link>
        </>
      ) : (
        <>
          <Link to="/login">
            <FaSignInAlt size={20} />
          </Link>
          <Link to="/register">
            <FaUserPlus size={20} />
          </Link>
        </>
      )}
    </Nav>
  );
}
