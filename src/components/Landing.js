import { useEffect, useState } from 'react';
import cn from 'classnames';

import styles from './Landing.module.css';
import { STORY } from '../assets/constants';

function Landing() {
  const updateStoryCount = () => {
    console.log('storynum', storyNum, STORY.length);
    if (storyNum >= STORY.length) setStoryNum(0);
    else setStoryNum(storyNum + 1);
  };

  const [storyNum, setStoryNum] = useState(0);

  return (
    <div className={styles.container} onClick={updateStoryCount}>
      {STORY.map((story, index) => {
        return <Frame story={story} key={index} />;
      })}
    </div>
  );
}

function Frame({ story }) {
  return (
    <div className={styles.screen}>
      {story.map(({ text, classes }, index) => {
        return (
          <div className={styles.frame} key={index}>
            <p className={cn(...classes.map((c) => styles[c]))}>{text}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Landing;
