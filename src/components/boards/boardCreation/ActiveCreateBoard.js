import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux'
import { Wrapper } from './CreateBoard';
import cancelCreatingBoard from './../../../actions/CancelCreatingBoard';
import submitNewBoard from './../../../actions/SubmitNewBoard';
import BoardTitle from './BoardTitleForm';

const Title = styled.h3`
    color: white;
    text-shadow: 0px 0px 3px #000;
`

const TopWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    border-bottom: solid 1px rgb(240,240,240);
`

const CloseBoardIcon = styled.img`
    width: 24px;
    height: 24px;
    padding: 5px;
    transition: all 200ms ease-in-out;
    &:hover {
        transition: all 200ms ease-in-out;
        transform: scale(1.25) rotate(4.5deg);
    }
`

const BodyWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 10px;
`

const BoardNamingTitle = styled.h5`
    color: white;
    text-shadow: 0px 0px 3px #000;
    font-weight: 400;
    margin: 20px 19px 0 33px;
`


class ActiveCreateBoard extends Component {
  handleSubmit = (values) => {
    console.log('values', values);
    this.props.submitNewBoard(values.boardTitle);
    values.boardTitle = '';
  }

  render() {
    const { cancelCreatingBoard } = this.props;
    return (
      <Wrapper> 
        <TopWrapper>
          <Title> Creating board </Title>
          <CloseBoardIcon onClick={()=>cancelCreatingBoard()}/>
        </TopWrapper>
        <BodyWrapper>
          <BoardNamingTitle> What shall we call this board? </BoardNamingTitle>
          <BoardTitle onSubmit={this.handleSubmit} cancelAction={cancelCreatingBoard} />
        </BodyWrapper>
      </Wrapper>
    )
  }

}

export default connect(null, { cancelCreatingBoard, submitNewBoard })(ActiveCreateBoard);

