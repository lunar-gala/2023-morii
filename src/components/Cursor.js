import styles from './Cursor.module.css';

export default function Cursor({ mousePosition }) {
  return (
    <div
      style={{ left: `${mousePosition.x}px`, top: `${mousePosition.y}px` }}
      className={styles.cursor}
      id="cursor"
    ></div>
  );
}
