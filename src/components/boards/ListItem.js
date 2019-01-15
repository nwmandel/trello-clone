import React, { Component } from 'react';
import styled from 'styled-components';
import CreateCardContainer from './CardContainer';
import { DropTarget } from 'react-dnd';
import { connect } from 'react-redux'
import handleDrop from './../../actions/HandleDrop';

const ListItemWrapper = styled.div`
  display: inline-block;
  vertical-align: top;
  margin: 20px;
  background-color: rgb(255, 255, 255);
  padding: 5px 10px;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  transition: all 150ms ease-in-out;
`

const ListItemHeader = styled.h4`
  color: #333;
  letter-spacing: 1.66;
  text-align: center;
  text-transform: uppercase;
  font-weight: 900;
`

const ItemTypes = {
  CARD: 'card'
}

const dropSource = {
  drop(props, monitor) {
    const card = monitor.getItem();
    props.handleDrop(card.title, card.cardId, card.listId, props.id);
  }
}

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    isOverCurrent: monitor.isOver({ shallow: true }),
    canDrop: monitor.canDrop(),
    itemType: monitor.getItemType()
  };
}

@DropTarget(ItemTypes.CARD, dropSource, collect)
class ListItem extends Component {
    render() {
      const { name, id, connectDropTarget } = this.props;
      console.log('this.props listItem', this.props);
      return connectDropTarget(
        <div>
          <ListItemWrapper>
            <ListItemHeader>{  name ? name.name ? name.name : name : '' }</ListItemHeader>
            <hr />
            <CreateCardContainer listId={ id } />
          </ListItemWrapper>
        </div>
      )
    }
}

export default connect(null, { handleDrop })(ListItem);
