import React, { Component } from 'react';
import AddTask from './AddTask';
import './App.css';
import ListTasks from './ListTasks';
class App  extends Component {
  state = {  
    tasks: [
      {
        id: 0,
        text: 'Zrobić zadanie 1',
        date: '21-11-2023',
        priorytet: true,
        active : true,
        finishDate: null,
      },
      {
        id: 1,
        text: 'Zrobić zadanie 2',
        date: '22-11-2023',
        priorytet: true,
        active : true,
        finishDate: null,
      },
      {
        id: 2,
        text: 'Zrobić zadanie 3',
        date: '23-11-2023',
        priorytet: false,
        active : true,
        finishDate: null,
      },
      {
        id: 3,
        text: 'Zrobić zadanie 4',
        date: '24-11-2023',
        priorytet: false,
        active : true,
        finishDate: null,
      },
      {
        id: 4,
        text: 'Zrobić zadanie 5',
        date: '25-11-2023',
        priorytet: false,
        active : true,
        finishDate: null,
      },
    ]
  } 

  deleteTask = id => {
    console.log("usuwam " + id)
  }

  changeTask = id => {
    console.log("zmieniam " + id)
  }

  render() { 
    const tasks = this.state.tasks;
    return (
      <div className='App'>
        ToDoApp - Historia Internetu
        <AddTask/>
        <ListTasks tasks={tasks} delete={this.deleteTask} change = {this.changeTask} />
      </div>
    );
  }
}
 
export default App;
