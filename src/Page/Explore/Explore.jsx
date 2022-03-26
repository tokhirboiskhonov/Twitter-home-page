import React from "react";
import './Explore.scss';
import useTheme from "../../Hooks/useTheme";

function Explore() {

    const [theme] =useTheme()

    return(
        <>
        <p className={`explore explore--${theme}`}>This page is being developed now</p>
        </>
    )
}

export default Explore;