import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import './SideDrawer.css';
import Aux from '../../../hoc/Aux/Aux';
import Backdrop from '../../UI/Backdrop/Backdrop'

const sideDrawer = (props) => {

    let attachedClasses = ["SideDrawer", "Close"];

    if(props.open) {
        attachedClasses = ["SideDrawer", "Open"];
    }

    return (
        <Aux>
            <Backdrop 
                show={props.open}
                clicked={props.closed}/>
            <div className={attachedClasses.join(" ")} onClick={props.closed}>
            <div className="logo">
                <Logo />
            </div>
            
            <nav>
                <NavigationItems isAuthenticated={props.isAuth}/>
            </nav>
        </div>
        </Aux>
        
    );
}

export default sideDrawer;