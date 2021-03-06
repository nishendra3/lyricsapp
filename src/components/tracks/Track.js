import React from 'react'
import {Link} from 'react-router-dom'

const Track = (props) => {
  const { track } = props;
  const newTo = { 
    pathname: `lyrics/track/${track.track_id}`, 
    param1: "Par1" 
  };
  return (
    <div className='col-md-6'>
        <div className='card mb-4 shadow-sm'>
            <div className='card-body'>
                <h5>{track.artist_name}</h5>
                <p className='card-text'>
                  <strong><i className='fas fa-play'></i> Track</strong>: {track.track_name}
                  <br />
                  <strong><i className='fas fa-compact-disc'></i> Album</strong>: {track.album_name}
                </p>
                <Link to={newTo} className="btn btn-dark btn-block" >
                  <i className='fas fa-chevron-right'></i> view lyrics
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Track
