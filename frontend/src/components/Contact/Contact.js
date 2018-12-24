import React, {Component} from 'react';
import './Contact.css'


class Contact extends Component {
    render() {
        return (
            <div id="section-contact" className="section">
                <div className="section-title">CONTACT</div>
                <hr className="divider"></hr>
                <div className="container section-body mt-4 flex-row">
                    <div className="section-text">
                        For Business Inquiries please contact me through the following platforms
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact