import React, {Component} from 'react';
import './Twitch.css'
import Script from 'react-load-script'

class Twitch extends Component {

    constructor(props) {
        super(props);
        console.log("TEST")
    }

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