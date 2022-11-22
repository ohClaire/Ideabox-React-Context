import React, { useState, useEffect, useReducer } from 'react';
import Ideas from './Ideas';
import Form from './Form';
import AppContext from './AppContext';
// import ThemeContext from './ThemeContext';
import './App.css';

// useReducer and dispatch
const initialState = {
  theme: 'light',
  ideas: [],
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case 'TOGGLE_THEME':
      const newTheme = state.theme === 'light' ? 'dark' : 'light';
      return { ...state, theme: newTheme };

    case 'ADD_IDEAS':
      console.log(action.idea);
      return { ...state, ideas: [...state.ideas, action.idea] };

    case 'REMOVE_IDEAS':
      console.log(action.id);
      const filteredIdeas = state.ideas.filter((idea) => idea.id !== action.id);
      return { ...state, ideas: filteredIdeas };

    default:
      return state;
  }
};

function App() {
  // const [ideas, setIdeas] = useState([]);
  // const [theme, setTheme] = useState('light');
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state, '=', dispatch);
  useEffect(() => {
    document.title = `Ideabox (${state.ideas.length})`;
  });

  const addIdea = (newIdea) => {
    // logic was moved into reducer
    const action = { type: 'ADD_IDEAS', idea: newIdea };
    dispatch(action);
  };

  const deleteIdea = (id) => {
    // logic was moved into reducer
    const action = { type: 'REMOVE_IDEAS', id: id };
    dispatch(action);
  };

  const toggleTheme = () => {
    // const newTheme = theme === 'light' ? 'dark' : 'light';
    // setTheme(newTheme);
    // this logic has been moved into our reducer variable so now we use dispatch to invoke change
    const action = { type: 'TOGGLE_THEME' };
    dispatch(action);
  };

  return (
    // <ThemeContext.Provider value={state.theme}>
    <AppContext.Provider value={[state, dispatch]}>
      <main className="App">
        <h1>IdeaBox</h1>
        <button onClick={toggleTheme}>Change theme</button>
        <Form />
        <Ideas />
      </main>
    </AppContext.Provider>
    // </ThemeContext.Provider>
  );
}

export default App;
