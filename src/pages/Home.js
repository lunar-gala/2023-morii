// import styles from './Home.module.css';
import { useState } from 'react';

import Landing from '../components/Landing';
import About from '../components/About';

function Home({ about, setAbout }) {
  return (
    <>
      <Landing about={about} setAbout={setAbout} />
      {about && <About />}
    </>
  );
}

export default Home;
