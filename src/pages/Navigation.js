import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home Page</Link>
        </li>
        <li>
          <Link to="/RandomFact">Random Fact</Link>
        </li>
        <li>
          <Link to="/TicTacToe">Tic-Tac-Toe</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;