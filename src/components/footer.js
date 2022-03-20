import FavoriteIcon from '@material-ui/icons/Favorite';
import React from 'react'

function footer() {
  return (
    <div className='footer'>
        <div style={{fontSize:"22px"}}>By Tanmay with </div>
        <div>
        <FavoriteIcon style={{ color: "red" }} fontSize="medium"/>
        </div>
    </div>
  )
}

export default footer