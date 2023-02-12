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

function Landing() {
  const updateStoryCount = () => {
    console.log('storynum', storyNum, STORY.length);
    if (storyNum >= STORY.length - 1) setStoryNum(0);
    else setStoryNum(storyNum + 1);
  };

  const [storyNum, setStoryNum] = useState(0);

  return (
    <div className={styles.container} onClick={updateStoryCount}>
      {STORY.filter((_, index) => index <= storyNum).map((story, index) => {
        return (
          <AnimatePresence mode="wait">
            <Frame story={story} key={index} />
          </AnimatePresence>
        );
      })}
    </div>
  );
}

function Frame({ story }) {
  const { text, classes, newScreen } = story;
  const inner = (
    <motion.div
      variants={animationStates}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className={cn(...classes.map((c) => styles[c]))}
    >
      <p>{text}</p>
    </motion.div>
  );
  console.log(story);
  return newScreen ? (
    <motion.div
      variants={animationStates}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className={styles.screen}
    >
      {inner}
    </motion.div>
  ) : (
    <>{inner}</>
  );
}

export default Landing;
