import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components';
import mapValues from 'lodash/mapValues';
import ListItem from './ListItem';

const ListItemsWrapper = styled.div`
  display: flex;
`

class ListItemsContainer extends Component {
  renderListItems = () => {
    const { activeBoardData } = this.props;
    console.log('activeboarddata is', this.props)
    const mappedList = mapValues(activeBoardData.listItems, list => list.name);
    const mappedKeys = Object.keys(mappedList);
    return mappedKeys.map((id, i) => 
      <ListItem id={ id } key={ i } name={ mappedList[id] } />
    );
  }
  render() {
    return (
      <ListItemsWrapper>
        { this.renderListItems() }
      </ListItemsWrapper>
    )
  }
}

function mapStateToProps({ listItems }) {
  return { listItems };
}

export default connect(mapStateToProps)(ListItemsContainer);
