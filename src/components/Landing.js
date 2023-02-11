import { useState } from 'react';
import cn from 'classnames';

import styles from './Landing.module.css';
import { STORY } from '../assets/constants';

function Landing() {
  const [storyNum, setStoryNum] = useState(2);

  return (
    <div className={styles.container}>
      {[...Array(storyNum).keys()].map((storyNum) => {
        return <Frame storyNum={storyNum} key={storyNum} />;
      })}
    </div>
  );
}

function Frame({ storyNum }) {
  const stories = STORY.filter(({ screen }) => parseInt(screen) === storyNum);
  // console.log(STORY);

  return (
    <div className={styles.screen}>
      {stories.map(({ text, classes }, index) => {
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
