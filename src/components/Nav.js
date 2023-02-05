import React from 'react';
import cn from 'classnames';

import styles from './Nav.module.css';

export default function Nav({ page, setPage }) {
  return (
    <div className={styles.container}>
      <div className={cn(styles.border, styles.borderTop)}></div>
      <div className={cn(styles.border, styles.borderBottom)}></div>
      <div className={cn(styles.border, styles.borderLeft)}></div>
      <div className={cn(styles.border, styles.borderRight)}></div>
      <div className={styles.navContainer}>
        <ul className={styles.nav}>
          <li>About</li>
          <li>Lines</li>
          <li>People</li>
          <li>Watch</li>
          <li>Tickets</li>
        </ul>
      </div>
    </div>
  );
}
