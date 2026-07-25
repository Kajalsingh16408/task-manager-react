import React from 'react';
import TaskItemWithAnimation from './TaskItemWithAnimation';
import '../TaskList.css';

export default function TaskList({ tasks, toggleComplete, deleteTask, editTask }) {
  return (
    <ul>
      {tasks.map(t => (
        <TaskItemWithAnimation
          key={t.id}
          task={t}
          toggleComplete={toggleComplete}
          deleteTask={deleteTask}
          editTask={editTask}
        />
      ))}
    </ul>
  );
}
