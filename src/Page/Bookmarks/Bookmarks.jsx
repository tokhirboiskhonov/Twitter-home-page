import React from "react";
import './Bookmarks.scss';
import useTheme from "../../Hooks/useTheme";

function Bookmarks() {

    const [theme] =useTheme()

    return(
        <>
        <p className={`bookmarks bookmarks--${theme}`}>This page isn't working</p>
        </>
    )
}

export default Bookmarks;