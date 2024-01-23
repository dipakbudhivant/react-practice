import React from "react";  

const NewTask = ({title, status}) => {
    const getStyle = () => {
            
        return status === 'completed' ? { textDecoration: 'line-through', color: 'green' } : {};
    }
    // console.log('hallel',data)
    // const task = data.data;
    // const cssDecoration = {
    //         "text-decoration": task.status === 'completed' ? "line-through" : 'none',
    //         "color": task.status === 'completed' ? "green" : "black",
    // }
    return (
        <>
        <div style={getStyle()}>
            {/* {`${task.id}. ${task.title} is ${task.status}`} */}
            {title}
        </div>
        </>
    )
}


export default NewTask;