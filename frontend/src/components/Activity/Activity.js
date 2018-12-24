import React, {Component} from 'react';
import './Activity.css'


class Activity extends Component {
    render() {
        return (
            <div id="section-activity" className="section">
                <div className="section-title">ACTIVITY</div>
                <hr className="divider"></hr>
                <div className="container section-body mt-4 flex-row">
                    <div id="card-twitter" className="card-rectangle">
                        <div className="card-text">TWITTER</div>
                        <img style={{height: "852px"}} src={require("./Image 1.png")} alt=""></img>
                    </div>
                    <div id="card-schedule" className="card-rectangle">
                        <img style={{height: "852px"}} src={require("./Image 2.png")} alt=""></img>
                    </div>
                </div>
            </div>
        );
    }
}

export default Activity