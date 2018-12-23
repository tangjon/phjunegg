import React, {Component} from 'react';
import './Nav.css'

class Nav extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm shadow">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#headerNavBar"
                        aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <a className="flex-grow-1" href="#temp" style={{flex: '1 0 0'}}>HJUNE.GG</a>
                <div className="collapse navbar-collapse justify-content-center" id="headerNavBar" style={{flex: '2 0 0'}}>
                    <ul className="navbar-nav justify-content-around" style={{flex: '1 0 0'}}>
                        <li className="nav-item active">
                            <a className="nav-link" href="#temp">SCHEDULE<span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#temp">ABOUT</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#temp">CONTACT</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#temp">CONTACT</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#temp">MERCH</a>
                        </li>
                    </ul>
                </div>
                <div id="social-icons" className="text-center" style={{flex: '1 0 0'}}>
                    <i className="fab fa-twitch"></i>
                    <i className="fab fa-discord"></i>
                    <i className="fab fa-youtube"></i>
                    <i className="fab fa-twitter"></i>
                </div>
            </nav>
        );
    }
}

export default Nav