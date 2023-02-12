import { useState } from 'react';
import cn from 'classnames';
import { AnimatePresence, motion } from 'framer-motion';

import styles from './Landing.module.css';
import { STORY } from '../assets/constants';

const animationStates = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};
const transition = {
  duration: 1,
  ease: 'easeOut',
};

function Landing() {
  const updateStoryCount = () => {
    console.log('storynum', storyNum, STORY.length);
    if (storyNum >= STORY.length - 1) setStoryNum(0);
    else setStoryNum(storyNum + 1);
  };

  const [storyNum, setStoryNum] = useState(0);

  return (
    <div className={styles.container} onClick={updateStoryCount}>
      {STORY.map((story, index) => {
        return (
          <AnimatePresence mode="wait">
            <Frame
              story={story}
              key={index}
              display={index <= storyNum}
              index={index}
              setStoryNum={setStoryNum}
            />
          </AnimatePresence>
        );
      })}
    </div>
  );
}

function Frame({ story, display, setStoryNum, index }) {
  const { text, classes, newScreen } = story;
  console.log(story);
  return (
    <>
      <motion.div
        className={styles.screen}
        style={index === 0 && { height: '200vh' }}
        onViewportEnter={() => setStoryNum(index)}
      ></motion.div>
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
          <p className={cn(...classes.map((c) => styles[c]))}>{text}</p>
        </motion.div>
      )}
    </>
  );
}

export default Landing;
