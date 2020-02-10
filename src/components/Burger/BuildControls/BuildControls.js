import React from 'react';
import './BuildControls.css'
import BuildControl from './BuildControl/BuildControl'

const controls = [
    {label: 'Salad', type: 'salad' },
    {label: 'Bacon', type: 'bacon' },
    {label: 'Cheese', type: 'cheese' },
    {label: 'Meat', type: 'meat' }

];

const buildControls = (props) => {
    return(
        <div className="BuildControls">
            <span>Current price $ {props.price.toFixed(2)}</span>
            {controls.map(ctr => (
                <BuildControl 
                    key={ctr.label} 
                    label={ctr.label}
                    added={() => props.ingredientAdded(ctr.type)}
                    removed={() => props.ingredientRemoved(ctr.type)}
                    disabled={props.disabled[ctr.type]}/>
            ))}
            <button 
                className="OrderButton"
                disabled={!props.purchaseable}
                onClick={props.ordered}>{props.isAuth ? 'Order now' : 'Sign up to order'}</button>
        </div>
    );
}

export default buildControls;