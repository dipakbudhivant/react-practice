import React from "react";
import InputColorComponent from "./childComponent";
import TaskList from "./TaskManagment/TaskList";
const AnimationBox = () => {
  const colorName = "red";
  const styleProps = {
    height: "20rem",
    width: "10rem",
    backgroundColor: colorName,
    margin: "10% 40%",
  };
  return (
    <div>
      {/* <div style={styleProps}>
            <h1>Color name is {styleProps.backgroundColor}</h1>
        </div>
        <InputColorComponent parentProp={styleProps}></InputColorComponent> */}
      {/* <TaskList></TaskList> */}
      hii dear
    </div>
  );
};

export default AnimationBox;
