import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import NavigationBar from './NavigationBar';
import Home from './Home';
import Profile from './Profile';
import Assignments from './Assignments'

export default class App extends React.Component{





  render(){
    return(
        <Router>

        <NavigationBar />

        <Switch>

        <Route exact path = '/' render={(renderProps)=><Home />}/>
        
        <Route exact path = '/profile' render={(renderProps)=><Profile />} />
        
        <Route exact path = '/assignments' render={(renderProps)=> <Assignments />} />

        </Switch>

        </Router>
    )
  }
}

