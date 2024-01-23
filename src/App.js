import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
} from "react-router-dom";
import RegistrationForm from "./Components/FormImplementation/RegistrationForm";
import NewTaskList from "./Components/NewTaskImplementation/NewTaskList";
import AnimationBox from "./Components/parentComponent";
import routes from "./routes";

function App() {
  // const { username } = useParams();

  return (
    <>
      {/* <AnimationBox></AnimationBox> */}
      {/* <NewTaskList></NewTaskList> */}
      {/* <Router>
        <Routes>
          <Route path="/" element={<AnimationBox />} />
          <Route path="/about/:username" element={<NewTaskList />} />
        </Routes>
      </Router> */}

      <Router>
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} {...route} />
          ))}
        </Routes>
      </Router>

      {/* <RegistrationForm></RegistrationForm> */}
    </>
  );
}

export default App;

//dummy changes
