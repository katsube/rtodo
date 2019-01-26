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
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleClick(value){
    let id   = this.state.max_id;
    let todo = this.state.todo;
    todo.push({id: id+1, name:value});

    this.setState({
        todo: todo,
        max_id: id + 1
    });
  }

  handleRemove(e){
    let cur  = this.state.todo;
    let id   = Number( e.currentTarget.getAttribute("data-id") );
    let todo = cur.filter( i => i.id !== id );

    this.setState({
      todo: todo
    });
  }

  render() {
    return(
      <div>
        <ToDoCreate onClick={this.handleClick} />
        <ToDoList data={this.state.todo} remove={this.handleRemove}/>
      </div>
    );
  }
}

export default ToDo;
