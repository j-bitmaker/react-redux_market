import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { withService } from '../hoc';
import {PageHome, PageBask} from '../pages';
import AppHeader from '../app-header/';
import NavBar from '../nav-bar';
import './app.css';

const App = () =>{

    return(
        <Router>
                <div> 
                    <AppHeader/>
                    <NavBar/>
                    <div className="page">
                        <Switch>
                            <Route path='/' component={PageHome} exact/>
                            <Route path='/bask' component={PageBask}/>
                        </Switch>
                    </div>
                </div>
        </Router>
    )
}
export default withService()(App);