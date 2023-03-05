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
import { browserName } from 'react-device-detect';

import styles from './Landing.module.css';
import {
  STORY,
  MOBILE_STORY,
  MOBILE_BACKDROPS,
  MOBILE_NEW_SCREENS,
} from '../assets/constants';
import { screenStates, transition } from '../assets/constants';
import background from '../assets/backdrop.mp4';
import useIdle from '../hooks/useIdle';
import useWindowSize from '../hooks/useWindowSize';

function Landing({ setAbout, about }) {
  const isSafari = browserName === 'Safari';
  const windowSize = useWindowSize();
  const isMobile = windowSize?.width < 768;
  const story = isMobile ? MOBILE_STORY : STORY;
  const numSlides = story.length + 1;

  const [screenNum, setScreenNum] = useState(0);
  const [storyNum, setStoryNum] = useState(0);
  const { scrollYProgress, scrollY } = useScroll();

  const screenNumIndex = MOBILE_NEW_SCREENS.map(
    ({ startIndex }) => startIndex === screenNum
  ).indexOf(true);

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

  const thresholds = story.map((_, index) => (1 / numSlides) * (1 + index));

  const getSlide = (scroll) => {
    return thresholds.findIndex((num) => num > scroll);
  };

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const slide = getSlide(latest);
    setStoryNum(slide);
    if (slide >= 0 && story[slide].newScreen) setScreenNum(slide);
    if (slide === -1) {
      window.sessionStorage.setItem('introViewed', 'true');
      setAbout(true);
    }
  });

  const handlePlay = () => {
    const vid = vidRef?.current;
    if (!(vid && vid?.duration)) {
      return;
    }
    const pos = Math.abs(velocityFactor.get());

    if ((isIdle && !isSafari) || (isSafari && pos <= 0.2)) {
      vid.pause();
    } else {
      vid.play();
      const playback = pos / 5 + 0.07;
      vid.playbackRate = playback >= 10 ? 10 : playback;
    }
  };

  useEffect(() => {
    if (!isSafari) handlePlay();
  });

  useEffect(() => {
    if (isSafari) window.addEventListener('scroll', handlePlay);
    window.addEventListener('touchmove', handlePlay);
  }, []);

  return (
    <div
      className={styles.container}
      style={about && isMobile ? { overflowY: 'hidden' } : {}}
    >
      {!isMobile && (
        <video ref={vidRef} className={styles.bg} playsInline muted loop>
          <source src={background} type="video/mp4" />
        </video>
      )}
      <div className={styles.body}>
        {isMobile && (
          <img
            src={
              MOBILE_BACKDROPS[
                storyNum === -1 ? MOBILE_BACKDROPS.length - 1 : storyNum
              ]
            }
            className={styles.bg}
            alt="mobile backdrop"
          />
        )}
        {isMobile
          ? MOBILE_NEW_SCREENS.map(({ startIndex, stories }, screenIndex) => {
              console.log(screenIndex);
              return (
                <>
                  {screenNumIndex === screenIndex && (
                    // what's "mobile baby girl" - nandini kuppa-apte
                    <motion.div
                      variants={screenStates}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      key={startIndex}
                      className={styles.mobileBg}
                    >
                      {stories.map((story, index) => {
                        const storyIndex = startIndex + index;
                        const display = storyIndex <= storyNum;
                        return (
                          <motion.div key={index}>
                            <MobileFrame story={story} display={display} />
                          </motion.div>
                        );
                      })}
                    </motion.div>
                  )}
                </>
              );
            })
          : STORY.map((story, index) => {
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

function MobileFrame({ story, display }) {
  const { text, classes } = story;
  return (
    <motion.p
      dangerouslySetInnerHTML={{ __html: text }}
      className={cn(...classes.map((c) => styles[c]))}
      style={{ opacity: display ? 1 : 0 }}
    ></motion.p>
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
