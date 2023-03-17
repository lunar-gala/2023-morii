import { motion } from 'framer-motion';
import { useState } from 'react';

import styles from './About.module.css';
import logo from '../assets/morii-logo-big.png';
import bunny from '../assets/bunny.gif';
import { aboutAnimation } from '../assets/constants';

function About({ firstLoad }) {
  const [bun, setBun] = useState(false);
  const location_text =
    'Wiegand Gym. March 18, \n YEAR OF THE RABBIT. Doors Open 7:30PM EST.';
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
          the desire to capture a fleeting experience. A show sharing a deep
          appreciation for the ephemeral, and encouraging us to slow down, savor
          the moment, and cultivate gratitude for the fleeting experiences which
          make life rich and meaningful. Join us to witness how this otherwise
          indescribable feeling weaves into fashion.
        </motion.p>
        <motion.p
          initial="hidden"
          variants={aboutAnimation}
          animate="visible"
          className={styles.lastLook}
          custom={3}
        >
          COME TAKE ONE LAST LOOK.
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
