import React, { Component } from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

import Home from './pages/Home';
import RandomFact from './pages/RandomFact';
import TicTacToe from './pages/TicTacToe';
import Navigation from './pages/Navigation';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/RandomFact" element={<RandomFact />} />
            <Route path="/TicTacToe" element={<TicTacToe />} />
            <Route path="*" element={<React.Fragment />} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
