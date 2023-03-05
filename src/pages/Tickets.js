import styles from './Tickets.module.css';
import { TIERS } from '../assets/constants';

function Tickets() {
  return (
    <div className={styles.container}>
      <div className={styles.bg}></div>
      <div className={styles.view}>
        <h1 className={styles.title}>Tickets</h1>
        <ul className={styles.pricing}>
          {TIERS.map(({ tier, price, bonus }) => (
            <li key={tier}>
              <p className={styles.tier}>{tier}</p>
              <div className={styles.dot}></div>
              <p className={styles.price}>${price}</p>
              {bonus && <p className={styles.bonus}>{bonus}</p>}
            </li>
          ))}
        </ul>
        <div className={styles.purchase}>
          <a
            target="_blank"
            href="https://carnegiemellontickets.universitytickets.com"
          >
            PURCHASE
          </a>
        </div>
      </div>
    </div>
  );
}

export default Tickets;
