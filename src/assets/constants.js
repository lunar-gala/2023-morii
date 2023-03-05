import mobile_0 from './mobile-backdrops/0.png';
import mobile_1 from './mobile-backdrops/1.png';
import mobile_2 from './mobile-backdrops/2.png';
import mobile_3 from './mobile-backdrops/3.png';
import mobile_4 from './mobile-backdrops/4.png';
import mobile_5 from './mobile-backdrops/5.png';
import mobile_6 from './mobile-backdrops/6.png';
import mobile_7 from './mobile-backdrops/7.png';
import mobile_8 from './mobile-backdrops/8.png';
import mobile_9 from './mobile-backdrops/9.png';
import mobile_10 from './mobile-backdrops/10.png';
import mobile_11 from './mobile-backdrops/11.png';
import mobile_12 from './mobile-backdrops/12.png';
import mobile_13 from './mobile-backdrops/13.png';
import mobile_14 from './mobile-backdrops/14.png';

export const MOBILE_BACKDROPS = [
  mobile_0,
  mobile_1,
  mobile_2,
  mobile_3,
  mobile_4,
  mobile_5,
  mobile_6,
  mobile_7,
  mobile_8,
  mobile_9,
  mobile_10,
  mobile_11,
  mobile_12,
  mobile_13,
  mobile_14,
];

export const STORY = [
  {
    text: 'In the moment, you start to feel it fading away.',
    classes: ['center'],
    newScreen: true,
  },
  {
    text: "Dancing in the shadows, whispering in the wind. A story that can't be contained is lost as one that can't be told.",
    classes: ['center'],
    newScreen: true,
  },
  {
    text: 'Allow me your time, for the sake of brevity. Hold still and look around. Try to remember. Try to keep me close.',
    classes: ['center'],
    newScreen: true,
  },
  {
    text: '"How do I know this is real?"',
    classes: ['convo1', 'positioned'],
    newScreen: true,
  },
  { text: '"You built it."', classes: ['convo2', 'positioned'] },
  {
    text: '"How will I know when to let go?"',
    classes: ['convo3', 'positioned'],
  },
  { text: '"I don\'t think you will."', classes: ['convo4', 'positioned'] },
  {
    text: "We try to capture moments as if they'll escape, building a version of the world adherent to change. Can this memory be preserved, can this contour be casted?",
    classes: [],
    newScreen: true,
  },
  {
    text: '"What if we could just stay a little longer?"',
    classes: [],
    newScreen: true,
  },
  {
    text: '"What if we never had to leave?"',
    classes: ['convoUnder', 'positioned'],
  },
];

export const MOBILE_STORY = [
  {
    text: 'In the moment, you start to feel it fading away.',
    classes: ['center'],
    newScreen: true,
  },
  {
    text: 'Dancing in the shadows, whispering in the wind.',
    classes: ['center'],
    newScreen: true,
  },
  {
    text: "A story that can't be contained is lost as one that can't be told.",
    classes: ['center'],
  },
  {
    text: 'Allow me your time, for the sake of brevity.',
    classes: ['center'],
    newScreen: true,
  },
  {
    text: 'Hold still and look around.',
    classes: ['center'],
  },
  {
    text: 'Try to remember.',
    classes: ['center'],
  },
  {
    text: 'Try to keep me close.',
    classes: ['center'],
  },
  {
    text: '"How do I know this is real?"',
    classes: ['convo1', 'positioned'],
    newScreen: true,
  },
  { text: '"You built it."', classes: ['convo2', 'positioned'] },
  {
    text: '"How will I know when to let go?"',
    classes: ['convo3', 'positioned'],
  },
  { text: '"I don\'t think you will."', classes: ['convo4', 'positioned'] },
  {
    text: "We try to capture moments as if they'll escape, building a version of the world adherent to change.<br /><br />Can this memory be preserved, can this contour be casted?",
    classes: [],
    newScreen: true,
  },
  {
    text: '"What if we could just stay a little longer?"',
    classes: [],
    newScreen: true,
  },
  {
    text: '"What if we never had to leave?"',
    classes: ['convoUnder', 'positioned'],
  },
];

const newScreens = MOBILE_STORY.map(({ newScreen }, index) =>
  newScreen ? index : -1
).filter((i) => i !== -1);

export const MOBILE_NEW_SCREENS = newScreens.map((index, i) => {
  const end =
    i === newScreens.length - 1 ? MOBILE_STORY.length : newScreens[i + 1];
  return { startIndex: index, stories: MOBILE_STORY.slice(index, end) };
});

export const animationStates = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 1, delayChildren: 3 },
  },
};

export const screenStates = {
  hidden: {
    opacity: 0,
    filter: 'blur(5px)',
    transition: { duration: 1 },
  },
  visible: (i) => ({
    filter: 'blur(0px)',
    transition: { duration: i === 0 ? 0 : 1 },
    opacity: 1,
  }),
};

export const transition = {
  duration: 1,
  ease: 'easeOut',
  delay: 1,
};

export const aboutAnimation = {
  visible: (i) => ({
    opacity: 1,
    transition: {
      delay: i * 1,
      duration: 1.5,
    },
  }),
  hidden: { opacity: 0 },
};

export const NAV = [
  {
    path: '/',
    title: 'About',
  },
  {
    path: '/tickets',
    title: 'Tickets',
  },
  {
    path: '/people',
    title: 'People',
    coming: '03/10',
  },
  {
    path: '/lines',
    title: 'Lines',
    coming: '03/17',
  },
];

export const TIERS = [
  {
    tier: 'VIP 1',
    price: 65,
    bonus: 'Includes VIP gift bag',
  },
  {
    tier: 'VIP 2',
    price: 65,
    bonus: 'Includes VIP gift bag',
  },
  {
    tier: 'Preferred',
    price: 55,
  },
  {
    tier: 'Plus',
    price: 35,
  },
  {
    tier: 'General',
    price: 25,
  },
];
