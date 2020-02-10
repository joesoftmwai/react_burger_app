import React from 'react';
import './Button.css';

const button = (props) => (
    <button 
        className={["Button", props.btnType].join(" ")}
        onClick={props.clicked}
        disabled={props.disabled}>{props.children}</button>
);

export default button;