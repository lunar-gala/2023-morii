import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';

function App() {
  const [page, setPage] = useState('home');

  return (
    <>
      <Nav page={page} setPage={setPage} />
      <div class="viewport" id="viewport">
        {/* placeolder for now :P */}
        <img src="placeholder.png" alt="placeholder" />
      </div>
    </>
  );
}

export default App;
