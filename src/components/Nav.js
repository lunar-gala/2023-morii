import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import { AnimatePresence, motion } from 'framer-motion';
import { animationStates, transition } from '../assets/constants';

import styles from './Nav.module.css';
import battery from '../assets/icons/battery.png';

export default function Nav() {
  const countDownDate = new Date('Mar 18, 2023 19:00:00').getTime();

  const getCountdown = () => {
    const now = new Date().getTime();

    // Find the distance between now and the count down date
    const distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo"
    return `${days}D ${hours}H ${minutes}H ${seconds}S`;
  };

  const [countdown, setCountdown] = useState(getCountdown());

  useEffect(() => {
    let x = setInterval(function () {
      // Get today's date and time
      const now = new Date().getTime();

      // Find the distance between now and the count down date
      const distance = countDownDate - now;

      // If the count down is over, write some text
      if (distance < 0) {
        clearInterval(x);
        setCountdown('THE MOMENT HAS FLAD');
      } else {
        setCountdown(getCountdown());
      }
    }, 1000);
  }, []);

  return (
    <motion.div variants={animationStates} initial="hidden" animate="visible">
      <div className={cn(styles.border, styles.borderTop)}></div>
      <div className={cn(styles.border, styles.borderBottom)}></div>
      <div className={cn(styles.border, styles.borderLeft)}></div>
      <div className={cn(styles.border, styles.borderRight)}></div>
      <div className={styles.navContainer}>
        <div className={styles.nav}>
          <Link to="/">About</Link>
          <Link to="/lines">Lines</Link>
          <Link to="/people">People</Link>
        </div>
      </div>
      <div className={styles.topBar}>
        <p>24v</p>
        <p>RAW</p>
        <p id="countdown">{countdown}</p>
        <img src={battery} alt="battery icon" />
        <p>72%</p>
      </div>
    </motion.div>
  );
}
