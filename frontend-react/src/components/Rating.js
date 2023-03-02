import React from 'react'

const Rating = ({value,text,color}) => {
  return (
    <div className="rating">
        <span>
            {console.log(value)}
            <i style={{color:"red"}} className={value >= 3 ?'fas fa-star':value<3?'fa fa-star-half-alt':'fas fa-star'} ></i>
        </span>
    </div>
  )
}

export default Rating