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

const SubmitButton = styled.button`
  margin: 5px;
  width: 30%;
  border: 2px solid #355c7d;
  border-radius: 4px;
  font-size: 18px;
  background: #355c7d;
  color: white;
  box-shadow: 6px 6px 2px 1px #6c5b7b;
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

      <SubmitButton onClick={submitIdea}>SUBMIT</SubmitButton>
    </FormContainer>
  );
}

export default Form;
