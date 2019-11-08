import React from 'react';
import './App.css';
import Todos from './components/Todos';

class App extends React.Component {
  state= {
    todos: [
      {
        id:1,
        title: 'pick up grocery',
        completed: false
      },
      {
        id:2,
        title: 'eat an apple',
        completed: true
      }
    ]
  }
  render(){
    return (
      <div className="App">
        <Todos todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
