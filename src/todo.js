import React, { Component } from 'react';
import ToDoCreate from './todocreate';
import ToDoList from './todolist';

class ToDo extends Component {
  constructor(props){
    super(props);
    this.state = {
      todo: [],
      isLoad: false,
      isError: false
    };

    this.handleClick  = this.handleClick.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  componentWillMount(){
    this.fetchAPI();
  }

  fetchAPI(){
    fetch('http://localhost:3001/get')
      .then( res => res.json() )
      .then(
        res => {
          this.setState({
            todo: res.data,
            isLoad: true
          });
        },
        res => {
          this.setState({ isError: true });
        },
      );
  }

  saveAPI(value){
    let method  = "POST";
    let headers = {'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'};
    let body    = "data=" + JSON.stringify(value);

    fetch('http://localhost:3001/set', {method, headers, body})
      .then( res => res.json() )
      .then(
        res => {
          if(res.status === false){
            this.setState({isError:true})
          }
          else{
            this.fetchAPI();
          }
        },
        res => {
          this.setState({isError:true})
        }
      );
  }

  removeAPI(id){
    fetch(`http://localhost:3001/remove/${id}`)
      .then( res => res.json() )
      .then(
        res => {
          if(res.status === false){
            this.setState({isError:true})
          }
          else{
            this.fetchAPI();
          }
        },
        res => {
          this.setState({ isError: true });
        },
      );
  }

  handleClick(value){
    this.saveAPI({name:value});
  }

  handleRemove(e){
    let id = Number( e.currentTarget.getAttribute("data-id") );
    this.removeAPI(id);
  }

  render() {
    if(this.state.isError){
      return( <div>API Request Error</div> );
    }
    else if(!this.state.isLoad){
      return( <div>...Loading now</div> );
    }
    return(
      <div>
        <ToDoCreate onClick={this.handleClick} />
        <ToDoList data={this.state.todo} remove={this.handleRemove}/>
      </div>
    );
  }
}

export default ToDo;
