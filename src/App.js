
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Search from './components/Search';
import Audio from './components/MusicList';
import Navbar from './components/Navbar';
import music from './AudioSong/WOH.mp3'
import './components/loader.css';
function App() {
  return (
    <>
      <div class="loader">
        <span class="one"></span>
        <span class="two"></span>
        <span class="three"></span>
        <span class="four"></span>
      </div>
      <div className='body_content-wrapper'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='search' element={<Search />} />
          <Route path='audio' element={<Audio />} />
        </Routes>
        <audio className='play_music' controls src={music}>
        </audio>
      </div>
    </>
  );
}

export default App;
