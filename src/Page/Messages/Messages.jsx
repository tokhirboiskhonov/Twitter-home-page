import React from "react";
import './Messages.scss';
import useTheme from "../../Hooks/useTheme";

function Messages() {

    const [theme] =useTheme()

    return(
        <>
        <p className={`messages messages--${theme}`}>This page isn't working</p>
        </>
    )
}

export default Messages;