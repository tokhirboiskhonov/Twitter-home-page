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


function Menu({lang}) {
    // console.log(lang);
    return(
        <>
        <nav className="nav">
        <a href="#Link">
        <img className="twitter__logo" src={twitterLogo}
        alt="Twitter-Logo"
        width={40}
        height={33} />
        </a>
        
        <ul className="nav__list">
        <li className="nav__item">
        <img className="nav__img" src={home}
        alt="home-icon"
        width={26}
        height={24} />
        
        <a className="nav__links" href='#Link'>{languages[lang].menu.nav.navItem1}</a>
        </li>


        <li className="nav__item">
        <img className="nav__img" src={explore}
        alt="explore-icon"
        width={23}
        height={23} />
        
        <a className="nav__link" href="#Link">{languages[lang].menu.nav.navItem2}</a>
        </li>

        <li className="nav__item">
        <img className="nav__img" src={notifications}
        alt="home-icon"
        width={23}
        height={23} />
        
        <a className="nav__link" href="#Link">{languages[lang].menu.nav.navItem3}</a>
        </li>

        <li className="nav__item">
        <img className="nav__img" src={message}
        alt="message-icon"
        width={28}
        height={28} />
        
        <a className="nav__link" href='#Link'>{languages[lang].menu.nav.navItem4}</a>
        </li>

        <li className="nav__item">
        <img className="nav__img" src={bookmarks}
        alt="bookmarks-icon"
        width={28}
        height={28} />

        <a className="nav__link" href="#Link">{languages[lang].menu.nav.navItem5}</a>
        </li>

        <li className="nav__item">
        <img className="nav__img" src={lists}
        alt="lists-icon"
        width={28}
        height={28} />
        
        <a className="nav__link" href="#Link">{languages[lang].menu.nav.navItem6}</a>
        </li>

        <li className="nav__item">
        <img className="nav__img" src={profile}
        alt="profile-icon"
        width={20}
        height={24} />
        
        <a className="nav__link" href="#Link">{languages[lang].menu.nav.navItem7}</a>
        </li>

        <li className="nav__item">
        <img className="nav__img" src={more}
        alt="more-icon"
        width={25}
        height={25} />
        
        <a className="nav__link" href="#Link">{languages[lang].menu.nav.navItem8}</a>
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