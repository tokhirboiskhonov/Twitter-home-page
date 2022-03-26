import React from "react";
import './Bookmarks.scss';
import useTheme from "../../Hooks/useTheme";

function Bookmarks() {

    const [theme] =useTheme()

    return(
        <>
        <p className={`bookmarks bookmarks--${theme}`}>This page is being developed now</p>
        </>
    )
}

export default Bookmarks;