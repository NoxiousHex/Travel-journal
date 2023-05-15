import React from "react"
import Listing from "./Listing"
import dataArr from "./data"
import {v4 as uuid} from "uuid"

export default function App(props) {
    const listings = dataArr.map(item => {
        const uniqueId = uuid()
        return (
        <Listing
            key={uniqueId}
            imgUrl={item.imageUrl} 
            location={item.location} 
            mapsUrl={item.googleMapsUrl}
            title={item.title}
            startDate={item.startDate}
            endDate={item.endDate}
            description={item.description}
        />
        )
    })
    return (
        <div id="container">
            <header>
                <i className="fa-solid fa-earth-americas" style={{color: "#ffffff", fontSize: "25px"}}></i>
                <p className="header-text">My travel journal.</p>
            </header>
            <main>
                {listings}
            </main>
        </div>
    )
}