import { useEffect } from 'react';
import styles from './Lines.module.css';

function Lines({ setCursor }) {
  useEffect(() => {
    window.document.addEventListener('single_line', handleEvent, false);
    function handleEvent(e) {
      console.log('single_line event fired', e.detail); // outputs: {foo: 'bar'}
    }
  }, []);

  return (
    <div
      className={styles.viewport}
      id="viewport"
      onMouseLeave={() => setCursor(true)}
      onMouseOver={() => setCursor(false)}
    >
      <iframe src="/camera/index.html" title="Lines Page"></iframe>
    </div>
  );
}

export default Lines;
