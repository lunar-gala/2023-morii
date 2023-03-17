import styles from './MobileLine.module.css';
import bg from '../assets/lines-bg.png';

import useWindowSize from '../hooks/useWindowSize';
import { SHOW_ORDER, MOBILE_ICONS } from '../assets/lines';

function MobileLine() {
  const windowSize = useWindowSize();
  return (
    <div className={styles.container}>
      <div className={styles.bg}>
        <img alt="lines page background" src={bg} />
      </div>
      {SHOW_ORDER.map((line) => {
        const { x, y, img } = MOBILE_ICONS[line];
        let xc = (windowSize?.width / 2671) * 3;
        let yc = (windowSize?.height / 1728) * 2.5;
        return (
          <img
            style={{
              width: '150px',
              position: 'absolute',
              top: `${yc * y + 40}px`,
              left: `${xc * x - 50}px`,
            }}
            alt="lines page background"
            src={img}
          />
        );
      })}
    </div>
  );
}

export default MobileLine;
