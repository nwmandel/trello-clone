import React from 'react';
import { Field, reduxForm } from 'redux-form';
import styled from 'styled-components';
import BoardTitleInput from './BoardTitleInput';

const CancelButton = styled.button`
    width: auto;
    height: 43px;
    margin: 15px -5px 5px;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 200ms ease-in-out;
    border: none;
    background: none;
    color: white;
    font-weight: 900;
    text-shadow: 0px 0px 3px #000;
    &:hover {
        transition: all 200ms ease-in-out;
        background-color: none;
        color: black;
    }
`

const ButtonWrapper = styled.div`
    margin: 20px 0 5px 0;
    display: flex;
    justify-content: flex-end;
    width: 100%;
`


const SubmitButton = styled.button`
    width: 114px;
    height: 43px;
    margin: 15px 18px 5px;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 200ms ease-in-out;
    &:hover {
        transition: all 200ms ease-in-out;
        color: blue;
    }
`

let BoardTitleForm = (props) => {
  const { handleSubmit, cancelAction } = props;

  return (
    <div>
      <Field
        name="boardTitle"
        component={BoardTitleInput}
        type="text"
      />
      <ButtonWrapper>
        <CancelButton onClick={() => cancelAction()}>Cancel</CancelButton>
        <SubmitButton onClick={handleSubmit} type="button">Create</SubmitButton>
      </ButtonWrapper>
    </div>
  )
}

BoardTitleForm = reduxForm({
  form: 'boardTitle'
})(BoardTitleForm)

export default BoardTitleForm;
