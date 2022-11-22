import React, { useEffect, useReducer } from 'react';
import Ideas from './Ideas';
import Form from './Form';
import AppContext from './AppContext';
import './App.css';

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

const reducer = (state, action) => {
  console.log(action, 'action App line 24');
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
      <main className="App">
        <h1>IdeaBox</h1>
        <button onClick={toggleTheme}>Change theme</button>
        <Form />
        <Ideas />
      </main>
    </AppContext.Provider>
  );
}

export default App;
