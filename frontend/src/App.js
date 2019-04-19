import React, {Component} from 'react';
import './App.css';
import Nav from "./components/Header/Nav/Nav";
import Twitch from "./components/Embedded/Twitch/Twitch";
import {BrowserRouter as Router, Route} from "react-router-dom";
import FrontPage from "./front-page";

class App extends Component {
    render() {
        return (
            <Router basename="/phjunegg">
                <div id="router">
                    <Nav/>
                    <Route exact path='/' component={FrontPage}/>
                    <Route path="/live" component={Twitch}/>
                </div>
            </Router>
        );
    }
}

export default App;
