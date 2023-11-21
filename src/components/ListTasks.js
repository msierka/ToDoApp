import React from 'react';
import Task from './Task';
 const ListTasks = (props) => {
    const active = props.tasks.filter(task => task.active)
    const done = props.tasks.filter(task => !task.active)
    const activeTasks = active.map(task => <Task key={task.id} task={task} deleteTask={props.delete} changeTask ={props.change} />)
    const doneTasks = done.map(task => <Task key={task.id} task={task} deleteTask={props.delete} changeTask ={props.change} />)

    return ( 
        <>
        <div className='active'>
            <h1>Lista zadań</h1>
            {activeTasks}
            <hr/>
        </div>
        <div className='done'>
            <h2>Zadania zrobione ({doneTasks.length})</h2>
            {doneTasks}
            <hr/>
        </div>
        </>
     );
 }
  
 export default ListTasks;