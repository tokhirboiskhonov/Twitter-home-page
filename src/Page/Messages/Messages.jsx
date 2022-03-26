import React from "react";
import './Messages.scss';
import useTheme from "../../Hooks/useTheme";

function Messages() {

    const [theme] =useTheme()

    return(
        <>
        <p className={`messages messages--${theme}`}>This page is being developed now</p>
        </>
    )
}

export default Messages;