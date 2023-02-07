import React, { useEffect } from 'react';
import cn from 'classnames';

import styles from './Nav.module.css';
import { NAV } from '../assets/constants';
import battery from '../assets/icons/battery.png';

export default function Nav({ page, setPage }) {
  const countDownDate = new Date('Mar 18, 2023 19:00:00').getTime();

  useEffect(() => {
    let x = setInterval(function () {
      // Get today's date and time
      var now = new Date().getTime();

      // Find the distance between now and the count down date
      var distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Output the result in an element with id="demo"
      document.getElementById('countdown').innerHTML =
        days + 'D ' + hours + 'H ' + minutes + 'H ' + seconds + 'S ';

      // If the count down is over, write some text
      if (distance < 0) {
        clearInterval(x);
        document.getElementById('countdown').innerHTML = 'THE MOMENT HAS FLED';
      }
    }, 1000);
  }, []);

  return (
    <>
      <div className={cn(styles.border, styles.borderTop)}></div>
      <div className={cn(styles.border, styles.borderBottom)}></div>
      <div className={cn(styles.border, styles.borderLeft)}></div>
      <div className={cn(styles.border, styles.borderRight)}></div>
      <div className={styles.navContainer}>
        <ul className={styles.nav}>
          {NAV.map((nav) => (
            <li onClick={setPage(nav)}>{nav}</li>
          ))}
        </ul>
      </div>
      <div class={styles.topBar}>
        <p>24v</p>
        <p>RAW</p>
        <p id="countdown"></p>
        <img src={battery} alt="battery icon" />
        <p>72%</p>
      </div>
    </>
  );
}
