import { useEffect, useState } from 'react';
import styles from './Lines.module.css';
import { LINE_INFO } from '../assets/lines';
import { animationStates } from '../assets/constants';
import { motion } from 'framer-motion';

function Lines({ setCursor }) {
  const [line, setLine] = useState(undefined);
  useEffect(() => {
    window.document.addEventListener('single_line', handleEvent, false);
    function handleEvent(e) {
      setLine(e?.detail?.line);
      console.log('single_line event fired', e.detail?.line); // outputs: {foo: 'bar'}
    }
  }, []);

  return (
    <>
      <div
        className={styles.viewport}
        id="viewport"
        onMouseLeave={() => setCursor(true)}
        onMouseOver={() => setCursor(false)}
      >
        <iframe src="/camera/index.html" title="Lines Page"></iframe>
      </div>
      {line && <Line name={line} setLine={setLine} />}
    </>
  );
}

function Line({ name, setLine }) {
  const line = LINE_INFO[name];
  return (
    <motion.div
      variants={animationStates}
      initial="hidden"
      animate="visible"
      onClick={() => setLine(undefined)}
      className={styles.linesContainer}
    >
      <img src={line?.image} className={styles.linesImg} alt={line?.name} />
      {name}
    </motion.div>
  );
}

export default Lines;
