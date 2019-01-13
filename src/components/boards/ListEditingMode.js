import React, { Component } from 'react'
import styled from 'styled-components';
import { connect } from 'react-redux'
import { Wrapper } from './CreateNewList';
import DisableListEditMode from './DisableListEditingMode';
import disable from './../../actions/DisableListEditingMode';
import { reduxForm, Field, reset } from 'redux-form';
import BoardTitleInput from './boardCreation/BoardTitleInput';

class ListEditingMode extends Component {
  render() {
    const { disable, handleSubmit } = this.props;
    return (
      <Wrapper>
        <form onSubmit={ handleSubmit }>
          <Field
            name="listItem"
            component={ BoardTitleInput }
            type="text"
            placeholder="add a list" />
          </form>
          <DisableListEditMode disableList={ disable } />
      </Wrapper>
    )
  }
}

function mapStateToProps({ activeBoard }) {
  return {
    activeBoard
  }
}

function validate(values) {
  let errors = {};
  if (!values.listItem) {
    errors.listItem = 'give me a name!'
  }
  return errors;
}

const afterSubmit = (result, dispatch) => {
  dispatch(reset('listItem'));
}

export default reduxForm({
  validate,
  form: 'listItem',
  onSubmitSuccess: afterSubmit,
})(connect(mapStateToProps, { disable })(ListEditingMode));
