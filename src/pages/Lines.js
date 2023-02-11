import styles from './Lines.css';

function Lines() {
  return (
    <div className={styles.viewport} id="viewport">
      <iframe src="/camera/index.html" title="Lines Page"></iframe>
    </div>
  );
}

export default Lines;
