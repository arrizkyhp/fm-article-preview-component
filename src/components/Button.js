import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom'

export default function Button(props) {
    const className = [props.className];

    if(props.isPrimary) className.push("btn-primary")

     const onClick = () => {
       if (props.onClick) props.onClick();
     };

     if(props.type === "link") {
         if(props.isExternal) {
             return (
                 // eslint-disable-next-line
                 <a
                    href={props.href}
                    className={className.join(" ")}
                    style={props.style}
                    target={props.target === "_blank" ? "_blank" : undefined}
                    rel={props.target === "_blank" ? "noopener noreferrer" : undefined}
                >
                    {props.children}
                </a>

             )
         } else {
             return (
                 <Link
                    to={props.href}
                    className={className.join(" ")}
                    style={props.style}
                    onClick={onClick}
                 >
                    {props.children}
                 </Link>
             )
         }
     }

    return (
       <button
            className={className.join(" ")}
            style={props.style}
            onClick={onClick}
        >
            {props.children}
        </button>

    )
}

Button.propTypes = {
    type: propTypes.oneOf(["button", "link"]),
    onClick: propTypes.func,
    target: propTypes.string,
    href: propTypes.string,
    className: propTypes.string,
    isPrimary: propTypes.bool,
    isExternal: propTypes.bool,
}