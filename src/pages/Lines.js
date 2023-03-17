import { useEffect, useState } from 'react';
import styles from './Lines.module.css';
import { LINE_INFO } from '../assets/lines';
import { animationStates } from '../assets/constants';
import { motion } from 'framer-motion';
import cn from 'classnames';

import MobileLine from '../components/MobileLine';

import exit from '../assets/lines_exit.png';
import { SHOW_ORDER } from '../assets/lines';
import useWindowSize from '../hooks/useWindowSize';

function Lines({ setCursor }) {
  const windowSize = useWindowSize();
  const isMobile = windowSize?.width < 768;

  const [line, setLine] = useState(undefined);
  useEffect(() => {
    window.document.addEventListener('single_line', handleEvent, false);
    function handleEvent(e) {
      setLine(e?.detail?.line);
      console.log('single_line event fired', e.detail?.line); // outputs: {foo: 'bar'}
    }
  }, []);

  return (
    <>
      {!isMobile ? (
        <div
          className={styles.viewport}
          id="viewport"
          onMouseLeave={() => setCursor(true)}
          onMouseOver={() => setCursor(false)}
        >
          <iframe src="/camera/index.html" title="Lines Page"></iframe>
        </div>
      ) : (
        <MobileLine />
      )}
      {line && <Line lineName={line} setLine={setLine} />}
    </>
  );
}

function Line({ lineName, setLine }) {
  const line = LINE_INFO[lineName];
  const lineNums = SHOW_ORDER.map((_, index) => index);

  const curNum = lineName ? SHOW_ORDER.indexOf(lineName) : -1;

  const { name, designers, description, positioning } = line;
  return (
    <motion.div
      variants={animationStates}
      initial="hidden"
      animate="visible"
      className={styles.linesContainer}
    >
      <div
        className={styles.content}
        style={{
          backgroundImage: `url(${line?.image})`,
          ...positioning?.background,
        }}
      >
        <p className={styles.name} style={positioning?.name}>
          {name}
        </p>
        <p
          className={styles.description}
          style={positioning?.description}
          dangerouslySetInnerHTML={{
            __html: `${description}<br /><br /><b><span class="isenheim">${designers.join(
              ', '
            )}</span></b>`,
          }}
        ></p>
      </div>
      <div className={styles.lineNavContainer}>
        <img
          onClick={() => setLine(undefined)}
          className={styles.exit}
          alt="exit icon"
          src={exit}
        />
        {lineNums.map((num) => {
          return (
            <p
              onClick={() => setLine(SHOW_ORDER[num])}
              className={cn(styles.num, num === curNum && styles.active)}
            >
              {num + 1}
            </p>
          );
        })}
      </div>
    </motion.div>
  );
}

export default Lines;
