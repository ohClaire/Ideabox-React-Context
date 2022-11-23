import React, { useContext } from 'react';
import AppContext from './AppContext';
import Card from './Card';
import styled from 'styled-components';

const IdeasContainer = styled.div`
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
`;

const Ideas = () => {
  const [state, dispatch] = useContext(AppContext);

  const ideaCards = state.ideas.map((idea) => {
    return (
      <Card
        title={idea.title}
        description={idea.description}
        id={idea.id}
        key={idea.id}
      />
    );
  });

  return <IdeasContainer>{ideaCards}</IdeasContainer>;
};

export default Ideas;
