import React, { useContext } from 'react';
import AppContext from './AppContext';
import Card from './Card';
import './Ideas.css';

const Ideas = () => {
  const [ideas] = useContext(AppContext);
  console.log(ideas);

  const deleteIdea = (id) => {
    // logic was moved into reducer
    const action = { type: 'REMOVE_IDEAS', id: id };
    dispatch(action);
  };

  const ideaCards = ideas.map((idea) => {
    return (
      <Card
        title={idea.title}
        description={idea.description}
        id={idea.id}
        key={idea.id}
        deleteIdea={() => deleteIdea(idea.id)}
      />
    );
  });

  return <div className="ideas-container">{ideaCards}</div>;
};

export default Ideas;
