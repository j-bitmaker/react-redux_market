import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {PageHome, PageCart, PageHelp} from '../pages';
import AppHeader from '../app-header/';
import NavBar from '../../containers/for-nav-bar';
import CountBar from '../../containers/for-count-bar';
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
                            <Route path='/help' component={PageHelp}/>
                            <Route path='/cart' component={PageCart}/> 
                        </Switch>
                    </div>
                    <div className = 'count-bar'>
                    <CountBar/>
                    </div>
                </div>
        </Router>
    )
}
export default App;