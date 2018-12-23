import React, {Component} from 'react';
import './App.css';
import Nav from "./components/Header/Nav/Nav";
import Header from "./components/Header/Header/Header";
import About from "./components/About/About"
class App extends Component {
    render() {
        return (
            <div className="App">
                <Nav/>
                <Header/>
                <About/>
            </div>
        );
    }
}

export default App;
