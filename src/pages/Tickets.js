import styles from './Tickets.module.css';

function Tickets() {
  return (
    <div className={styles.container}>
      <div className={styles.view}>
        <h1 className={styles.title}>Tickets</h1>
        <ul>
          <li>
            <p>VIP 1</p>
            <div className={styles.dot}></div>
            <p>$65</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Tickets;
