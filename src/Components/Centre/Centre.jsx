import React from "react";
import './Centre.scss';
import stars from '../../Assets/Image/stars.svg';
import boburImg from '../../Assets/Image/Bobur.svg';
import image from '../../Assets/Image/image.svg';
import gif from '../../Assets/Image/gif.svg';
import stats from '../../Assets/Image/stats.svg';
import smile from '../../Assets/Image/smile.svg';
import schedule from '../../Assets/Image/schedule.svg';
import designsta from '../../Assets/Image/designsta.svg';
import cloutexhibition from '../../Assets/Image/cloutexhibition.svg';
import comment from '../../Assets/Image/comment.svg'
import share from '../../Assets/Image/share.svg'
import shareGreen from '../../Assets/Image/sharegreen.svg';
import like from '../../Assets/Image/like.svg';
import likeRed from '../../Assets/Image/likeRed.svg';
import download from '../../Assets/Image/download.svg';
import statistics from '../../Assets/Image/statistics.svg';
import creativephoto from '../../Assets/Image/CreativePhoto.svg';
import shashlik from '../../Assets/Image/shashlik.png';
import languages from "../Localization/Languages";

function Centre ({lang, setLang}) {

    return(
        <>
        
        <div className="centre__container">
        <header className='centre__heading'>
        <h1 className="home__title">{languages[lang].centre.hero.title}</h1>
        <img
        src={stars}
        alt="Stars"
        width={23}
        height={22}/>
        </header>

        <select className="select__languages" value={lang} onChange={(evt)=>setLang(evt.target.value)}>
        <option value="uz">UZ</option>
        <option value="ru">RU</option>
        <option value="en">EN</option>
        <option value="cn">CN</option>
        </select>
        
        <div className="centre__hero">
        <div className="centre__happening">
        
        <img
        className="bobur__img"
        src={boburImg}
        alt="Boburimg"
        width={60}
        height={60}/>
        
        <p className="centre__happening-text">{languages[lang].centre.hero.description}</p>
        
        </div>
        
        
        
        <ul className="img__list">
        <li className="img__item">
        <img src={image} alt="images" width={20} height={20} />
        </li>
        
        <li className="img__item">
        <img src={gif} alt="gif" width={21.5} height={20} />
        </li>
        
        <li className="img__item">
        <img src={stats} alt="statisc" width={24} height={24} />
        </li>
        
        <li className="img__item">
        <img src={smile} alt="smile" width={22} height={22} />
        </li>
        
        <li className="img__item">
        <img src={schedule} alt="schedule" width={24} height={24} />
        </li>
        </ul>
        
        <button className="centre__btn">Tweet</button>
        
        
        </div>
        
        <div className="centre__inner">
        
        <img
        className="user1__img"
        src={designsta}
        alt="designsta-img"
        width={60}
        height={60} />
        
        <div>
        <div className="user1__info">
        <h3 className="user1__title"><strong>Designsta</strong></h3>
        <p className="user1__mail">@inner · 25m</p>
        </div>
        <p className="user1__post">Twitterdagi ayol-erkak qarama-qarshiliginglardan o'zinglar zerikmadinglarmi?</p>
        
        <ul className="user1__list">
        
        <li className="user1__item">
        <img className="user1__image" src={comment} alt="comments" width={20} height={20} />
        <span className="user1__span">10</span>
        </li>
        
        <li className="user1__item">
        <img className="user1__image" src={share} alt="share" width={24} height={17} />
        <span className="user1__span">1</span>
        
        </li>
        
        <li className="user1__item">
        <img className="user1__image" src={like} alt="like" width={21} height={19} />
        <span className="user1__span">8</span>
        
        </li>
        
        <li className="user1__item">
        <img src={download} alt="download" width={20} height={20} />
        
        </li>
        
        <li className="user1__item">
        <img src={statistics} alt="statistics" width={24} height={24} />
        
        </li>
        
        </ul>
        </div>
        
        
        
        
        </div>
        
        <div className="centre__inner2">
        
        <img
        className="user2__img"
        src={cloutexhibition}
        alt="cloutexhibition-img"
        width={60}
        height={60} />
        
        <div>
        
        <div className="user2__info">
        
        <h3 className="user2__title"><strong>cloutexhibition</strong></h3>
        
        <p className="user2__mail">@RajLahoti · 22m</p>
        
        </div>
        
        <p className="user2__post">YPIP dasturining bu yilgi sezoni ham o’z nihoyasiga yetmoqda. Mentorlik davomida talaba va yangi bitiruvchilarni o’sayotganini ko’rib hursand bo’ladi odam.</p>
        
        <ul className="user1__list">
        
        <li className="user1__item">
        <img className="user1__image" src={comment} alt="comments" width={20} height={20} />
        </li>
        
        <li className="user1__item">
        <img className="user1__image" src={shareGreen} alt="share" width={24} height={17} />
        <span className="user1__span">5</span>
        
        </li>
        
        <li className="user1__item">
        <img className="user1__image" src={likeRed} alt="like" width={21} height={19} />
        <span className="user1__span">9</span>
        
        </li>
        
        <li className="user1__item">
        <img src={download} alt="download" width={20} height={20} />
        
        </li>
        
        <li className="user1__item">
        <img src={statistics} alt="statistics" width={24} height={24} />
        
        </li>
        
        </ul>
        </div>
        
        
        
        </div>
        
        <div className="centre__inner3">
        
        <img
        src={creativephoto}
        alt="cloutexhibition-img"
        width={60}
        height={60} />
        
        <div>
        
        <div className="user3__info">
        
        <h3 className="user3__title"><strong>CreativePhoto</strong></h3>
        
        <p className="user3__mail">@cloutexhibition · 1h</p>
        
        </div>
        
        <p className="user2__post">
        Обетда.....
        <br />
        Кечиринглар</p>
        
        
        </div>
        
        
        
        </div>
        
        <img className="shashlik__img" src={shashlik} alt="Shashlik" width={680} height={455} />
        
        <ul className="user1__list--3">
        
        <li className="user1__item">
        <img className="user1__image" src={comment} alt="comments" width={20} height={20} />
        <span className="user1__span">10</span>
        </li>
        
        <li className="user1__item">
        <img className="user1__image" src={share} alt="share" width={24} height={17} />
        <span className="user1__span">1</span>
        
        </li>
        
        <li className="user1__item">
        <img className="user1__image" src={like} alt="like" width={21} height={19} />
        <span className="user1__span">8</span>
        
        </li>
        
        <li className="user1__item">
        <img src={download} alt="download" width={20} height={20} />
        
        </li>
        
        <li className="user1__item">
        <img src={statistics} alt="statistics" width={24} height={24} />
        
        </li>
        
        </ul>
        
        
        </div>
        
        </>
        )
    }
    
    export default Centre;