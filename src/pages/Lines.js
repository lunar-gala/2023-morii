import { useEffect } from 'react';
import styles from './Lines.css';

function Lines() {
  useEffect(() => {
    window.document.addEventListener('single_line', handleEvent, false);
    function handleEvent(e) {
      console.log('single_line event fired', e.detail); // outputs: {foo: 'bar'}
    }
  }, []);

  return (
    <div className={styles.viewport} id="viewport">
      <iframe src="/camera/index.html" title="Lines Page"></iframe>
    </div>
  );
}

export default Lines;
