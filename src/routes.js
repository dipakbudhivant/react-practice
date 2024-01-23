// routes.js

import { lazy } from "react";
import NewTaskList from "./Components/NewTaskImplementation/NewTaskList";
// import AnimationBox from "./Components/parentComponent";

const AnimationBox = lazy(() => import("./Components/parentComponent"));
const InputColorComponent = lazy(() => import("./Components/childComponent"));

const routes = [
  { path: "/", element: <AnimationBox /> },
  { path: "/about", element: <NewTaskList /> },
  { path: "/about/:username", element: <NewTaskList /> },
  { path: "/asd", element: <InputColorComponent /> }, // Add more routes as needed
  { path: "/asd/asd", element: <InputColorComponent /> }, // Add more routes as needed
];

export default routes;
