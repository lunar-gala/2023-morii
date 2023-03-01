import { motion } from 'framer-motion';

import styles from './About.module.css';
import logo from '../assets/morii-logo-big.png';
import bunny from '../assets/WHITE.png';
import { aboutAnimation } from '../assets/constants';

function About({ firstLoad }) {
  return (
    <motion.div
      initial={firstLoad ? {} : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2.5 }}
      className={styles.container}
    >
      <motion.div className={styles.view}>
        <motion.p
          variants={aboutAnimation}
          animate="visible"
          initial="hidden"
          className={styles.welcome}
          custom={0.3}
        >
          Welcome to
        </motion.p>
        <motion.div
          initial="hidden"
          variants={aboutAnimation}
          animate="visible"
          custom={1.5}
          className={styles.logo}
        >
          <motion.img src={logo} alt="morii logo" />
        </motion.div>
        <motion.p
          initial="hidden"
          variants={aboutAnimation}
          animate="visible"
          custom={3}
        >
          For this year's show, we would like to bring you along to witness how
          current student and alumni designers weave this otherwise
          indescribable feeling into wearable fashion.
        </motion.p>
        <motion.p
          initial="hidden"
          variants={aboutAnimation}
          animate="visible"
          className={styles.lastLook}
          custom={3}
        >
          TAKE ONE LAST LOOK.
        </motion.p>
        <motion.p
          initial="hidden"
          custom={3}
          variants={aboutAnimation}
          animate="visible"
        >
          Carnegie Music Hall. March 18, YEAR OF THE RABBIT. 7:30PM EST.
        </motion.p>
      </motion.div>
    </motion.div>
  );
}

export default About;
