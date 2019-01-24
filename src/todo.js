import React, { Component } from 'react';
import ToDoCreate from './todocreate';
import './todo.css';

class ToDo extends Component {
  constructor(props){
    super(props);
    this.state = {
      todo: [
        {id:1, name:"食材を買いに行く"},
        {id:2, name:"チャーハンを調理する"},
        {id:3, name:"チャーハンを盛り付ける"}
      ],
      max_id: 3
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
    let list = this.state.todo.map( item =>
                 <li key={item.id}>{item.name}</li>
               );

    return(
      <div>
        <ToDoCreate onClick={this.handleClick} />
        <ul class="todolist">
          {list}
        </ul>
      </div>
    );
  }
}

export default ToDo;
