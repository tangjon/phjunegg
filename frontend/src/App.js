import React, {Component} from 'react';
import './App.css';
import Nav from "./components/Header/Nav/Nav";
import Header from "./components/Header/Header/Header";
import About from "./components/About/About"
import Activity from "./components/Activity/Activity";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";
class App extends Component {
    render() {
        return (
            <div className="App">
                <Nav/>
                <Header/>
                <About/>
                <Activity/>
                <Contact/>
                <Footer/>
            </div>
        );
    }
}

export default App;
