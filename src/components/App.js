import React, { Component } from 'react';
import AddTask from './AddTask';
import './App.css';
import ListTasks from './ListTasks';
class App  extends Component {
  state = {  } 
  render() { 
    return (
      <div className='App'>
        ToDoApp
        <AddTask/>
        <ListTasks/>
      </div>
    );
  }
}
 
export default App;
