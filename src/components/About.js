import { motion } from 'framer-motion';
import { useState } from 'react';

import styles from './About.module.css';
import logo from '../assets/morii-logo-big.png';
import bunny from '../assets/bunny.gif';
import { aboutAnimation } from '../assets/constants';

function About({ firstLoad }) {
  const [bun, setBun] = useState(false);
  const location_text = 'Carnegie Music Hall. March 18, \n YEAR OF THE RABBIT. 7:30PM EST.';
  return (
    <motion.div className={styles.container}>
      {firstLoad ? (
        <div className={styles.backdrop}></div>
      ) : (
        <motion.div
          variants={aboutAnimation}
          animate="visible"
          initial="hidden"
          custom={1.5}
          className={styles.backdrop}
        ></motion.div>
      )}
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
          onAnimationComplete={() => setBun(true)}
        >
          {location_text}
        </motion.p>
      </motion.div>
      {bun && (
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={styles.bunbun}
          src={bunny}
          alt="bunny jumping"
        />
      )}
    </motion.div>
  );
}

export default About;
