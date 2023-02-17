import { useState } from 'react';
import debounce from 'lodash.debounce';
import cn from 'classnames';
import {
  AnimatePresence,
  motion,
  useScroll,
  useMotionValueEvent,
} from 'framer-motion';

import styles from './Landing.module.css';
import { STORY } from '../assets/constants';
import { animationStates, transition } from '../assets/constants';
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
    console.log('Page scroll: ', latest);
    setScroll(latest);
    const slide = getSlide(latest);
    setStoryNum(slide);
    if (slide >= 0 && STORY[slide].newScreen) setScreenNum(slide);
    console.log(screenNum);
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
              display={index <= storyNum}
              blur={index < screenNum}
            />
          );
        })}
      </div>
      <motion.div className={styles.screen}></motion.div>
    </div>
  );
}

function Frame({ story, display, blur }) {
  const { text, classes, newScreen } = story;
  console.log(blur);
  return (
    <AnimatePresence>
      {display && (
        <motion.div
          variants={animationStates}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className={cn(
            styles.step,
            newScreen ? styles.newScreen : styles.sameScreen,
            blur ? styles.blurText : ''
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
  );
}

export default Landing;
