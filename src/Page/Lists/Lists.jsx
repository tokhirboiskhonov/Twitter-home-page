import React from "react";
import './Lists.scss';
import useTheme from "../../Hooks/useTheme";

function Lists () {

    const [theme] =useTheme()

    return(
        <>
        <p className={`lists lists--${theme}`}>This page isn't working</p>
        </>
    )
}

export default Lists;