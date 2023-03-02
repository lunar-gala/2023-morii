import styles from './Tickets.module.css';
import { TIERS } from '../assets/constants';

function Tickets() {
  return (
    <div className={styles.container}>
      <div className={styles.view}>
        <h1 className={styles.title}>Tickets</h1>
        <ul className={styles.pricing}>
          {TIERS.map(({ tier, price, bonus }) => (
            <li>
              <p className={styles.tier}>{tier}</p>
              <div className={styles.dot}></div>
              <p className={styles.price}>${price}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Tickets;
