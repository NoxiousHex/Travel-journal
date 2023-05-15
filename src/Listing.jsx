import React from "react"

export default function Listing(props) {
    const {imgUrl, location, mapsUrl, title, startDate, endDate, description} = props
    return (
        <div className="listing">
            <img className="entry-img" src={imgUrl} />
            <div className="location">
                <i className="fa-sharp fa-solid fa-location-dot" style={{color: "#f55a5a", fontSize: "1.3em"}}></i>
                <h2>{location}</h2>
                <a href={mapsUrl}>View on Google Maps</a>
            </div>
            <h1>{title}</h1>
            <h3>{startDate} - {endDate}</h3>
            <p>{description}</p>
        </div>
    )
}