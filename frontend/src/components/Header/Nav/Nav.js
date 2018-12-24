import React, {Component} from 'react';
import './Nav.css'

class Nav extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm shadow fixed-top">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#headerNavBar"
                        aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <a className="flex-grow-1" href="/" style={{flex: '1 0 0', color:"white"}}>HJUNE.GG</a>
                <div className="collapse navbar-collapse justify-content-center" id="headerNavBar"
                     style={{flex: '2 0 0'}}>
                    <ul className="navbar-nav justify-content-around" style={{flex: '1 0 0'}}>
                        <li className="nav-item active">
                            <a className="nav-link" href="#card-schedule">SCHEDULE<span
                                className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#section-about">ABOUT</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#section-contact">CONTACT</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/live">LIVE</a>
                        </li>
                    </ul>
                </div>
                <div id="social-icons" className="text-center" style={{flex: '1 0 0'}}>
                    <a href="https://www.twitch.tv/hjune">
                        <i className="fab fa-twitch"></i>
                    </a>
                    <a href="https://discordapp.com/invite/hJune">
                        <i className="fab fa-discord"></i>
                    </a>
                    <a href="https://www.youtube.com/c/hjune">
                        <i className="fab fa-youtube"></i>
                    </a>
                    <a href="https://twitter.com/h7une">
                        <i className="fab fa-twitter"></i>
                    </a>
                </div>
            </nav>
        );
    }
}

export default Nav