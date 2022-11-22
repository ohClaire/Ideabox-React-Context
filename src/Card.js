import React, { useContext } from 'react';
// import ThemeContext from './ThemeContext';
import AppContext from './AppContext';
import './Card.css';

const Card = ({ title, description, id, deleteIdea, isFavorited }) => {
  const [state, dispatch] = useContext(AppContext);
  return (
    <div className={`card ${isFavorited && 'favorite'} ${state.theme}`}>
      <h3>{title}</h3>
      <p>{description}</p>
      <button onClick={() => deleteIdea(id)}>🗑</button>
    </div>
  );
};

export default Card;
