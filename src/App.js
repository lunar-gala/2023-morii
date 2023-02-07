import { useState } from 'react';
import './App.css';
import Cursor from './components/Cursor';
import Nav from './components/Nav';

function App() {
  const [page, setPage] = useState('home');

  return (
    <>
      <Nav page={page} setPage={setPage} />
      <div className="viewport" id="viewport">
        {/* placeolder for now :P */}
        <iframe
          width="100%"
          height="100%"
          frameborder="0"
          src="/lines/index.html"
          title="Lines Page"
        ></iframe>
      </div>
      <Cursor />
    </>
  );
}

export default App;
