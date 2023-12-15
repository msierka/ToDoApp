import React, { useState } from "react";
import AddTask from "./AddTask";
import ListTasks from "./ListTasks";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 0,
      text: "Zrobić zadanie 1",
      date: "21-01-2024",
      priorytet: true,
      active: true,
      finishDate: null,
    },
    {
      id: 1,
      text: "Zrobić zadanie 2",
      date: "22-01-2024",
      priorytet: true,
      active: true,
      finishDate: null,
    },
    {
      id: 2,
      text: "Zrobić zadanie 3",
      date: "23-01-2024",
      priorytet: false,
      active: true,
      finishDate: null,
    },
    {
      id: 3,
      text: "Zrobić zadanie 4",
      date: "24-01-2024",
      priorytet: false,
      active: true,
      finishDate: null,
    },
    {
      id: 4,
      text: "Zrobić zadanie 5",
      date: "25-01-2024",
      priorytet: false,
      active: true,
      finishDate: null,
    },
  ]);

  const addTask = (text, date, priorytet) => {
    const task = {
      id: tasks.length,
      text,
      date,
      priorytet,
      active: true,
      finishDate: null,
    };

    setTasks((prevTasks) => [...prevTasks, task]);
    return true;
  };

  const deleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const changeTask = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id
          ? { ...task, active: false, finishDate: new Date().getTime() }
          : task
      )
    );
  };

  return (
    <div className="App">
      <h1 className="display-1">ToDoApp - Inżynieria Internetu</h1>
      <AddTask add={addTask} />
      <ListTasks tasks={tasks} delete={deleteTask} change={changeTask} />
    </div>
  );
};

export default App;
