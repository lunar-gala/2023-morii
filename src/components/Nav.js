import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import cn from 'classnames';
import { motion } from 'framer-motion';
import { NAV } from '../assets/constants';
import mobile_btn from '../assets/mobile_btn.png';

import styles from './Nav.module.css';
import useWindowSize from '../hooks/useWindowSize';

export default function Nav({ about, setInitialView }) {
  const navigate = useNavigate();
  const activeRef = useRef();
  const ghostRef = useRef();
  const location = useLocation();
  const windowSize = useWindowSize();
  const isMobile = windowSize?.width < 768;

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
  const [details, setDetails] = useState(false);
  const [left, setLeft] = useState(0);
  const [hovered, setHovered] = useState(NAV.map((_) => false));

  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // the required distance between touchStart and touchEnd to be detected as a swipe
  const minSwipeDistance = 50;

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
    const cur = activeRef?.current;
    const ghost = ghostRef?.current;
    if (!cur || !ghost) return;
    const diff =
      ghost?.getBoundingClientRect().left - cur?.getBoundingClientRect().left;
    if (diff) setLeft(left + diff + 17 / 2);
  }, [activeRef.current, ghostRef.current]);

  const curIndex = NAV.findIndex(({ path }) => path === location.pathname);
  const transition = curIndex === 0 ? { duration: 3, delay: 4 } : { delay: 0 };

  const onTouchStart = (e) => {
    setTouchEnd(null); // otherwise the swipe is fired even with usual touch events
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    console.log('swipe', isLeftSwipe ? 'left' : 'right');
    if (isLeftSwipe && curIndex > 0) {
      console.log('left');
      navigate(NAV[curIndex - 1].path.replace('/', ''));
    } else if (isRightSwipe && curIndex < NAV.length - 1) {
      console.log('right');
      navigate(NAV[curIndex + 1].path.replace('/', ''));
    }
  };

  if (curIndex !== 0) setInitialView(true);

  return (
    (about || curIndex !== 0) && (
      <motion.div style={{ zIndex: 99, position: 'fixed' }}>
        <motion.div
          initial={{ top: isMobile ? '-51px' : '-100px', left: 0, right: 0 }}
          animate={{ top: '0px', left: '100px', right: '225px' }}
          transition={transition}
          className={cn(styles.border, styles.borderTop)}
          onAnimationComplete={() => {
            setDetails(true);
          }}
        ></motion.div>
        <motion.div
          initial={{
            bottom: isMobile ? '-151px' : '-100px',
            left: 0,
            right: 0,
          }}
          animate={{ bottom: '0px', left: '100px', right: '225px' }}
          transition={transition}
          className={cn(styles.border, styles.borderBottom)}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          onTouchMove={onTouchMove}
        ></motion.div>
        <motion.div
          initial={{ left: '-100px' }}
          animate={{ left: '0px' }}
          transition={transition}
          className={cn(styles.border, styles.borderLeft)}
        ></motion.div>
        <motion.div
          initial={{ right: '-226px' }}
          animate={{ right: '0px' }}
          transition={transition}
          className={cn(styles.border, styles.borderRight)}
        ></motion.div>
        {details && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className={styles.navContainer}
          >
            <div className={styles.navWrapper}>
              <motion.div
                className={styles.nav}
                transition={{ duration: 0.2 }}
                initial={{ left: 0 }}
                animate={{ left: `${left}px` }}
              >
                {NAV.map(({ path, title, coming }, index) =>
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
                    <Link
                      key={path}
                      to={path}
                      onMouseEnter={() =>
                        setHovered((hovered) => {
                          hovered[index] = true;
                          return hovered;
                        })
                      }
                      onMouseOut={() =>
                        setHovered((hovered) => {
                          hovered[index] = false;
                          return hovered;
                        })
                      }
                      className={cn(
                        coming && styles.coming,
                        hovered[index] && coming && styles.comingSoon
                      )}
                    >
                      {hovered[index] && coming ? `Coming ${coming}` : title}
                    </Link>
                  )
                )}
              </motion.div>
              <p ref={ghostRef} className={styles.ghost}>
                {NAV[curIndex].title}
              </p>
            </div>
            <img
              className={styles.mobileBtn}
              src={mobile_btn}
              alt="morii mobile home button"
            />
          </motion.div>
        )}
        {details && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className={styles.corners}
          >
            <p>40.44362, -79.94158</p>
            <p className={styles.date}>3 - 18&nbsp;&nbsp;YR 2023</p>
            <p
              className={styles.countdown}
            >{`${countdown.days}D:${countdown.hours}H:${countdown.minutes}H:${countdown.seconds}S`}</p>
            <p className={styles.morii}>Lunar Gala - Morii</p>
          </motion.div>
        )}
      </motion.div>
    )
  );
}
