import React, { useState } from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import TaskFilter from './TaskFilter';

const TodoApp = () => {
    const [tasks, setTasks] = useState([]);
    const [filter, setFilter] = useState('All');

    const addTask = (task) => setTasks([...tasks, task]);
    const editTask = (id, updatedTask) => setTasks(tasks.map(task => task.id === id ? { ...task, text: updatedTask } : task));
    const deleteTask = (id) => setTasks(tasks.filter(task => task.id !== id));
    const toggleComplete = (id) => setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));

    const filteredTasks = tasks.filter(task => {
        if (filter === 'Completed') return task.completed;
        if (filter === 'Pending') return !task.completed;
        return true;
    });

    return (
        <div className="todo-app">
            <h1 className="todo-title">Todo List</h1>
            <TaskForm addTask={addTask} />
            <TaskFilter setFilter={setFilter} />
            <TaskList tasks={filteredTasks} editTask={editTask} deleteTask={deleteTask} toggleComplete={toggleComplete} />
        </div>
    );
};

export default TodoApp;
