import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Trending from '../trending/trending';
import Favorites from '../favorites/favorites';
import Feed from '../feed/feed';
import Library from '../library/library';
import Player from '../player/player';
import "./home.css";
import Sidebar from '../../components/sidebar';

export default function home() {
  return (
    <Router>
      <div className='main-body'>
        <Sidebar/>

        <Routes>
            <Route path=" /" element={<Library />} />
            <Route path=" /feed" element={<Feed />} />
            <Route path=" /trending" element={<Trending />} />
            <Route path=" /player" element={<Player />} />
            <Route path=" /favorites" element={<Favorites />} />
        </Routes>


      </div>
    
    </Router>
  )
}
