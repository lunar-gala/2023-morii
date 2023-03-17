import styles from './MobileLine.module.css';
import bg from '../assets/lines-bg.png';

function MobileLine() {
  return (
    <div className={styles.container}>
      <img className={styles.bg} alt="lines page background" src={bg} />
    </div>
  );
}

export default MobileLine;
