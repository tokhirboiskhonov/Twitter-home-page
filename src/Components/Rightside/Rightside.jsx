import React from "react";
import './Rightside.scss';
import Search from '../../Assets/Image/search.svg';
import Settings from '../../Assets/Image/settings.svg';
import Mushtariy from '../../Assets/Image/Mushtariy.svg';
import Shukhratbek from '../../Assets/Image/Shukhratbek.svg';
import languages from "../../Components/Localization/Languages";
import useLanguages from "../../Hooks/useLanguages";

import useTheme from "../../Hooks/useTheme";


function Rightside() {
    
    const [lang] = useLanguages();
    
    const [theme] = useTheme();


    return(
        <>
        <div className={`rightside__container rightside__container--${theme}`}>
        <input className="rightside__input" type="text" placeholder={languages[lang].rightside.info.input} required/>
        <img
        className="search__img"
        src={Search}
        alt="Search on input"
        width={24}
        height={24}/>
        
        <ul className={`trend__list trend__list--${theme}`}>
        <li>
        <div className="trend__div">
        <h2 className="trend__heading">{languages[lang].rightside.info.title1}</h2>
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
        <h3 className="revolution__title">{languages[lang].rightside.info.title2}</h3>
        <p className="revolution__text" >50.4K Tweets</p>
        <div className="trend__text--dot">
        <p className="trend__text">Trending in Germany</p>
        <span className="tripledot">...</span> 
        </div>
        </li>
        
        <li>
        <h3 className="revolution__title">{languages[lang].rightside.info.title2}</h3>
        <p className="revolution__text" >50.4K Tweets</p>
        <div className="trend__text--dot">
        <p className="trend__text">Trending in Germany</p>
        <span className="tripledot">...</span> 
        </div>
        </li>
        
        <li>
        <h3 className="revolution__title">{languages[lang].rightside.info.title2}</h3>
        <p className="revolution__text" >50.4K Tweets</p>
        <a className="revolution__link" href="#Link">{languages[lang].rightside.info.link}</a>
        </li>
        </ul>
        
        <ul className={`list list--${theme}`}>
        <li className="item">
        <h2 className="h2">{languages[lang].rightside.info.title3}</h2>
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
        <a className="item__link" href="#Link">{languages[lang].rightside.info.link}</a>
        </li>
        
        </ul>

        <ul className={`last__list last__list--${theme}`}>
            <li className="last__list-item">
                <p className="last__text">Terms of Service</p>
            </li>

            <li className="last__list-item">
                <p>Privacy Policy</p>
            </li>

            <li className="last__list-item">
                <p>Cookie Policy</p>
            </li>    

            <li className="last__list-item">
                <p>Imprint</p>
            </li>

            <li className="last__list-item">
                <p>Ads Info</p>
            </li>

            <li className="last__list-item">
                <p>More ···</p>
            </li>

            <li className="last__list-item">
                <p>© 2021 Twitter, Inc.</p>
            </li>

            

        </ul>
        </div>
        </>
        )
        
    }
    
    export default Rightside;