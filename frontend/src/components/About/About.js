import React, {Component} from 'react';
import './About.css'


class About extends Component {
    render() {
        return (
            <div id="section-about" className="section">
                <div className="section-title">ABOUT ME</div>
                <hr className="divider"></hr>
                <div className="container section-body mt-4">
                    <div className="d-flex flex-column flex-md-row justify-content-around chip-group">
                        <div className="card-chip">
                            <img src={require('./microphone.png')} className="card-image" alt=""></img>
                            <div className="card-text">STREAMER/ENTERTAINER</div>
                        </div>
                        <div className="card-chip">
                            <img src={require('./discord-partner.png')} className="card-image" alt=""></img>
                            <div className="card-text">DISCORD PARTNER</div>
                        </div>
                        <div className="card-chip">
                            <img src={require('./card-stream-elements.png')} className="card-image" alt=""></img>
                            <div className="card-text">DREAMTEAM</div>
                        </div>
                        <div className="card-chip">
                            <img src={require('./korean-flag.png')} className="card-image" alt=""></img>
                            <div className="card-text">KOREAN</div>
                        </div>
                    </div>
                    <div className="section-text">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                        of type and scrambled it to make a type specimen book.

                        It has survived not only five centuries, but also the leap into electronic typesetting,
                        remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
                        sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
                        Aldus PageMaker including versions of Lorem Ipsum
                    </div>
                </div>
            </div>
        );
    }
}

export default About