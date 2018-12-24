import React, {Component} from 'react';
import './App.css';
import Nav from "./components/Header/Nav/Nav";
import Twitch from "./components/Embedded/Twitch/Twitch";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import FrontPage from "./front-page";

class App extends Component {
    render() {
        return (
            <Router basename='/project-streamer'>
                <div id="router">
                    <Nav/>
                    <Route exact path={`${process.env.PUBLIC_URL}/`} component={FrontPage}/>
                    <Route path={`${process.env.PUBLIC_URL}/live`} component={Twitch}/>
                </div>
            </Router>
        );
    }
}

export default App;
