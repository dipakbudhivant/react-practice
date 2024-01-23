import React from 'react';


const Task = (data) => {
  // Your code here
    console.log('hiii task is here ',data);
    const task = data.data;
  const dynamicStyles = {
    textDecoration: task.status === 'completed' ? 'line-through' : 'none',
    color: task.status === 'completed' ? 'green' : 'black',
    // Add more dynamic styles as needed
  };

  return (
    <div style={dynamicStyles}>
      {`Your task no. ${task.id} is ${task.title} and status is ${task.status}`}
    </div>
  );

};

export default Task;