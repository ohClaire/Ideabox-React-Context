import React, { useContext } from 'react';
import AppContext from './AppContext';
import './Card.css';

const Card = ({ title, description, id, isFavorited }) => {
  const [state, dispatch] = useContext(AppContext);
  return (
    <div className={`card ${isFavorited && 'favorite'} ${state.theme}`}>
      <h3>{title}</h3>
      <p>{description}</p>
      <button onClick={() => dispatch({ type: 'REMOVE_IDEAS', id })}>🗑</button>
    </div>
  );
};

export default Card;
