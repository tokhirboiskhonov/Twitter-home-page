import React from "react";
import './Side2.scss';
import sideBobur from '../../Assets/Image2/sidebobur.svg';
import sideFriend from '../../Assets/Image2/sidefriends.svg';
import sideSmile from '../../Assets/Image2/sidesmile.svg';
import sideChat from '../../Assets/Image2/sidechat.svg';
import sideSometing from '../../Assets/Image2/sidesomething.svg';
import sideMem from '../../Assets/Image2/sidemem.svg';
import Mushtariy from '../../Assets/Image2/Mushtariy.svg';
import Shukhratbek from '../../Assets/Image2/Shukhratbek.svg';
import Settings from '../../Assets/Image2/settings.svg';

function Side() {
    return(
        <>
        <div className="side__container">

        <input className="side__input" type="text" placeholder="Search Twitter" required/>

        <ul className="img__list">
            <li className="img__item">
                <img src={sideBobur} alt="img"  width={123} height={88}/>
            </li>
            <li className="img__item">
                <img src={sideFriend} alt="img"  width={123} height={88}/>
            </li>
            <li className="img__item">
                <img src={sideSmile} alt="img"  width={123} height={88}/>
            </li>
            <li className="img__item">
                <img src={sideChat} alt="img" width={123} height={88} />
            </li>
            <li className="img__item">
                <img src={sideSometing} alt="img" width={123} height={88} />
            </li>
            <li className="img__item">
                <img src={sideMem} alt="img"  width={123} height={88}/>
            </li>
        </ul>

        <ul className="list">
        <li className="item">
        <h2 className="h2">You might like</h2>
        </li>
        
        <li className="item item--1">
        <img className="mushtariy__img" src={Mushtariy} alt="Mushtariy__avatar" width={60} height={60} />
        
        <div>
        <h3 className="h3">Mushtariy</h3>
        <a className="mushtariy__link" href="#Link">@Mushtar565266</a>
        </div>
        
        <button className="follow__btn">Follow</button>
        </li>

        <li className="item item--2">
        <img className="shukhratbek__img" src={Shukhratbek} alt="Shukhratbek__avatar" width={60} height={60} />
        
        <div>
        <h3 className="h3">Shuhratbek</h3>
        <a className="shukhratbek__link" href="#Link">@mrshukhrat</a>
        </div>
        
        <button className="follow__btn">Follow</button>
        </li>

        <li>
        <a className="item__link" href="#Link">Show more</a>
        </li>
        
        </ul>

        <ul className="trend__list">
        <li>
        <div className="trend__div">
        <h2 className="trend__heading">Trends for you</h2>
        <img
        className="trend__img"
        src={Settings}
        alt="settings"
        width={21}
        height={21}/>    
        </div>
        
        <div className="trend__text--dot">
        <p className="trend__text">Trending in Germany</p>
        <span className="tripledot">...</span> 
        </div>
        </li>
        
        <li>
        <h3 className="revolution__title">Revolution</h3>
        <p className="revolution__text" >50.4K Tweets</p>
        <div className="trend__text--dot">
        <p className="trend__text">Trending in Germany</p>
        <span className="tripledot">...</span> 
        </div>
        </li>
        
        <li>
        <h3 className="revolution__title">Revolution</h3>
        <p className="revolution__text" >50.4K Tweets</p>
        <div className="trend__text--dot">
        <p className="trend__text">Trending in Germany</p>
        <span className="tripledot">...</span> 
        </div>
        </li>
        
        <li>
        <h3 className="revolution__title">Revolution</h3>
        <p className="revolution__text" >50.4K Tweets</p>
        <a className="revolution__link" href="#Link">Show more</a>
        </li>
        </ul>

        </div>
        </>
    )
}

export default Side;