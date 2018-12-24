import React, {Component} from 'react';
import './Header.css'
import honeyComb from './honey_comb_rust.png'
import korean_name from './korean_name.png'

class Header extends Component {
    render() {
        return (
            <div className="headerImage">
                <div id="text-content" className="d-flex flex-column">
                    <img style={{width: '108px'}} alt="" src={korean_name}></img>
                    <div style={{fontSize: "135px"}} className="">HI I'M HJUNE</div>
                    <hr className="divider"></hr>
                    <div className="d-flex flex-row">
                        <div style={{fontSize: "57px"}} className="">I PLAY RUST</div>
                        <img className="ml-2" style={{height: "62px"}} src={honeyComb} alt="honey_comb"></img>
                    </div>
                </div>
                    <div className="banner-social shadow d-flex flex-column flex-md-row text-center">
                        <a href="https://www.youtube.com/c/hjune" className="banner-section"><i
                            className="fab fa-youtube"/>Youtube
                            <div className="banner-stat text-center">
                                100K Subscribers
                            </div>
                        </a>
                        <a href="https://www.twitch.tv/hjune" className="banner-section"><i
                            className="fab fa-twitch"/>Twitch
                            <div className="banner-stat text-center">
                                51.4K Followers
                            </div>
                        </a>
                        <a href="https://discordapp.com/invite/hJune" className="banner-section"><i
                            className="fab fa-discord"/>Discord
                            <div className="banner-stat text-center">
                                3500 Members
                            </div>
                        </a>
                        <a href="https://twitter.com/h7une" className="banner-section"><i
                            className="fab fa-twitter"/>Twitter
                            <div className="banner-stat text-center">
                                4900 Followers
                            </div>
                        </a>
                </div>

            </div>
        );
    }
}

export default Header