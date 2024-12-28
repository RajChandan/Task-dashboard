import React from "react";

function TodoItem({ task, toggleCompleted, deleteTask }) {
  function handleCheck() {
    toggleCompleted(task.id);
  }

  return (
    <div className="col-md-6">
      <div
        className={`card shadow-sm mb-3 ${task.completed ? "bg-light" : ""}`}
      >
        <div className="card-body d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center">
            <input
              type="checkbox"
              className="form-check-input me-3"
              checked={task.completed}
              onChange={handleCheck}
            />
            <p
              className={`mb-0 ${
                task.completed ? "text-decoration-line-through text-muted" : ""
              }`}
            >
              {task.text}
            </p>
          </div>
          <button
            onClick={() => deleteTask(task.id)}
            className="btn btn-danger btn-sm"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
