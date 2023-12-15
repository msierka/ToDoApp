import React from "react";

const Task = ({ task, deleteTask, changeTask }) => {
  const { text, date, id, active, priorytet, finishDate } = task;
  const style = {
    color: "red",
  };

  if (active) {
    return (
      <p>
        <strong style={priorytet ? style : null}>{text}</strong>- do {date}
        <button className="btn btn-success" onClick={() => changeTask(id)}>
          Zrobione
        </button>
        <button className="btn btn-danger" onClick={() => deleteTask(id)}>
          Usuń
        </button>
      </p>
    );
  } else {
    const finish = new Date(finishDate).toLocaleDateString();
    return (
      <p>
        {text}- do {date} <br />
        <em>Wykonano: {finish}</em>
      </p>
    );
  }
};

export default Task;
