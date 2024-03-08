import './App.css';
import Homescreen from './components/Homescreen';
import Sidebar from './components/Sidebar';
import Sideicons from './components/Sideicons';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Contactscreen from './components/Contactscreen';
import Aboutscreen from './components/Aboutscreen';
import Certificatescreen from './components/Certificatescreen';
import Resumescreen from './components/Resumescreen';

const App = () => {
  return (

    <div className="App">

      <Router>
        <Sideicons />
        <Sidebar />

        <Switch>
          <Route exact path="/">
            <Homescreen />
          </Route>
          <Route exact path="/contact">
            <Contactscreen />
          </Route>
          <Route exact path="/about">
            <Aboutscreen />
          </Route>
          <Route exact path="/certificates">
            <Certificatescreen />
          </Route>
          <Route exact path="/resume">
            <Resumescreen />
          </Route>
     

        </Switch>


      </Router >



    </div >

  );
}

export default App;
