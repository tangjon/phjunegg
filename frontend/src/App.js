import React, {Component} from 'react';
import './App.css';
import Nav from "./components/Header/Nav/Nav";
import Header from "./components/Header/Header/Header";
import About from "./components/About/About"
import Activity from "./components/Activity/Activity";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";
import Twitch from "./components/Embedded/Twitch/Twitch";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import FrontPage from "./front-page";

class App extends Component {
    render() {
        return (
            <Router>
                <div id="router">
                    <Nav/>
                    <Route exact path={process.env.PUBLIC_URL + '/'} component={FrontPage}/>
                    <Route path={process.env.PUBLIC_URL + '/live'} component={Twitch}/>
                </div>
            </Router>
        );
    }
}

export default App;
