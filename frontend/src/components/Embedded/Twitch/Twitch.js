import React, {Component} from 'react';
import './Twitch.css'

class Twitch extends Component {

    componentDidMount() {
        window.loadTwitch();
    }

    render() {
        return (
            <div id="twitch-embed"></div>
        );
    }
}

export default Twitch