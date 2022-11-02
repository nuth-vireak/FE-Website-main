import React from 'react';
import './style/smallHeader.css'
import './style/smallHeaderMedia.css'

export default function SmallHeader({title,color})
{
    return (
        // <h2 className={`smallHeader`} style={{color:color}}>
        <h2 className={`menu-label`} style={{color:color}}>
            {title}
        </h2>
    );
}
SmallHeader.defaultProps =
    {
        color: "black"
    }


