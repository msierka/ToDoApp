import React from 'react';

const Task = (props) => {
    const {text, date, id,active, priorytet, finishDate} = props.task;
    const style ={
        color: 'red'
    }
    if(active){
    return (  
        <p>
        <strong style={priorytet ? style : null}>{text}</strong>- do {date}
        <button onClick={() => props.changeTask(id)}> Zrobione</button>
        <button onClick={() => props.deleteTask(id)}> Usuń</button>

        </p>
        
    );
    } else {
        const finish = new Date(finishDate).toLocaleDateString()
        return (  
            <p>
            {text}- do {date} <br/>
            <em>Wykonano: {finish}</em>
            </p>
            
        );
    }
}
 
export default Task;