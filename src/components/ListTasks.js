import React from "react";
import Task from "./Task";

const ListTasks = ({ tasks, delete: deleteTask, change: changeTask }) => {
  const active = tasks.filter((task) => task.active);
  const done = tasks.filter((task) => !task.active);

  const activeTasks = active.map((task) => (
    <Task
      key={task.id}
      task={task}
      deleteTask={deleteTask}
      changeTask={changeTask}
    />
  ));

  const doneTasks = done.map((task) => (
    <Task
      key={task.id}
      task={task}
      deleteTask={deleteTask}
      changeTask={changeTask}
    />
  ));

  return (
    <>
      <div className="active">
        <h2 className="display-4">Lista zadań</h2>
        {activeTasks}
        <hr />
      </div>
      <div className="done">
        <h2>Zadania zrobione ({doneTasks.length})</h2>
        {doneTasks}
        <hr />
      </div>
    </>
  );
};

export default ListTasks;
