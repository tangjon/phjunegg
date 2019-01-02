import React from 'react'

class AboutDetail extends React.Component {
    render() {
        return (
            <div className="card-chip">
                <img src={this.props.image} className="card-image" alt=""></img>
                <div className="card-text">{this.props.title}</div>
            </div>
        )
    }
}

export default AboutDetail