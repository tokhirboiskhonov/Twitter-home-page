import React from 'react';
import './App.scss';
// import Centre from './Components/Centre/Centre';
import Menu from './Components/Menu/Menu';
import Rightside from './Components/Rightside/Rightside';

import {Routes, Route } from 'react-router-dom';
import Home from './Page/Home/Home';
import Explore from './Page/Explore/Explore';
import Notifications from './Page/Notifications/Notifications';
import Messages from './Page/Messages/Messages';
import Bookmarks from './Page/Bookmarks/Bookmarks';
import Lists from './Page/Lists/Lists';
import Profile from './Page/Profile/Profile';
import More from './Page/More/More';

function App() {
  
  const [lang, setLang] = React.useState('en');
  return (
    <>
    <div className='container'>
      <Menu/>
    <Routes>
    <Route path="/" element={<Home  lang={lang}/>}/>
    <Route path="/explore" element={<Explore lang={lang} setLang={setLang}/>}/>
    <Route path="/notifications" element={<Notifications lang={lang} setLang={setLang}/>}/>
    <Route path="/messages" element={<Messages lang={lang} setLang={setLang}/>}/>
    <Route path="/bookmarks" element={<Bookmarks lang={lang} setLang={setLang}/>}/>
    <Route path="/lists" element={<Lists lang={lang} setLang={setLang}/>}/>
    <Route path="/profile" element={<Profile lang={lang} setLang={setLang}/>}/>
    <Route path="/more" element={<More lang={lang} setLang={setLang}/>}/>
    </Routes>
    <Rightside/>
    
    </div>
    </>
    );
  }
  export default App;
  