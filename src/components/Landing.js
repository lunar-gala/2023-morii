import { useState, useRef, useEffect } from 'react';
import cn from 'classnames';
import {
  AnimatePresence,
  motion,
  useScroll,
  useMotionValueEvent,
  useVelocity,
  useSpring,
  useTransform,
} from 'framer-motion';

import styles from './Landing.module.css';
import { STORY } from '../assets/constants';
import { screenStates, transition } from '../assets/constants';
import background from '../assets/backdrop.mp4';
import useIdle from '../hooks/useIdle';

function Landing({ setAbout }) {
  const numSlides = STORY.length + 1;

  const [screenNum, setScreenNum] = useState(0);
  const [storyNum, setStoryNum] = useState(0);
  const [scroll, setScroll] = useState(0);
  const { scrollYProgress, scrollY } = useScroll();

  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const vidRef = useRef();
  const isIdle = useIdle({ timeToIdle: 200 });

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

  useEffect(() => {
    const vid = vidRef?.current;
    if (!(vid && vid?.duration)) {
      return;
    }
    const pos = Math.abs(velocityFactor.get());
    console.log(pos);
    if (isIdle) {
      vid.pause();
    } else if (pos > 0.5) {
      vid.play();
      const playback = pos / 5 + 0.07;
      vid.playbackRate = playback >= 10 ? 10 : playback;
    } else {
      // console.log(scroll * vid?.duration);
      // vid.playbackRate = 0.07;
      vid.pause();
    }
  });

  return (
    <div className={styles.container}>
      <video ref={vidRef} className={styles.bg} playsInline muted loop>
        <source src={background} type="video/mp4" />
      </video>
      <div className={styles.body}>
        {STORY.map((story, index) => {
          return (
            <Frame
              story={story}
              key={index}
              display={index >= screenNum && index <= storyNum}
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
  const { mobileText, text, classes, newScreen } = story;
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
            dangerouslySetInnerHTML={{ __html: mobileText ?? text }}
          ></motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Landing;
