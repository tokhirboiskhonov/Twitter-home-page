import React from "react";
import './Menu2.scss';
import twitterLogo from '../../Assets/Image2/twitter-logo.svg';
import home from '../../Assets/Image2/home.svg';
import explore from '../../Assets/Image2/explore.svg';
import notifications from '../../Assets/Image2/notifications.svg';
import message from '../../Assets/Image2/message.svg';
import bookmarks from '../../Assets/Image2/bookmarks.svg';
import lists from '../../Assets/Image2/lists.svg';
import profile from '../../Assets/Image2/profile.svg';
import more from '../../Assets/Image2/more.svg';
import boburImg from '../../Assets/Image2/Bobur.svg';


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
        
        <a className="nav__links" href='#Link'>Home</a>
        </li>


        <li className="nav__item">
        <img className="nav__img" src={explore}
        alt="explore-icon"
        width={23}
        height={23} />
        
        <a className="nav__link" href="#Link">Explore</a>
        </li>

        <li className="nav__item">
        <img className="nav__img" src={notifications}
        alt="home-icon"
        width={23}
        height={23} />
        
        <a className="nav__link" href="#Link">Notifications</a>
        </li>

        <li className="nav__item">
        <img className="nav__img" src={message}
        alt="message-icon"
        width={28}
        height={28} />
        
        <a className="nav__link" href='#Link'>Messages</a>
        </li>

        <li className="nav__item">
        <img className="nav__img" src={bookmarks}
        alt="bookmarks-icon"
        width={28}
        height={28} />

        <a className="nav__link" href="#Link">Bookmarks</a>
        </li>

        <li className="nav__item">
        <img className="nav__img" src={lists}
        alt="lists-icon"
        width={28}
        height={28} />
        
        <a className="nav__link" href="#Link">Lists</a>
        </li>

        <li className="nav__item">
        <img className="nav__img" src={profile}
        alt="profile-icon"
        width={20}
        height={24} />
        
        <a className="nav__link" href="#Link">Profile</a>
        </li>

        <li className="nav__item">
        <img className="nav__img" src={more}
        alt="more-icon"
        width={25}
        height={25} />
        
        <a className="nav__link" href="#Link">More</a>
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