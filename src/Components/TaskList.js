import React from 'react';


const TaskList = ({ tasks, editTask, deleteTask, toggleComplete }) => {
    return (
        <ul className="task-list">
            {tasks.map(task => (
                <li key={task.id} className="task-item">
                    <input
                        type="checkbox"
                        checked={task.completed}
                        onChange={() => toggleComplete(task.id)}
                        className="task-checkbox"
                    />
                    <span className={task.completed ? 'task-text completed' : 'task-text'}>
                        {task.text}
                    </span>
                    <button onClick={() => deleteTask(task.id)} className="delete-button">Delete</button>
                </li>
            ))}
        </ul>
    );
};

export default TaskList;
