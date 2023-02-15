import { useState } from 'react';
import cn from 'classnames';
import { AnimatePresence, motion } from 'framer-motion';

import styles from './Landing.module.css';
import { STORY } from '../assets/constants';
import { animationStates, transition } from '../assets/constants';

function Landing({ about, setAbout, firstLoad, setFirstLoad }) {
  const [storyNum, setStoryNum] = useState(0);

  return (
    <div className={styles.container}>
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
