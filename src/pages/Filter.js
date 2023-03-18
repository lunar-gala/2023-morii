import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { FILTERS } from '../assets/lines';
import styles from './Filter.module.css';
import delicacy from '../assets/delicacy_icon.jpg';
import wei_lai from '../assets/weilai_icon.jpg';

function Filter() {
  const { id } = useParams();

  useEffect(() => {
    if (!(id === 'wei_lai' || id === 'delicacy'))
      window.location.href = FILTERS[id];
  }, []);

  return (
    <>
      {id === 'wei_lai' || id === 'delicacy' ? (
        <div className={styles.container}>
          <p className={styles.select}>Select to activate filter</p>
          <a href={FILTERS.wei_lai} className={styles.link}>
            <img src={wei_lai} alt="delicacy icon" />
            <p>Wei•Lai</p>
          </a>
          <a href={FILTERS.delicacy} className={styles.link}>
            <img src={delicacy} alt="delicacy icon" />
            <p>Delicacy</p>
          </a>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

export default Filter;
