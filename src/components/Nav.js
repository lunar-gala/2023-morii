import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import cn from 'classnames';
import { motion } from 'framer-motion';
import { NAV } from '../assets/constants';

import styles from './Nav.module.css';

export default function Nav({ about }) {
  const activeRef = useRef();
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
  const [navTranslation, setNavTranslation] = useState(0);

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

  useEffect(() => {
    setNavTranslation(activeRef.current.offsetLeft);
  }, [activeRef.current]);

  const curIndex = NAV.findIndex(({ path }) => path === location.pathname);

  return (
    (about || curIndex === 0) && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={curIndex === 0 ? { duration: 3, delay: 4 } : { delay: 0 }}
        style={{ zIndex: 99, position: 'fixed' }}
      >
        <div className={cn(styles.border, styles.borderTop)}></div>
        <div className={cn(styles.border, styles.borderBottom)}></div>
        <div className={cn(styles.border, styles.borderLeft)}></div>
        <div className={cn(styles.border, styles.borderRight)}></div>
        <div className={styles.navContainer}>
          <motion.div
            className={styles.nav}
            style={{ transform: `translateX(-${navTranslation}px)` }}
            transition={{ duration: 0.2 }}
            animate={{ transform: `translateX(-${navTranslation}px)` }}
          >
            {NAV.map(({ path, title }, index) =>
              index === curIndex ? (
                <Link
                  key={path}
                  className={styles.active}
                  to={path}
                  ref={activeRef}
                >
                  {title}
                </Link>
              ) : (
                <Link key={path} to={path}>
                  {title}
                </Link>
              )
            )}
          </motion.div>
        </div>
        <div className={styles.corners}>
          <p
            className={styles.countdown}
          >{`${countdown.days}D:${countdown.hours}H:${countdown.minutes}H:${countdown.seconds}S`}</p>
          <p>40.44362, -79.94158</p>
          <p className={styles.morii}>Lunar Gala - Morii</p>
          <p className={styles.date}>3 - 18&nbsp;&nbsp;YR 2023</p>
        </div>
      </motion.div>
    )
  );
}
