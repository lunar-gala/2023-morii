import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import cn from 'classnames';
import { motion } from 'framer-motion';

import styles from './Nav.module.css';
import battery from '../assets/icons/battery.png';

export default function Nav({ about }) {
  const location = useLocation();
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
    return {
      days,
      hours,
      minutes,
      seconds,
    };
  };

  const initial = getCountdown();
  const [countdown, setCountdown] = useState(initial);

  useEffect(() => {
    let x = setInterval(function () {
      // Get today's date and time
      const now = new Date().getTime();

      // Find the distance between now and the count down date
      const distance = countDownDate - now;

      // If the count down is over, write some text
      if (distance < 0) {
        clearInterval(x);
      } else {
        setCountdown(getCountdown());
      }
    }, 1000);
  }, []);

  return (
    (about || location.pathname !== '/') && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3, delay: 2 }}
        style={{ zIndex: 999, position: 'fixed' }}
      >
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
          <p>{`${countdown.days}D:${countdown.hours}H:${countdown.minutes}H:${countdown.seconds}S`}</p>
        </div>
      </motion.div>
    )
  );
}
