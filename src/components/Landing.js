import { useState } from 'react';
import cn from 'classnames';

import styles from './Landing.module.css';
import { STORY } from '../assets/constants';

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
        return <Frame story={story} key={index} />;
      })}
    </div>
  );
}

function Frame({ story }) {
  const { text, classes, newScreen } = story;
  const inner = (
    <div className={cn(...classes.map((c) => styles[c]))}>
      <p>{text}</p>
    </div>
  );
  console.log(story);
  return newScreen ? (
    <div className={styles.screen}>{inner}</div>
  ) : (
    <>{inner}</>
  );
}

export default Landing;
