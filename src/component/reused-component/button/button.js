import React from 'react';
import './button.css'
import { Link } from 'react-router-dom';
function Button({ label, outlineStyle, link }) {
    return (
        <Link to={link}>
            <button className={`button ${outlineStyle}`}>
                <p className={"button-label"}>
                    {label}
                </p>
            </button>
        </Link>
    );
}

Button.defaultProps =
{
    outlineStyle: "",
}

export default Button;