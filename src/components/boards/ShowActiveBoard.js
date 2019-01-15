import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import selectActiveBoard from './../../actions/SelectActiveBoard';
import enableListEditMode from './../../actions/ToggleListEditMode';
import ActiveBoardTitle from './ActiveBoardTitle';
import ListWrapper from './ListWrapper';
import submitList from './../../actions/SubmitList';
import ListEditingMode from './ListEditingMode';
import CreateNewList from './CreateNewList';
import ListItemsContainer from './ListItemsContainer';


class ShowActiveBoard extends Component {
  static propTypes = {
    selectActiveBoard: PropTypes.func.isRequired,
  }

  componentDidMount() {
    const { match, selectActiveBoard } = this.props;
    selectActiveBoard(match.params.id);
  }

  handleSubmitList = values => {
    this.props.submitList(values.listItem);
  }

  
  render() {
    const { activeBoard, enableListEditMode } = this.props;
    // console.log('show props', this.props);
    if (!activeBoard.isFetching) {
      return (
        <div>
          <ActiveBoardTitle>
            { activeBoard.title }
          </ActiveBoardTitle>
          <ListWrapper>
              <ListItemsContainer />
              { activeBoard.isEditingList
                  ? <ListEditingMode onSubmit={ this.handleSubmitList } />
                  : <CreateNewList addList={ enableListEditMode } />
              }
          </ListWrapper>
        </div>
      )
    } else {
      return (
        <div>loading...</div>
      )
      
    }
  }
}

function mapStateToProps({ activeBoard }) {
  return {
      activeBoard
  }
}

export default connect(mapStateToProps,
  { selectActiveBoard, enableListEditMode, submitList }
)(ShowActiveBoard);
