import React, { useContext } from 'react';
import AppContext from './AppContext';
import Card from './Card';
import './Ideas.css';

const Ideas = () => {
  const [state, dispatch] = useContext(AppContext);
  console.log(state);

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

  return <div className="ideas-container">{ideaCards}</div>;
};

export default Ideas;
