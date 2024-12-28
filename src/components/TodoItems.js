import React from "react";

function TodoItem({ task, toggleCompleted, deleteTask }) {
  function handleCheck() {
    toggleCompleted(task.id);
  }

  return (
    <div className="col-md-6">
      <div className={`card shadow-sm ${task.completed ? "bg-light" : ""}`}>
        <div className="card-body d-flex align-items-center">
          <input
            type="checkbox"
            className="form-check-input me-3"
            checked={task.completed}
            onChange={handleCheck}
          />
          <p
            className={`mb-0 flex-grow-1 ${
              task.completed ? "text-decoration-line-through text-muted" : ""
            }`}
          >
            {task.text}
          </p>
          <button onClick={() => deleteTask(task.id)}>X</button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
