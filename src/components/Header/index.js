import React from 'react';
import { FaHome, FaSignInAlt } from 'react-icons/fa';

import { Nav } from './styled';

export default function Header() {
  return (
    <Nav>
      <a href="localhost:3000">
        <FaHome size={20} />
      </a>
      <a href="localhost:3000">
        <FaSignInAlt size={20} />
      </a>
    </Nav>
  );
}
