import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import selectActiveBoard from './../../actions/SelectActiveBoard';

class ShowActiveBoard extends Component {
  static propTypes = {
    selectActiveBoard: PropTypes.func.isRequired,
  }

  componentDidMount() {
    const { match, selectActiveBoard } = this.props;
    selectActiveBoard(match.params.id);
  }

  render() {
    return (
      <div>
        <h1>single board</h1>
      </div>
    )
  }
}

export default connect(null, { selectActiveBoard })(ShowActiveBoard);
