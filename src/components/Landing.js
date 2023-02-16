import { useState } from 'react';
import debounce from 'lodash.debounce';
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
import { animationStates, transition } from '../assets/constants';
import background from '../assets/landing-banner.png';

function Landing({ about, setAbout }) {
  const [storyNum, setStoryNum] = useState(0);
  const [scroll, setScroll] = useState(0);
  const [velocity, setVelocity] = useState(0);
  const { scrollYProgress, scrollY } = useScroll();

  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    console.log('Page scroll: ', smoothVelocity.get());
    setVelocity(velocityFactor.get());
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
        const waitAfterScroll = () => {
          console.log(velocity);
          if (Math.abs(velocity) < 1) setStoryNum(index);
          else setTimeout(() => waitAfterScroll(velocity), 500);
        };

        return (
          <Frame
            story={story}
            key={index}
            display={index <= storyNum}
            index={index}
            setStoryNum={setStoryNum}
            velocity={velocity}
            waitAfterScroll={waitAfterScroll}
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

function Frame({
  story,
  display,
  setStoryNum,
  index,
  velocity,
  waitAfterScroll,
}) {
  const { text, classes, newScreen } = story;

  const changeStory = debounce(() => {
    if (velocity <= 50) setStoryNum(index);
    else changeStory();
  }, 1500);

  return (
    <>
      <motion.div
        className={styles.screen}
        style={index === 0 && { height: '100vh' }}
        onViewportEnter={changeStory}
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
