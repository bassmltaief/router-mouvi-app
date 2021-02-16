import React from 'react'
import ReactStars from "react-rating-stars-component";

const Hed = ({ handleChange, handleChange1,ratingChanged }) => {
   
    return (
        <div className="head">
            <h1 >Movie application</h1>
            
                <input type="text"
                    onChange={handleChange}
                    placeholder="Search for movies Name" />
                <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={24}
                    activeColor="#ffd700"
                />
                
            
        </div>
    )
}

export default Hed
