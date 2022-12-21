
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/Search';
import Navbar from './components/Navbar';
import  music  from './AudioSong/WOH(PagalWorld.com.se).mp3'
function App() {
  return (
    <>
      <div className='body_content-wrapper'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />
        </Routes>
        <audio className='play_music' controls src={ music }>
        </audio>
      </div>
    </>
  );
}

export default App;
