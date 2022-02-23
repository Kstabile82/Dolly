
import React, { useState} from "react";
import { Switch, Route } from "react-router-dom";
import LogIn from "./Components/LogIn";
import image from './get_fit_2.jpg'
import About from "./Components/About";
import Header from "./Components/Header";
import ExerciseContainer from "./Components/ExerciseContainer";
// import Browse from "./Components/Browse";

function App() {
  const [page, setPage] = useState("/")
  return (
    <div className="App">
     <img className="pic" src={image} height={300} width={1200}></img>
      <Header onChangePage={setPage} />

      <Switch>
        <Route path="/LogIn">
          <LogIn />
        </Route>
        <Route path="/About">
          <About />
        </Route>
        <Route path="/Browse">
          <ExerciseContainer />
        </Route>
      </Switch>  
    </div>
  );
}

export default App;
