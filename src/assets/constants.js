export const STORY = [
  {
    text: 'In the moment, you start to feel it fading away.',
    classes: ['center'],
    newScreen: true,
  },
  {
    text: "Dancing in the shadows, whispering in the wind. A story that can't be contained is lost as one that can't be told.",
    mobileText:
      "Dancing in the shadows, whispering in the wind.<br /><br />A story that can't be contained is lost as one that can't be told.",
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
    mobileText:
      "We try to capture moments as if they'll escape, building a version of the world adherent to change.<br /><br />Can this memory be preserved, can this contour be casted?",
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
