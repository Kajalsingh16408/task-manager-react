import React from 'react';

export default function TaskItemWithAnimation({ task, toggleComplete, deleteTask, editTask }) {
  return (
    <li>
      <span
        style={{ textDecoration: task.completed ? 'line-through' : 'none', cursor: 'pointer' }}
        onClick={() => toggleComplete(task.id)}
      >
        {task.text}
      </span>
      <button onClick={() => editTask(task.id, prompt("Edit task:", task.text))}>Edit</button>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </li>
  );
}
