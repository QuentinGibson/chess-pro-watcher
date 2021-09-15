import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ChessContext } from 'App';
import './style.css';

const Header = ({ white }) => {
  const { game } = useContext(ChessContext);
  let name;
  if (white) {
    name = game.headers.White;
  } else {
    name = game.headers.Black;
  }

  const containerClass = white ? 'white-container' : 'black-container';
  return (
    <div className={containerClass}>
      <div className="flex items-center">
        <p className="name">
          {white ? 'White' : 'Black'}
          :
          {' '}
          {name}
        </p>
      </div>
    </div>
  );
};
export default Header;

Header.propTypes = {
  white: PropTypes.bool.isRequired,
};
