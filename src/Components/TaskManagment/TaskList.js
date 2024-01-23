import React from 'react';
import Task from './Task';

const tasks = [
  { id: 1, title: 'Complete React assignment', status: 'completed' },
  { id: 2, title: 'Submit project proposal', status: 'pending' },
  { id: 3, title: 'Review code pull request', status: 'completed' },
  // Add more tasks as needed
];

const TaskList = () => {
  // Your code here

  return (
    <div>
      <h2>Task List</h2>
      {/* Render tasks using the Task component */}
        {tasks.map(task => 
            // console.log(task)
            (<Task data={task}></Task>)
        )}
    </div>
  );
};

export default TaskList;
