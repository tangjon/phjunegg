import React, {Component} from 'react';
import Header from "./components/Header/Header/Header";
import About from "./components/About/About";
import Activity from "./components/Activity/Activity";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";


class FrontPage extends Component {
    render() {
        return (
            <div id="frontpage">
                <Header/>
                <About/>
                <Activity/>
                <Contact/>
                <Footer/>
            </div>
        );
    }
}

export default FrontPage;
