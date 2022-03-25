import React from "react";
import './Medium2.scss';
import Boburimg from '../../Assets/Image2/Bobur150x150.svg';
import Location from '../../Assets/Image2/location.svg';
import Skrips from '../../Assets/Image2/skrip.svg';
import Globus from '../../Assets/Image2/globus.svg';
import Kalendar from '../../Assets/Image2/kalendar.svg';
import Bobursmall from '../../Assets/Image2/Bobur60x60.svg';
import comment from '../../Assets/Image2/comment.svg'
import share from '../../Assets/Image2/share.svg'
import shareGreen from '../../Assets/Image2/sharegreen.svg';
import like from '../../Assets/Image2/like.svg';
import likeRed from '../../Assets/Image2/likeRed.svg';
import download from '../../Assets/Image2/download.svg';
import statistics from '../../Assets/Image2/statistics.svg';
import BoburBig from '../../Assets/Image2/Bobur680.png';
// import strelka from '../../Assets/Image/strelka.svg'

function Medium() {
    const [comments, setComments] = React.useState(10);
    const [shares, setShares] = React.useState(1);
    const [likes, setLikes] = React.useState(8);
    const [downloads, setDownloads] = React.useState(0);
    const [statistic, setStatistic] = React.useState(0);

    const [comments1, setComments1] = React.useState(0);
    const [shares1, setShares1] = React.useState(5);
    const [likes1, setLikes1] = React.useState(9);
    const [downloads1, setDownloads1] = React.useState(0);
    const [statistic1, setStatistic1] = React.useState(0);

    const [comments2, setComments2] = React.useState(10);
    const [shares2, setShares2] = React.useState(1);
    const [likes2, setLikes2] = React.useState(8);
    const [downloads2, setDownloads2] = React.useState(0);
    const [statistic2, setStatistic2] = React.useState(0);



    return(
        <>
        <div className="medium__container">
        <header className="header">
        {/* <img
        src={strelka}
        alt="Strelka to left"
        width={20}
    height={1} /> */}
    <h2 className="medium__title">Bobur</h2>
    <p className="medium__text">1,070 Tweets</p>
    
    </header>
    
    
    <main className="main">
    <div className="hero">
    <div className="inner">
    <img className="inner__img" src={Boburimg} alt="Bobur__avatar" />
    </div>
    
    <div className="wrapper">
    <a className="wrapper__link1" href="#Link">Edit profile</a>
    
    <h3 className="wrapper__heading">Bobur</h3>
    <a className="wrapper__link2" href="#Link">@bobur_mavlonov</a>
    <p className="wrapper__text">UX&UI designer at <a className="abutech" href="#Link">@abutechuz</a></p>
    
    <ul className="wrapper__list">
    <li className="wrapper__item">
    <img className="wrapper__image--icon" src={Location} alt="" width={18} height={20}/>
    <p>Mashag’daman</p>
    </li>
    <li className="wrapper__item">
    <img className="wrapper__image--icon" src={Skrips} alt="" width={19} height={20}/>
    <p>t.me/boburjon_mavlonov</p>
    </li>
    <li className="wrapper__item">
    <img className="wrapper__image--icon" src={Globus} alt="" width={17} height={20}/>
    <p>Born November 24, 2000</p>
    </li>
    <li className="wrapper__item">
    <img className="wrapper__image--icon" src={Kalendar} alt="" width={20} height={20}/>
    <p>Joined May 2020</p>
    </li>
    </ul>
    
    <div className="follow__div">
    <p className="follow__text1"><strong>67</strong> Following</p>
    
    <p className="follow__text2"><strong>47</strong> Followers</p>
    </div>
    
    <ul className="hero__list">
    <li className="hero__item">
    <a className="hero__link hero__link--strong" href="#Link">
    Tweets
    </a>
    </li>
    <li className="hero__item">
    <a className="hero__link hero__link--width" href="#Link">
    Tweets & replies
    </a>
    </li>
    <li className="hero__item">
    <a className="hero__link" href="#Link">
    Media
    </a>
    </li>
    <li className="hero__item">
    <a className="hero__link" href="#Link">
    Likes
    </a>
    </li>
    </ul>
    
    <div className="pinned__svg">
    
    <svg className="svg" width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.8625 10.675C13.55 9.22085 11.9108 7.75335 10.5208 7.23751L10.0675 3.11418L11.3133 1.24585C11.4441 1.04918 11.4566 0.797514 11.3441 0.590014C11.2325 0.381681 11.0175 0.254181 10.7816 0.254181H3.16497C2.92831 0.254181 2.71331 0.382514 2.60164 0.590014C2.48997 0.798347 2.50164 1.05085 2.63331 1.24668L3.88164 3.11918L3.47831 7.23835C2.08831 7.75501 0.450807 9.22168 0.14164 10.6683C0.108307 10.8017 0.128307 11.005 0.25164 11.1633C0.337473 11.2733 0.504973 11.405 0.818307 11.405H4.19997L6.61997 16.9983C6.68497 17.1517 6.83664 17.25 7.00164 17.25C7.16664 17.25 7.31831 17.1517 7.38497 16.9983L9.80414 11.4042H13.185C13.4983 11.4042 13.665 11.2742 13.7516 11.1658C13.8733 11.0092 13.895 10.8042 13.8641 10.6742L13.8625 10.675Z" fill="#536471"/>
    </svg>
    
    <p className="pinned">Pinned Tweet</p>
    
    </div>
    
    </div>
    
    <div className="medium__inner--1">
    
    <img
    className="user__img--medium1"
    src={Bobursmall}
    alt="bobur-60x60"
    width={60}
    height={60} />
    
    <div>
    <div className="user__info--medium1">
    <h3 className="user__title--medium1">Bobur</h3>
    <p className="user__mail--medium1">@bobur_mavlonov · Apr 1</p>
    </div>
    <p className="user__post--medium1">4-kursni tugatgunimcha kamida bitta biznesim bo'lishini, uylanish uchun moddiy jihatdan to'la-to'kis tayyor bo'lishni, sog'lik va jismoniy holatni normallashtirishni reja qildim</p>
    
    <ul className="user__list--medium1">
    
    <li className="user__item--medium1">
    <img className="user__image--medium1" src={comment} alt="comments" width={20} height={20}  onClick={()=> setComments(comments + 1)}/>
    {comments}
    <span className="user__span--medium1"></span>
    </li>
    
    <li className="user__item--medium1">
    <img className="user__image--medium1" src={share} alt="share" width={24} height={17} onClick={()=> setShares(shares + 1)}/>
    {shares}
    <span className="user__span--medium1"></span>
    
    </li>
    
    <li className="user__item--medium1">
    <img className="user__image--medium1" src={like} alt="like" width={21} height={19} onClick={()=> setLikes(likes + 1)}/>
    <span className="user__span--medium1"></span>
    {likes}
    </li>
    
    <li className="user__item--medium1">
    <img className="user__image--medium1" src={download} alt="download" width={20} height={20} onClick={()=> setDownloads(downloads + 1)} />
    {downloads}
    </li>
    
    <li className="user__item--medium1">
    <img className="user__image--medium1" src={statistics} alt="statistics" width={24} height={24} onClick={()=> setStatistic(statistic + 1)} />
    {statistic}
    </li>
    
    </ul>
    </div>
    
    
    
    
    </div>
    
    <div className="medium__inner--2">
    
    <img
    className="user__img--medium2"
    src={Bobursmall}
    alt="bobur-60x60"
    width={60}
    height={60} />
    
    <div>
    
    <div className="user__info--medium2">
    
    <h3 className="user__title--medium2">Bobur</h3>
    
    <p className="user__mail--medium2">@bobur_mavlonov · Apr 1</p>
    
    </div>
    
    <p className="user__post--medium2">Bizda shunaqa bir illat bor: gap bo'lsa bo'ldi, nima deyayotganimizga qarab ham o'tirmaymiz. 

Bitta biznes trener nito gapirib qo'ysa, hamma biznes trenerlar yomonga chiqadi slishkom aqlli odamlar nazdida. 

Gap faqat biznes trenerlar haqida emas.</p>
    
    <ul className="user__list--medium2">
    
    <li className="user__item--medium2">
    <img className="user__image--medium2" src={comment} alt="comments" width={20} height={20} onClick={()=> setComments1(comments1 + 1)} />
    {comments1}
    </li>
    
    <li className="user__item--medium2">
    <img className="user__image--medium2" src={shareGreen} alt="share" width={24} height={17} onClick={()=> setShares1(shares1 + 1)} />
    {shares1}
    
    </li>
    
    <li className="user__item--medium2">
    <img className="user__image--medium2" src={likeRed} alt="like" width={21} height={19} onClick={()=> setLikes1(likes1 + 1)} />
    {likes1}
    
    </li>
    
    <li className="user__item--medium2">
    <img className="user__image--medium2" src={download} alt="download" width={20} height={20} onClick={()=> setDownloads1(downloads1 + 1)} />
    {downloads1}
    </li>
    
    <li className="user__item--medium2">
    <img className="user__image--medium2" src={statistics} alt="statistics" width={24} height={24} onClick={()=> setStatistic1(statistic1 + 1)} />
    {statistic1}
    </li>
    
    </ul>
    </div>
    
    
    
    </div>
    
    <div className="medium__inner--3">
    
    <img
    src={Bobursmall}
    alt="bobur-60x60"
    width={60}
    height={60} />
    
    <div>
    
    <div className="user__info--medium3">

    <h3 className="user__title--medium3">Bobur</h3>
    
    <p className="user__mail--medium3">@bobur_mavlonov · Apr 1</p>
    
    </div>
    
    <p className="user__post--medium3">A bo'pti maskamasman</p>
    
    
    </div>
    
    
    
    </div>
    
    <img className="boburbig__img" src={BoburBig} alt="BoburImg" width={680} height={455} />
    
    <ul className="user__list--medium3">
    
    <li className="user__item--medium3">
    <img className="user__image--medium3" src={comment} alt="comments" width={20} height={20} onClick={()=> setComments2(comments2 + 1)} />
    {comments2}
    </li>
    
    <li className="user__item--medium3">
    <img className="user__image--medium3" src={share} alt="share" width={24} height={17} onClick={()=> setShares2(shares2 + 1)} />
    {shares2}
    </li>
    
    <li className="user__item--medium3">
    <img className="user__image--medium3" src={like} alt="like" width={21} height={19} onClick={()=> setLikes2(likes2 + 1)} />
    {likes2}
    
    </li>
    
    <li className="user__item--medium3">
    <img className="user__image--medium3" src={download} alt="download" width={20} height={20}  onClick={()=> setDownloads2(downloads2 + 1)}/>
    {downloads2}
    
    </li>
    
    <li className="user__item--medium3">
    <img className="user__image--medium3" src={statistics} alt="statistics" width={24} height={24} onClick={()=> setStatistic2(statistic2 + 1)} />
    {statistic2}
    </li>
    
    </ul>
    
    
    
    
    </div>
    </main>
    </div>
    
    </>
    )
}

export default Medium;