import React, {Component} from 'react';
import './Nav.css'
import {Link} from 'react-router-dom'

class Nav extends Component {
    constructor(props) {
        super(props);
        this.public_url = process.env.PUBLIC_URL
    }

    render() {
        return (
            <nav className="navbar navbar-expand-sm shadow fixed-top">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#headerNavBar"
                        aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <a className="flex-grow-1" href={this.public_url} style={{flex: '1 0 0', color: "white"}}>HJUNE.GG</a>
                <div className="collapse navbar-collapse justify-content-center" id="headerNavBar"
                     style={{flex: '2 0 0'}}>
                    <ul className="navbar-nav justify-content-around" style={{flex: '1 0 0'}}>
                        <li className="nav-item active">
                            <a className="nav-link" href={this.public_url + '/#card-schedule'}>SCHEDULE<span
                                className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href={this.public_url + '/#section-about'}>ABOUT</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href={this.public_url + '/#section-contact'}>CONTACT</a>
                        </li>
                        <li className="nav-item">
                            <Link to={`${process.env.PUBLIC_URL}/live`} className="nav-link">LIVE</Link>
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