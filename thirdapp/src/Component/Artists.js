import React from 'react';
import { Link } from 'react-router-dom';

const ArtistList = (props) => {
    const listArtist = ({artistsData}) => {
        if(artistsData){
            return artistsData.map((item) => {
                const style={
                    background:`url('/images/covers/${item.cover}.jpg')`
                }
                return(
                    <Link to={`/artist/${item.id}`} key={item.id} className="artist_item"
                    style={style}>
                        <div>{item.name}</div>
                    </Link>
                    
                )
            })
        }
       
    }

    return(
        <div className="artist_list">
            <h4>Browse the ArtistList</h4>
            {listArtist(props)}
        </div>
    )
}

export default ArtistList