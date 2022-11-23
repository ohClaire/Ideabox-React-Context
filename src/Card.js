import React, { useContext } from 'react';
import AppContext from './AppContext';
import styled from 'styled-components';

const CardContainer = styled.div`
  box-sizing: border-box;
  border: 3px solid black;
  padding: 10px;
  background: ${({ theme }) => (theme === 'light' ? 'white' : 'black')};
  color: ${({ theme }) => (theme === 'light' ? 'black' : 'white')};
`;

const mode = {};

const Card = ({ title, description, id, isFavorited }) => {
  const [state, dispatch] = useContext(AppContext);
  return (
    <CardContainer
      className={`card ${isFavorited && 'favorite'}`}
      theme={state.theme}
    >
      <h3>{title}</h3>
      <p>{description}</p>
      <button onClick={() => dispatch({ type: 'REMOVE_IDEAS', id })}>🗑</button>
    </CardContainer>
  );
};

export default Card;
