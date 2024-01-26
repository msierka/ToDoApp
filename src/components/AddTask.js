import React, { useState } from "react";

const AddTask = ({ add }) => {
  const minDate = new Date().toISOString().slice(0, 10);
  const [task, setTask] = useState({
    text: "",
    checked: false,
    date: minDate,
  });

  const handleDate = (e) => {
    setTask({ ...task, date: e.target.value });
  };

  const handleText = (e) => {
    setTask({ ...task, text: e.target.value });
  };

  const handleCheck = (e) => {
    setTask({ ...task, checked: e.target.checked });
  };

  const handleButton = () => {
    const { text, date, checked } = task;

    // Dodaj walidację długości tekstu zadania
    if (text.length < 2) {
      alert("Tekst zadania musi mieć co najmniej 2 znaki.");
      return; // Przerwij działanie funkcji, jeśli warunek nie jest spełniony
    }

    const addSuccess = add(text, date, checked);

    if (addSuccess) {
      setTask({ text: "", checked: false, date: minDate });
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Dodaj zadanie"
        value={task.text}
        onChange={handleText}
      />
      <input
        type="checkbox"
        placeholder="Dodaj zadanie"
        checked={task.checked}
        id="important"
        onChange={handleCheck}
      />
      <label htmlFor="important"> Priorytet</label>
      <br />
      <label htmlFor="date">Deadline </label>
      <input
        type="date"
        value={task.date}
        min={minDate}
        max="2024-01-31"
        onChange={handleDate}
      />
      <button className="btn btn-primary" onClick={handleButton}>
        {" "}
        Dodaj
      </button>
    </div>
  );
};

export default AddTask;
