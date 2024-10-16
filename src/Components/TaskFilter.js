import React from 'react';


const TaskFilter = ({ setFilter }) => {
    return (
        <div className='filter-container'>
            <button onClick={() => setFilter('All')} className="filter-button">All</button>
            <button onClick={() => setFilter('Completed')} className="filter-button">Completed</button>
            <button onClick={() => setFilter('Pending')} className="filter-button">Pending</button>
        </div>
    );
};

export default TaskFilter;
