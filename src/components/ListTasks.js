import React from 'react';
import Task from './Task';
 const ListTasks = (props) => {
    console.log('Props in ListTasks:', props);  // Dodaj ten log
    const tasks = props.tasks.map(task => <Task key={task.id} task={task} deleteTask={props.delete} changeTask ={props.change} />)

    return ( 
        <>
        <div className='active'>
            <h1>Lista zadań</h1>
            {tasks}
            <hr/>
        </div>
        <div className='done'>
            <h2>Zadania zrobione (0)</h2>
            <hr/>
        </div>
        </>
     );
 }
  
 export default ListTasks;