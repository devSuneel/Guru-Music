
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/Search';
import Navbar from './components/Navbar';
function App() {
  return (
    <>
      <div className='body_content-wrapper'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />
        </Routes>
        <audio className='play_music' controls src="http://listen.vo.llnwd.net/g3/prvw/9/5/1/1/7/2489571159.mp3">
        </audio>
      </div>
    </>
  );
}

export default App;
