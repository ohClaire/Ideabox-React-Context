import React, { useEffect, useReducer } from 'react';
import Ideas from './Ideas';
import Form from './Form';
import AppContext from './AppContext';
import styled from 'styled-components';

const Wrapper = styled.main`
  text-align: center;
`;

const Title = styled.h1`
  color: black;
`;

const ThemeButton = styled.button`
  margin: 5px;
  width: 30%;
  border: 2px solid #355c7d;
  border-radius: 4px;
  font-size: 18px;
  background: #355c7d;
  color: #f8b195;
  box-shadow: 6px 6px 2px 1px #6c5b7b;
`;

const initialState = {
  theme: 'light',
  ideas: [
    {
      id: 1,
      title: 'Flying ferret',
      description: 'butterfly wings',
    },
    {
      id: 2,
      title: 'self-control',
      description: 'delay gratification for long term success',
    },
  ],
};

console.log(initialState);

const reducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_THEME':
      const newTheme = state.theme === 'light' ? 'dark' : 'light';
      return { ...state, theme: newTheme };

    case 'ADD_IDEAS':
      return { ...state, ideas: [...state.ideas, action.idea] };

    case 'REMOVE_IDEAS':
      const filteredIdeas = state.ideas.filter((idea) => idea.id !== action.id);
      return { ...state, ideas: filteredIdeas };

    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state.ideas.length);
  useEffect(() => {
    document.title = `Ideabox (${state.ideas.length})`;
  });

  const toggleTheme = () => {
    const action = { type: 'TOGGLE_THEME' };
    dispatch(action);
  };

  return (
    <AppContext.Provider value={[state, dispatch]}>
      <Wrapper>
        <Title>IdeaBox</Title>
        <ThemeButton onClick={toggleTheme}>Change theme</ThemeButton>
        <Form />
        <Ideas />
      </Wrapper>
    </AppContext.Provider>
  );
}

export default App;
