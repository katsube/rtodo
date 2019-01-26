import React, { Component } from 'react';
import ToDoItem from './todoitem';
import PropTypes from 'prop-types';
import './todolist.css';

class ToDoList extends Component {
  render(){
    let data = this.props.data;

    // ToDoがゼロ
    if( data.length === 0 ){
      return(
        <div className="todozero">Nothing ToDo</div>
      );
    }
    // ToDoが存在する
    else{
      return(
        <ul className="todolist">{
          data.map( i => <ToDoItem key={i.id} item={i} remove={this.props.remove} /> )
        }</ul>
      );

    }
  }
}

ToDoList.propTypes = {
  data: PropTypes.array.isRequired,
  remove: PropTypes.func.isRequired
};

export default ToDoList;
