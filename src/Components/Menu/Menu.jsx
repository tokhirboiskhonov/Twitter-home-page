import React from "react";
import './Menu.scss';
import twitterLogo from '../../Assets/Image/twitter-logo.svg';
import home from '../../Assets/Image/home.svg';
import explore from '../../Assets/Image/explore.svg';
import notifications from '../../Assets/Image/notifications.svg';
import message from '../../Assets/Image/message.svg';
import bookmarks from '../../Assets/Image/bookmarks.svg';
import lists from '../../Assets/Image/lists.svg';
import profile from '../../Assets/Image/profile.svg';
import more from '../../Assets/Image/more.svg';
import boburImg from '../../Assets/Image/Bobur.svg';
import languages from "../Localization/Languages";
import {NavLink} from 'react-router-dom';
import useTheme from "../../Hooks/useTheme";
import useLanguages from "../../Hooks/useLanguages";


function Menu() {
    const [lang] = useLanguages();

    const [theme] =useTheme()
    
    return(
        <>
        <nav className={`nav nav--${theme}`}>
        <a href="#Link">
        <img className="twitter__logo" src={twitterLogo}
        alt="Twitter-Logo"
        width={40}
        height={33} />
        </a>
        
        <ul className="nav__list">
        <li className="nav__item">
        <img className={`nav__img nav__img--${theme}`} src={home}
        alt="home-icon"
        width={26}
        height={24} />
        
        <NavLink className="nav__links" to=''>{languages[lang].menu.nav.navItem1}</NavLink>
        </li>
        
        
        <li className="nav__item">
        <img className={`nav__img nav__img--${theme}`} src={explore}
        alt="explore-icon"
        width={23}
        height={23} />
        
        <NavLink className="nav__link" to='/explore'>{languages[lang].menu.nav.navItem2}</NavLink>
        </li>
        
        <li className="nav__item">
        <img className={`nav__img nav__img--${theme}`} src={notifications}
        alt="home-icon"
        width={23}
        height={23} />
        
        <NavLink className="nav__link" to='/notifications'>{languages[lang].menu.nav.navItem3}</NavLink>
        </li>
        
        <li className="nav__item">
        <img className={`nav__img nav__img--${theme}`} src={message}
        alt="message-icon"
        width={28}
        height={28} />
        
        <NavLink className="nav__link" to='/messages'>{languages[lang].menu.nav.navItem4}</NavLink>
        </li>
        
        <li className="nav__item">
        <img className={`nav__img nav__img--${theme}`} src={bookmarks}
        alt="bookmarks-icon"
        width={28}
        height={28} />
        
        <NavLink className="nav__link" to='/bookmarks'>{languages[lang].menu.nav.navItem5}</NavLink>
        </li>
        
        <li className="nav__item">
        <img className={`nav__img nav__img--${theme}`} src={lists}
        alt="lists-icon"
        width={28}
        height={28} />
        
        <NavLink className="nav__link" to='/lists'>{languages[lang].menu.nav.navItem6}</NavLink>
        </li>
         
        <li className="nav__item">
        <img className={`nav__img nav__img--${theme}`} src={profile}
        alt="profile-icon"
        width={20}
        height={24} />
        
        <NavLink className="nav__link" to='/profile'>{languages[lang].menu.nav.navItem7}</NavLink>
        </li>
        
        <li className="nav__item">
        <img className={`nav__img nav__img--${theme}`} src={more}
        alt="more-icon"
        width={25}
        height={25} />
        
        <NavLink className="nav__link" to='/more'>{languages[lang].menu.nav.navItem8}</NavLink>
        </li>
        </ul>
        
        <button className="tweet__btn">Tweet</button>
        
        <div className="bobur__box">
        <img
        className="bobur__img"
        src={boburImg}
        alt="Boburimg"
        width={50}
        height={50}/>
        
        <div className="bobur__info">
        <h2 className="bobur__name">Bobur</h2>
        <p className="bobur__mail">@bobur_mavlonov</p>
        </div>
        </div>
        
        </nav>
        </>
        )
    }
    
    export default Menu;