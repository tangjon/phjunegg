import React, {Component} from 'react';
import './About.css'
import AboutDetail from './AboutDetail'

class About extends Component {
    render() {
        return (
            <div id="section-about" className="section">
                <div className="section-title">ABOUT ME</div>
                <hr className="divider"></hr>
                <div className="container section-body mt-4">
                    <div className="d-flex flex-column flex-md-row justify-content-around chip-group">
                        <AboutDetail image={require('./microphone.png')} title={"STREAMER/ENTERTAINER"}/>
                        <AboutDetail image={require('./discord-partner.png')} title={"DISCORD PARTNER"}/>
                        <AboutDetail image={require('./card-stream-elements.png')} title={"DREAMTEAM"}/>
                        <AboutDetail image={require('./korean-flag.png')} title={"KOREAN"}/>
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