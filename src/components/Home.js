import React, { useEffect, useState } from 'react'
import { FaRegPlayCircle } from "@react-icons/all-files/fa/FaRegPlayCircle";
import { HiPause } from "react-icons/hi";
import './Home.css';
function Home() {
  const [top, setTop] = useState([]);
  const [obj, setObj] = useState([]);
  useEffect(() => {
    var a = async () => {
      const res = await fetch('https://api.napster.com/v2.1/tracks/top?apikey=N2VmMTg3YWYtNWZhZi00ZmZjLTk0ZWUtOWIzOTIwOTVhNGQx&limit=200');
      const result = await res.json();
      console.log(result)
      setObj(result.tracks);
    }
    var top_artist = async () => {
      const res = await fetch('https://api.napster.com/v2.1/artists/top?apikey=N2VmMTg3YWYtNWZhZi00ZmZjLTk0ZWUtOWIzOTIwOTVhNGQx&limit=6');
      const result = await res.json();
      console.log(result)
      setTop(result.artists);
    }
    top_artist();
    a();
  }, []);
  let audio_play = (evt) => {
    let all_audio = document.querySelectorAll('audio');
    let all_play = document.querySelectorAll('.play_button');
    let all_pause = document.querySelectorAll('.pause_button');
    all_play.forEach((item) => {
      item.classList.remove('hidden');
    })
    all_pause.forEach((item) => {
      item.classList.add('hidden');
    })
    all_audio.forEach((item) => {
      item.pause();
    })
    let current = evt.currentTarget.parentElement;
    console.log(current)
    evt.currentTarget.classList.add('hidden');
    current.querySelector('.pause_button').classList.remove('hidden');
    let audio = current.querySelector('audio').getAttribute('src');
    console.log(audio)
    let play_music = document.querySelector('.play_music');
    play_music.setAttribute('src', audio);
    play_music.play();
  }
  let audio_pause = (evt) => {
    evt.currentTarget.classList.add('hidden');
    evt.currentTarget.parentElement.querySelector('.play_button').classList.remove('hidden');
    document.querySelector('.play_music').pause();
  }
  return (
    <>
      <div className='parent-container'>
        <div className='header'>
          <div className='container'>
            <h2>Hii Dear !</h2>
            <div className='popuplar--artist'>
              {
                top.map((item, index) => (
                  <div key={item.id}>
                    <h4>{item.name}</h4>
                    <img width="50px" height="50px" src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
                  </div>
                ))
              }
            </div>
          </div>
        </div>
        <div className='wrapper container'>
          <audio controls src='../AudioSong/WOH(PagalWorld.com.se).mp3'></audio>
          {
            obj.map((item) => (
              <div className='media-wrapper'>
                <div className='media'>
                  <h2 key={item.id}>{item.artistName}</h2>
                  <img key={item.id} src={`http://direct.rhapsody.com/imageserver/v2/albums/${item.albumId}/images/300x300.jpg`} />
                  <audio className='hidden'
                    controls
                    src={item.previewURL}>
                    <a href={item.previewURL}>
                      Download audio
                    </a>
                  </audio>
                  <button className='play_button audio_button' onClick={audio_play}>
                    <FaRegPlayCircle />
                  </button>
                  <button className='pause_button hidden audio_button' onClick={audio_pause}>
                    <HiPause />
                  </button>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Home