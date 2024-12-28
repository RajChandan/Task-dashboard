import React, { useState } from "react";
import TodoItem from "./TodoItems";
function TodoList() {
  const [tasks, setTask] = useState([
    {
      id: 1,
      text: "Doctor Appointment",
      completed: true,
    },
    {
      id: 2,
      text: "Meeting at School",
      completed: false,
    },
  ]);
  const [text, setText] = useState("");
  console.log(text, "text");
  function toggleCompleted(id) {
    console.log(id, "id");
    setTask(
      tasks.map((task) => {
        if (task.id === id) {
          console.log(tasks, "tasks");
          return { ...task, completed: !task.completed };
        } else {
          return task;
        }
      })
    );
  }

  function addTask(task) {
    const newTask = { id: Date.now(), completed: false, text };
    setTask([...tasks, newTask]);
    setText("");
  }

  function deleteTask(id) {
    setTask(tasks.filter((task) => task.id !== id));
  }

  return (
    <div className="container my-4">
      <h2 className="text-center mb-4">Todo List</h2>
      <div className="row g-3">
        {tasks.map((task) => (
          <TodoItem
            key={task.id}
            task={task}
            toggleCompleted={toggleCompleted}
            deleteTask={deleteTask}
          />
        ))}
      </div>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={() => addTask(text)}>Add Task</button>
    </div>
  );
}

export default TodoList;
