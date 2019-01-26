import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ToDoItem extends Component {
  render(){
    let id   = this.props.item.id;
    let name = this.props.item.name;
    return(
      <li key={id}>
        {name}&nbsp;
        <button type="button" data-id={id} onClick={this.props.remove}>✖</button>
      </li>
    );
  }
}

ToDoItem.propTypes ={
  item: PropTypes.object.isRequired,
  remove: PropTypes.func.isRequired
};

export default ToDoItem;
