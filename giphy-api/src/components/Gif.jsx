import React from 'react'
import "./Gif.css"
const Gif = ({title,url}) => {
    return (
        <a href={`#${title}`} className="gif">
            <h4>{title}</h4>
            <img src={url}/>
        </a>
    )
}

export default Gif
