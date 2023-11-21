import React from 'react';

const Task = (props) => {
    const {text, date, id} = props.task;

    return (  
        <p>
        <strong>{text}</strong>- do {date}
        <button onClick={() => props.changeTask(id)}> Zrobione</button>
        <button onClick={() => props.deleteTask(id)}> Usuń</button>

        </p>
        
    );
}
 
export default Task;