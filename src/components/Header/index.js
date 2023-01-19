import React from 'react';
import {
  FaHome,
  FaSignInAlt,
  FaPowerOff,
  FaUser,
  FaUserPlus,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import * as actions from '../../store/modules/auth/actions';
import history from '../../services/history';
import { Nav } from './styled';

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
      <Link to="/">
        <FaHome size={20} />
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
