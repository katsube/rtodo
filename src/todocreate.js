import React, { Component } from 'react';

class ToDoCreate extends Component {
  constructor(props){
    super(props);
    this.state = {
      newtodo: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e){
    this.setState({
      newtodo: e.target.value
    });
  }

  handleSubmit(e){
    e.preventDefault();

    let newtodo = this.state.newtodo;
    if(newtodo === "" || newtodo.length < 2){
      return(false);
    }

    if(newtodo !== "" && window.confirm("本当に登録しますか？")){
      this.props.onClick(newtodo);
      this.setState({newtodo:""});
    }
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.newtodo} onChange={this.handleChange}/>
        <button>追加</button>
      </form>
    );
  }
}

export default ToDoCreate;
