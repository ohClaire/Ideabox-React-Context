import React, { useContext, useState } from 'react';
import AppContext from './AppContext';
import styled from 'styled-components';

const FormContainer = styled.form`
  margin: auto;
`;

const StyledInput = styled.input`
  margin: 5px;
  width: 30%;
  border: 2px solid black;
  font-size: 18px;
`;

const StyledButton = styled.button`
  margin: 5px;
  width: 30%;
  border: 2px solid black;
  font-size: 18px;
`;

function Form(props) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [state, dispatch] = useContext(AppContext);

  const submitIdea = (event) => {
    event.preventDefault();
    const newIdea = {
      id: Date.now(),
      title,
      description,
    };
    dispatch({ type: 'ADD_IDEAS', idea: newIdea });
    clearInputs();
  };

  const clearInputs = () => {
    setTitle('');
    setDescription('');
  };

  return (
    <FormContainer>
      <StyledInput
        type="text"
        placeholder="Title"
        name="title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />

      <StyledInput
        type="text"
        placeholder="Description"
        name="description"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />

      <StyledButton onClick={submitIdea}>SUBMIT</StyledButton>
    </FormContainer>
  );
}

export default Form;
