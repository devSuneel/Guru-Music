import React, { useEffect } from 'react'
import { FaRegPlayCircle } from "@react-icons/all-files/fa/FaRegPlayCircle";
import { HiPause } from "react-icons/hi";
import './Home.css';
import { useState } from 'react';
export default function Music() {
  const [album, setAlbum] = useState([]);

  useEffect(() => {
    importAll(require.context('../AudioSong', true, /\.(mp3)$/), require.context('../AudioSong', true, /\.(png|jpe?g|svg)$/));
    // const images = importAll(require.context('../AudioSong', true, '/\.png/'));
    function importAll(r, q) {
      let images = {};
      let data = [];
      r.keys().map((item, index) => {
        let song = {
          music: r(item),
          images: 0
        };
        data.push(song);
      });
      q.keys().map((item, index) => {
        data[index].images = q(item);
      });
      setAlbum(data);
    }
  }, [])
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
        <div className='wrapper container'>
          {
            album.map((item) => (
              <div className='media-wrapper'>
                <div className='media'>
                  <img src={item.images} />
                  <audio className='hidden'
                    controls
                    src={item.music}>
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
