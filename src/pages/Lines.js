import { useEffect, useState } from 'react';
import styles from './Lines.module.css';

function Lines({ setCursor }) {
  const [line, setLine] = useState(-1);
  useEffect(() => {
    window.document.addEventListener('single_line', handleEvent, false);
    function handleEvent(e) {
      setLine(e?.detail?.line ?? -1);
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
      {line >= 0 && <Line num={line} setLine={setLine} />}
    </>
  );
}

function Line({ num, setLine }) {
  return (
    <div onClick={() => setLine(-1)} className={styles.linesContainer}>
      {num}
    </div>
  );
}

export default Lines;
