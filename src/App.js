import { useState, useEffect } from 'react';
import { Route, Routes, HashRouter } from 'react-router-dom';

import './App.css';
import Cursor from './components/Cursor';
import Nav from './components/Nav';
import Home from './pages/Home';
import Lines from './pages/Lines';
import People from './pages/People';

function App() {
  useEffect(() => {
    const loaded = sessionStorage.getItem('loaded');
  }, []);

  const [firstLoad, setFirstLoad] = useState(false);
  const [cursor, setCursor] = useState(true);

  return (
    <HashRouter>
      {!firstLoad && <Nav />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lines" element={<Lines setCursor={setCursor} />} />
        <Route path="/people" element={<People />} />
      </Routes>
      {cursor && <Cursor />}
    </HashRouter>
  );
}

export default App;
