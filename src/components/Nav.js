import React from 'react';
import cn from 'classnames';

import styles from './Nav.module.css';
import { NAV } from '../assets/constants';

export default function Nav({ page, setPage }) {
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
    </>
  );
}
