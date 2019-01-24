import React, { Component } from 'react';

class ToDoCreate extends Component {
  constructor(props){
    super(props);
    this.state = {
      newtodo: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick  = this.handleClick.bind(this);
  }

  handleChange(e){
    this.setState({
      newtodo: e.target.value
    });
  }

  handleClick(){
    this.props.onClick(this.state.newtodo);
    this.setState({newtodo:""});
  }

  render(){
    return(
      <form>
        <input type="text" value={this.state.newtodo} onChange={this.handleChange}/>
        <input type="button" value="追加" onClick={this.handleClick} />
      </form>
    );
  }
}

export default ToDoCreate;
