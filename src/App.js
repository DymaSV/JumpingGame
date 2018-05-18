import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './components/Main';
import About from './components/About';
import NavBar from './components/Navbar';
import GameCanvas from './components/game/Game';
import './App.css';

class App extends Component {
   
    render() {
        return (
            <div className="Router">
            <NavBar/>
                <Router>
                    <Switch>
                        <Route exact path="/" component={()=><Main/>} />
                        <Route exact path="/about" children={()=><About/>} />
                        <Route exact path="/game" component={()=><GameCanvas/>} />
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;
