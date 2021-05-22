import React, { useState } from 'react';

const Tile = props => {
    const [readMore, setReadMore] = useState(true);

    const paragraph = props.displayText;
    const readMoreStyle = {
        color: "blue",
        fontStyle: "italic"
    };

    const handleClick = () => {
        setReadMore(prevValue => !prevValue);
    }

    return (<div className="container">
        <div className="card-horizontal">
            <img className="card-img small-img" src={props.imagePath} alt={props.altText}></img>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p id="tile-content">
                    {(readMore && paragraph.length > 200) ? paragraph.substring(0, 200).concat("...") : paragraph}
                    {(readMore && paragraph.length > 200) ? <span style={readMoreStyle} onClick={handleClick}>Read More</span> : <span style={readMoreStyle} onClick={handleClick}> Show Less</span>}
                </p>
            </div>
        </div>
    </div>);
}

export default Tile;
