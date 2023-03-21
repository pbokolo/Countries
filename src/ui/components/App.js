import {Routes, Route} from "react-router-dom";

import { Home, Lost } from "../pages";
import "../style/main.scss";

function App() {
  return (
    <Routes className="app">
      <Route exact path="/" Component={Home}/>
      <Route exact path="*" Component={Lost}/>
    </Routes>
  );
}

export default App;
