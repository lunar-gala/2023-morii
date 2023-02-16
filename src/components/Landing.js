import { useState } from 'react';
import cn from 'classnames';
import {
  AnimatePresence,
  motion,
  useScroll,
  useMotionValueEvent,
  useSpring,
} from 'framer-motion';

import styles from './Landing.module.css';
import { STORY } from '../assets/constants';
import { animationStates, transition } from '../assets/constants';
import background from '../assets/landing-banner.png';

function Landing({ about, setAbout }) {
  const [storyNum, setStoryNum] = useState(0);
  const [scroll, setScroll] = useState(0);
  const { scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    console.log('Page scroll: ', latest);
    setScroll(latest);
  });

  return (
    <div className={styles.container}>
      <motion.img
        src={background}
        alt=""
        className={styles.bg}
        style={{ left: `-${scroll * 100}vw` }}
      />
      {STORY.map((story, index) => {
        return (
          <Frame
            story={story}
            key={index}
            display={index <= storyNum}
            index={index}
            setStoryNum={setStoryNum}
          />
        );
      })}
      <motion.div
        className={styles.screen}
        onViewportEnter={() => {
          window.sessionStorage.setItem('introViewed', 'true');
          setAbout(true);
        }}
      ></motion.div>
    </div>
  );
}

function Frame({ story, display, setStoryNum, index }) {
  const { text, classes, newScreen } = story;
  return (
    <>
      <motion.div
        className={styles.screen}
        style={index === 0 && { height: '150vh' }}
        onViewportEnter={() => setStoryNum(index)}
      ></motion.div>
      <AnimatePresence>
        {display && (
          <motion.div
            variants={animationStates}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className={cn(
              styles.step,
              newScreen ? styles.newScreen : styles.sameScreen
            )}
            transition={transition}
          >
            <motion.p
              variants={animationStates}
              initial="hidden"
              animate="visible"
              exit="hidden"
              trasition={{ delay: 1 }}
              className={cn(...classes.map((c) => styles[c]))}
            >
              {text}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Landing;
