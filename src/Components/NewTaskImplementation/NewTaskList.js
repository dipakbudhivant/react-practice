import React from 'react';
import NewTask from './NewTask';
const tasks = [
  { id: 1, title: 'Complete React assignment', status: 'completed' },
  { id: 2, title: 'Submit project proposal', status: 'pending' },
  { id: 3, title: 'Review code pull request', status: 'completed' },
  // Add more tasks as needed
];

const NewTaskList = () => {
  // Your code here

  return (
    <div>
      <h2>Task List New</h2>
        {
            tasks.map(task => 
                (<NewTask key={task.id} title={task.title}  status={task.status}></NewTask>)
            )
        }

    </div>
  );
};

export default NewTaskList;
