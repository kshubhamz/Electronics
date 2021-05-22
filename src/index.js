import React from 'react';
import ReactDOM from 'react-dom';
import Tile from './Components/Card';
import tiles from './TextContent/SmallInfo';

ReactDOM.render(<div>
    {tiles.map(tile => {
    return (<Tile imagePath = {tile.source}
        altText = {tile.alt}
        title = {tile.title}
        displayText= {tile.paragraph} />
    );
})}
</div>, document.querySelector('#root'));
