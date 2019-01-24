import React, { Component } from 'react';
import Header from './header';
import ToDo from './todo';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header>
          React ToDo
        </Header>
        <ToDo />
      </div>
    );
  }
}

export default App;
