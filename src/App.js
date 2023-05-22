import React from 'react';
import './style.css'

import { Container, SearchBar, NavBar } from './components'

const API_URL = 'https://www.omdbapi.com?apikey=139a80cf';

const App = () => {
  return (
    <div className="fullPage">
      < NavBar />
      < Container />       
    </div>
  )
}

export default App