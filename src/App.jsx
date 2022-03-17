import React from 'react';
import './App.scss';
import Centre from './Components/Centre/Centre';
import Menu from './Components/Menu/Menu';
import Rightside from './Components/Rightside/Rightside';

function App() {

  const [lang, setLang] = React.useState('en');
  return (
    <>
    <div className='container'>
    <Menu  lang={lang}/>
    <Centre lang={lang} setLang={setLang}/>
    <Rightside lang={lang}/>
    </div>
    </>
  );
}

export default App;
