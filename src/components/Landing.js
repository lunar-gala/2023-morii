import { useState } from 'react';
import cn from 'classnames';
import {
  AnimatePresence,
  motion,
  useScroll,
  useMotionValueEvent,
} from 'framer-motion';

import styles from './Landing.module.css';
import { STORY } from '../assets/constants';
import { screenStates, transition } from '../assets/constants';
import background from '../assets/landing-banner.png';

function Landing({ setAbout }) {
  const numSlides = STORY.length + 1;

  const [screenNum, setScreenNum] = useState(0);
  const [storyNum, setStoryNum] = useState(0);
  const [scroll, setScroll] = useState(0);
  const { scrollYProgress } = useScroll();

  const thresholds = STORY.map((_, index) => (1 / numSlides) * (1 + index));

  const getSlide = (scroll) => {
    return thresholds.findIndex((num) => num > scroll);
  };

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    setScroll(latest);
    const slide = getSlide(latest);
    setStoryNum(slide);
    if (slide >= 0 && STORY[slide].newScreen) setScreenNum(slide);
    if (slide === -1) {
      window.sessionStorage.setItem('introViewed', 'true');
      setAbout(true);
    }
  });

  return (
    <div className={styles.container}>
      <motion.img
        src={background}
        alt=""
        className={styles.bg}
        style={{ left: `-${scroll * 100}vw` }}
      />
      <div className={styles.body}>
        {STORY.map((story, index) => {
          return (
            <Frame
              story={story}
              key={index}
              display={index === screenNum}
              index={index}
            />
          );
        })}
      </div>
      <motion.div className={styles.screen}></motion.div>
    </div>
  );
}

function Frame({ story, display, index }) {
  const { text, classes, newScreen } = story;
  return (
    <AnimatePresence>
      {display && (
        <motion.div
          variants={screenStates}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className={cn(
            styles.step,
            newScreen ? styles.newScreen : styles.sameScreen
          )}
          transition={transition}
          custom={index}
        >
          <motion.p
            variants={screenStates}
            initial="hidden"
            animate="visible"
            exit="hidden"
            trasition={{ delay: 1 }}
            className={cn(...classes.map((c) => styles[c]))}
            custom={index}
          >
            {text}
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Landing;
