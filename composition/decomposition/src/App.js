import React from 'react';
import './App.css';
import Header from './components/Header';
import Search from './components/Search';
import Banner from './components/Banner';
import Media from './components/Media';

function App() {
  return (
    <div className="container">
      <Header />
      <Search />
      <Banner />
      <Media />
    </div>
  );
}

export default App;
