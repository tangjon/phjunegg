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
                    <div id="btn-group" className="d-flex flex-column">
                        <button id="btn-channel" className="btn btn-danger"><i className="fab fa-youtube mr-2"></i>Channel
                        </button>
                        <button id="btn-stream" className="btn btn-primary"><i className="fab fa-twitch mr-2"></i>Stream
                        </button>
                    </div>

                </div>
            </div>
        );
    }
}

export default Header