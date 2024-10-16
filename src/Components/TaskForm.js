import React, { useState } from 'react';


const TaskForm = ({ addTask }) => {
    const [taskText, setTaskText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (taskText) {
            addTask({ id: Date.now(), text: taskText, completed: false });
            setTaskText('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="task-form">
            <input
                type="text"
                value={taskText}
                onChange={(e) => setTaskText(e.target.value)}
                placeholder="Enter a new task"
                className="task-input"
            />
            <button type="submit" className="task-button">Add Task</button>
        </form>
    );
};

export default TaskForm;
