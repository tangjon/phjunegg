import React from 'react'

const AboutDetail = function (props) {
    return (
        <div className="card-chip">
            <img src={props.image} className="card-image" alt=""></img>
            <div className="card-text">{props.title}</div>
        </div>
    )
}

export default AboutDetail