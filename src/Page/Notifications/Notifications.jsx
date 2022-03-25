import React from "react";
import './Notifications.scss';
import useTheme from "../../Hooks/useTheme";

function Notifications() {

    const [theme] =useTheme()

    return(
        <>
        <p className={`notifications notifications--${theme}`}>This page isn't working</p>
        </>
    )
}

export default Notifications;