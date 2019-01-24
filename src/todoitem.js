import React, { Component } from 'react';

class ToDoItem extends Component {
  render(){
    let id   = this.props.item.id;
    let name = this.props.item.name;
    return(
      <li key={id}>{name}</li>
    );
  }
}

export default ToDoItem;
