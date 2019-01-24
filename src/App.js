import React, { Component } from 'react';
import Header from './header';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header>
          React ToDo
        </Header>
      </div>
    );
  }
}

export default App;
