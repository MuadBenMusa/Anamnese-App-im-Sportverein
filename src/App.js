import React, { Component } from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Athlete  from './components/Athlete';
import TrainingsPlan from './components/TrainingsPlan';
import Exercise from './components/Exercise';
import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/Exercise" component={Exercise}/>
          <Route path="/Athlete" component={Athlete}/>
          <Route path="/TrainingsPlan" component={TrainingsPlan}/>
        </Switch>
      </div>
      </BrowserRouter>
    );
  }
}
export default App;