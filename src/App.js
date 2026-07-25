import React, { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import FilterBar from './components/FilterBar';
import SortBar from './components/SortBar';
import './App.css';
function App() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem('tasks');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const [filter, setFilter] = useState('all');

  const filteredTasks = tasks.filter(t => {
    if (filter === 'completed') return t.completed;
    if (filter === 'pending') return !t.completed;
    return true;
  });

  const addTask = (text) => setTasks([...tasks, { id: Date.now(), text, completed: false }]);
  const deleteTask = (id) => {
  console.log("Before delete:", tasks);
  setTasks(tasks.filter(t => t.id !== id));
  console.log("After delete:", tasks.filter(t => t.id !== id));
};
  const editTask = (id, newText) => setTasks(tasks.map(t => t.id === id ? { ...t, text: newText } : t));
  const toggleComplete = (id) => setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  const [sortOrder, setSortOrder] = useState('asc');
  const sortedTasks = [...filteredTasks].sort((a, b) => {
    if (sortOrder === 'asc') return a.text.localeCompare(b.text);   // A–Z
    if (sortOrder === 'desc') return b.text.localeCompare(a.text); // Z–A
    return 0;
  });

  return (
    <div>
      <h1>Task Manager</h1>
      <TaskForm addTask={addTask} />
      <FilterBar setFilter={setFilter} />
      <SortBar setSortOrder={setSortOrder} />
      <TaskList
        tasks={sortedTasks}
        toggleComplete={toggleComplete}
        deleteTask={deleteTask}
        editTask={editTask}
      />
    </div>
  );
}

export default App;
