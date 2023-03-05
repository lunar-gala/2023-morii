import Landing from '../components/Landing';
import About from '../components/About';

function Home({ setInitialView, initialView, about, setAbout }) {
  return (
    <>
      <Landing about={about} setAbout={setAbout} />
      {about && <About firstLoad={initialView} />}
    </>
  );
}

export default Home;
