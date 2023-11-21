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
    const tasks = [...this.state.tasks];
    const filter = tasks.findIndex(task => task.id === id);
    tasks.splice(filter,1);
    this.setState({
      tasks
    })
   
  }

  changeTask = id => {
    const tasks = [...this.state.tasks];
    tasks.forEach(task=>{
      if(task.id === id){
        task.active = false;
        task.finishDate = new Date().getTime();
      }
    })
    this.setState({
      tasks
    })
  }

  render() { 
    const tasks = this.state.tasks;
    return (
      <div className='App'>
        <h1>ToDoApp - Historia Internetu</h1>
        <AddTask/>
        <ListTasks tasks={tasks} delete={this.deleteTask} change = {this.changeTask} />
      </div>
    );
  }
}
 
export default App;
