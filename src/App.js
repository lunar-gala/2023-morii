import { useState, useEffect } from 'react';
import { Route, Routes, HashRouter } from 'react-router-dom';

import './typography.css';
import './App.css';
import Cursor from './components/Cursor';
import Nav from './components/Nav';
import Home from './pages/Home';
import People from './pages/People';
import Lines from './pages/Lines';
import Tickets from './pages/Tickets';
import Filter from './pages/Filter';

function App() {
  const [about, setAbout] = useState(false);
  const [initialView, setInitialView] = useState(true);
  const [cursor, setCursor] = useState(true);
  const [firstMove, setFirstMove] = useState(false);

  const [mousePosition, setMousePosition] = useState({ x: null, y: null });

  useEffect(() => {
    const mouseMoveHandler = (event) => {
      console.log('mousemove');
      const { clientX, clientY } = event;
      setMousePosition({ x: clientX - 30, y: clientY - 30 });
      setFirstMove(true);
    };
    document.addEventListener('mousemove', mouseMoveHandler);

    setAbout(window.sessionStorage.getItem('introViewed') === 'true');
    setInitialView(window.sessionStorage.getItem('introViewed') === 'true');
  }, []);

  return (
    <HashRouter>
      <Nav about={about} setInitialView={setInitialView} />

      <Routes>
        <Route
          path="/"
          element={
            <Home initialView={initialView} about={about} setAbout={setAbout} />
          }
        />
        <Route path="/tickets" element={<Tickets />} />
        <Route path="/filter/:id" element={<Filter />} />
        <Route path="/people" element={<People setCursor={setCursor} />} />
        <Route path="/lines" element={<Lines setCursor={setCursor} />} />
      </Routes>
      {firstMove && cursor && <Cursor mousePosition={mousePosition} />}
    </HashRouter>
  );
}

export default App;
