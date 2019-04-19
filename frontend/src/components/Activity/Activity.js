import React, {Component} from 'react';
import './Activity.css'


class Activity extends Component {

    componentDidMount() {
    }

    render() {
        return (
            <div id="section-activity" className="section">
                <div className="section-title">ACTIVITY</div>
                <hr className="divider"></hr>
                <div className="container section-body mt-4 flex-column flex-md-row">
                    <div id="card-twitter" className="card-rectangle">
                        <div className="card-text">TWITTER</div>
                        <a className="twitter-timeline" data-width="470" data-height="1000"
                           href="https://twitter.com/h7une?ref_src=twsrc%5Etfw">Tweets by h7une</a>
                    </div>
                    {/*<div id="card-schedule" className="card-rectangle">*/}
                        {/*<img style={{height: "852px"}} src={require("./Image 2.png")} alt=""></img>*/}
                        {/*<iframe title={"cat"}  src={"https://www.twitch.tv/popout/hjune/extensions/uaw3vx1k0ttq74u9b2zfvt768eebh1/panel"}>s</iframe>*/}
                    {/*</div>*/}
                </div>
            </div>
        );
    }
}

export default Activity