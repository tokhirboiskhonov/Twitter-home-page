import React from "react";
import './More.scss';
import useTheme from "../../Hooks/useTheme";

function More() {

    const [theme] =useTheme()

    return(
        <>
        <p className={`more more--${theme}`}>This page isn't working</p>
        </>
    )
}

export default More;