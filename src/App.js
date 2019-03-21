import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetails from './components/projects/ProjectDetails'
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import CreateProject from './components/projects/CreateProject';
import posed, { PoseGroup } from 'react-pose';

const RouteContainer = posed.div({
  enter: { opacity: 1, delay: 50, beforeChildren: true },
  exit: { opacity: 0 }
});

class App extends Component {
  render() {
    console.log(this.props)
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route render={({ location }) => (
            <PoseGroup>
              <RouteContainer key={location.pathname}>
                <Switch location={location}>
                  <Route exact path='/' component={Dashboard} />
                  <Route path='/project/:id' component={ProjectDetails} />
                  <Route path='/signin' component={SignIn} />
                  <Route path='/signup' component={SignUp} />
                  <Route path='/createProject' component={CreateProject} />
                </Switch>
              </RouteContainer>
            </PoseGroup>
          )} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
