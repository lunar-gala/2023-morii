import { useState } from 'react';
import { Route, Routes, HashRouter } from 'react-router-dom';

import './App.css';
import Cursor from './components/Cursor';
import Nav from './components/Nav';
import Landing from './pages/Landing';
import About from './pages/About';
import Lines from './pages/Lines';
import People from './pages/People';

function App() {
  const [firstLoad, setFirstLoad] = useState(false);

  return (
    <HashRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/lines" element={<Lines />} />
        <Route path="/people" element={<People />} />
      </Routes>
      <Cursor />
    </HashRouter>
  );
}

export default App;
