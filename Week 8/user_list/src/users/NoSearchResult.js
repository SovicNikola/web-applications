import React from 'react'
import sadface from '../images/images.png'

const NoSearchResult = () => {
    return (
        <div className="container">
            <div className="sad_icon"><img src={sadface} id="sadface" /></div>
            <p className="sad_icon">We couldn't find any people matching your search</p>
        </div>
    )
}

export default NoSearchResult