import React from 'react'
import { Link } from 'react-router-dom'
import { FaSearch } from "react-icons/fa";
import { AiOutlineHome } from "react-icons/ai";
import { SiPlaystation } from "react-icons/si";
import { MdAudiotrack } from "react-icons/md";
function Navigationbar() {
  return (
    <header>
      <div className='logo'><SiPlaystation size={ 70 } /><label>Music</label></div>
      <ul className='navbar'>
        <li>
          <Link to='/'><AiOutlineHome size={ 30 } /><label>Home</label></Link>
        </li>
        <li>
        <Link to='search'><FaSearch size={ 30 } /><label>Search</label></Link>
        </li>
        <li>
          <Link to='audio'><MdAudiotrack size={ 30 } /><label>Audio</label></Link>
        </li>
      </ul>
    </header>
  )
}

export default Navigationbar