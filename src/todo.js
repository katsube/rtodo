import React, { Component } from 'react';
import ToDoCreate from './todocreate';
import ToDoList from './todolist';

class ToDo extends Component {
  constructor(props){
    super(props);
    this.state = {
      todo: [],
      max_id: 0
    };

    this.handleClick  = this.handleClick.bind(this);
  }

  handleClick(value){
    let id   = this.state.max_id;
    let todo = this.state.todo;
    todo.push({id: id+1, name:value});

    this.setState({
        newtodo: "",
        todo: todo,
        max_id: id + 1
    });
  }

  render() {
    return(
      <div>
        <ToDoCreate onClick={this.handleClick} />
        <ToDoList data={this.state.todo} />
      </div>
    );
  }
}

export default ToDo;
