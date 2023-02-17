import { motion } from 'framer-motion';

import styles from './About.module.css';
import logo from '../assets/morii-logo.png';
import bunny from '../assets/WHITE.png';

function About() {
  return (
    <div className={styles.container}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 4 }}
        className={styles.view}
      >
        <img className={styles.bunbun} src={bunny} alt="year of the rabbit" />
        <p className={styles.welcome}>Welcome to</p>
        <img src={logo} alt="morii logo" />
        <p className={styles.welcome}>
          For this year's show, we would like to bring you along to witness how
          current student and alumni designers weave this otherwise
          indescribable feeling into wearable fashion.
        </p>
        <p>TAKE ONE LAST LOOK.</p>
        <p>Carnegie Music Hall. March 20, YEAR OF THE RABBIT. 7:30PM EST.</p>
      </motion.div>
    </div>
  );
}

export default About;
