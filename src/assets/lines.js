import line_img_1 from './line-images/01.jpg';
import line_img_2 from './line-images/02.jpg';
import line_img_3 from './line-images/03.jpg';
import line_img_4 from './line-images/04.png';
import line_img_6 from './line-images/06.jpeg';
import line_img_8 from './line-images/08.png';
import line_img_9 from './line-images/09.png';
import line_img_10 from './line-images/10.jpg';
import line_img_12 from './line-images/12.jpeg';
import line_img_14 from './line-images/14.jpg';
import line_img_19 from './line-images/19.png';
import line_img_20 from './line-images/20.jpg';
import line_img_22 from './line-images/22.png';

import doodles from './line-icons/doodles.png';
import arriba from './line-icons/arriba.png';
import rewind from './line-icons/rewind.png';
import paperdolls from './line-icons/paperdolls.png';
import limbic from './line-icons/limbic.png';
import noxmemoria from './line-icons/noxmemoria.png';
import atrophy from './line-icons/atrophy.png';
import lapinata from './line-icons/lapinata.png';
import weilai from './line-icons/weilai.png';
import delicacy from './line-icons/delicacy.png';
import selcouth from './line-icons/selcouth.png';
import kalopsia from './line-icons/kalopsia.png';
import xiaoshi from './line-icons/xiaoshi.png';

import doodles_mobile from './line-mobile/doodles.png';
import arriba_mobile from './line-mobile/arriba.png';
import rewind_mobile from './line-mobile/rewind.png';
import paperdolls_mobile from './line-mobile/paper_dolls.png';
import limbic_mobile from './line-mobile/limbic.png';
import noxmemoria_mobile from './line-mobile/nox_memoria.png';
import atrophy_mobile from './line-mobile/atrophy.png';
import lapinata_mobile from './line-mobile/la_pinata.png';
import weilai_mobile from './line-mobile/weilai.png';
import delicacy_mobile from './line-mobile/delicacy.png';
import selcouth_mobile from './line-mobile/selcouth.png';
import kalopsia_mobile from './line-mobile/kalopsia.png';
import xiaoshi_mobile from './line-mobile/xiaoshi.png';

const addTopMargin = (margin) => `calc(7vh + ${margin})`;
const addLeftMargin = (margin) => `calc(100px + ${margin})`;
const addRightMargin = (margin) => `calc(225px + ${margin})`;

export const SHOW_ORDER = [
  'doodles',
  'arriba',
  'rewind',
  'paperdolls',
  'limbic',
  'noxmemoria',
  'atrophy',
  'lapinata',
  'weilai',
  'delicacy',
  'selcouth',
  'kalopsia',
  'xiaoshi',
];

export const MOBILE_ICONS = {
  arriba: {
    x: 590,
    y: 1300,
    img: arriba,
  },
  atrophy: {
    x: 386,
    y: 213,
    img: atrophy,
  },
  delicacy: {
    x: 456,
    y: 586,
    img: delicacy,
  },
  doodles: {
    x: 380,
    y: 1100,
    img: doodles,
  },
  kalopsia: {
    x: 903,
    y: 70,
    img: kalopsia,
  },
  lapinata: {
    x: 888,
    y: 375,
    img: lapinata,
  },
  limbic: {
    x: 833,
    y: 927,
    img: limbic,
  },
  noxmemoria: {
    x: 1243,
    y: 1005,
    img: noxmemoria,
  },
  paperdolls: {
    x: 1381,
    y: 1333,
    img: paperdolls,
  },
  rewind: {
    x: 1935,
    y: 98,
    img: rewind,
  },
  selcouth: {
    x: 1599,
    y: 277,
    img: selcouth,
  },
  weilai: {
    x: 1739,
    y: 685,
    img: weilai,
  },
  xiaoshi: {
    x: 2090,
    y: 1009,
    img: xiaoshi,
  },
};

export const LINE_INFO = {
  arriba: {
    name: 'Arriba de Monte Teide',
    designers: ['Gwendolyn Toll'],
    image: line_img_9,
    mobile_image: arriba_mobile,
    description:
      "“Arriba de Monte Teide” is inspired by my trip to Madrid, Spain and the Canary Islands where I was engulfed in historic and mountainous landscapes. The collection's title, “Above Mount Teide,” relates to a mountain on Tenerife Island whose peak reaches above the clouds. Through my designs, I wanted to express the dreamlike and weightlessness of the vibrant terrain that lives in my memory. I pulled inspiration from historical Spanish garments, matador costumes, and climates of different regions to form the silhouettes of the collection that collaborate with a rich color palette. Overall, this collection works to embody the romanticism of walking through the fantastical travels of the past, and how we can begin to lose ourselves when living in this daydream haze.",
    positioning: {
      name: {
        top: addTopMargin('9vh'),
        left: addLeftMargin('4vw'),
        right: addRightMargin('40vw'),
      },
      description: {
        top: addTopMargin('30vh'),
        left: addLeftMargin('6vw'),
        right: addRightMargin('48vw'),
        maxHeight: '45vh',
        minWidth: '25vw',
      },
    },
  },
  atrophy: {
    name: 'Atrophy',
    designers: ['Julia Kasper', 'Middy Vella'],
    image: line_img_19,
    mobile_image: atrophy_mobile,
    description:
      'Defined as the process of wasting away, of degeneration, and of becoming vestigial, atrophy describes the fleeting sensation that our line puts to a halt. Paused in time, our designs capture the degeneration of cells through bodies and motion. The continuous process of cellular movement captures a part of the action in a stop-motion frame that is then revitalized as it is worn and adapted to the action of a live body. Only when the piece is in motion is it put back into play and the fluid passage of gradual decay continues. The development of this cycle is displayed as our line progresses from the first piece to the last, with each design beginning to lose its rigidity and shape, parallel to cellular contraction in its advancement towards a terminal in a loss of composition. Through a seamless transition of these frozen pieces of time, this line showcases the continuation of the organic cycle of regeneration, contraction and digression through biomimetic influences.',
    positioning: {
      name: {
        top: addTopMargin('8vh'),
        left: addLeftMargin('45vw'),
        right: addRightMargin('33vw'),
      },
      description: {
        top: addTopMargin('18vh'),
        left: addLeftMargin('48vw'),
        right: addRightMargin('3vw'),
      },
    },
  },
  delicacy: {
    name: 'Delicacy',
    designers: ['Natalie Waldram'],
    image: line_img_4,
    mobile_image: delicacy_mobile,
    description:
      'Delicacy can mean fragility, the fragility of states of existence or being or mind, but too the beauty of something rare and beautiful. Fragility, or ephemerality, is innate and beauty is acceptance of reality. An obsession with the unscathed, seamless, convenient degrades us, our habitats, our ecological communities, and our minds. And an attachment to cohesion and perfection refuses to accept the nature of our lives and our world in favor of the plastic, the artificial. The practice and labor of self-subsistence and self-production promote conscientiousness and connect us to our delicacy as an alternative to emotionally and physically disconnected production and outsourced labor markets. delicacy is a five-piece line inspired by subsistence labor using deadstock and reused materials.',
    positioning: {
      name: {
        top: addTopMargin('10vh'),
        left: addLeftMargin('5vw'),
      },
      description: {
        top: addTopMargin('20vh'),
        left: addLeftMargin('8vw'),
        right: addRightMargin('33vw'),
      },
    },
  },
  doodles: {
    name: 'Doodle',
    designers: ['Emma Pollet'],
    image: line_img_14,
    mobile_image: doodles_mobile,
    description:
      "My nickname has been “Doodle” ever since childhood, which is possibly the greatest fleeting moment I've ever experienced. It's a name given to me by my mom, who has given me numerous gifts throughout the years: sewing lessons, appreciation for art, and encouragement to let my creativity flourish. I've thought a lot about the various fleeting moments I've tried to capture, and the act of doodling is present in many of them. As a child, I doodled on my mom's freshly-painted walls. I doodled in the margins of my science notes in seventh grade, on the white paper table covers at casual restaurants, and on a chalkboard in a classroom during my final semester of college. Throughout these fleeting moments, I've let my creativity flourish, and this line is another product of that practice.",
    positioning: {
      name: {
        top: addTopMargin('7vh'),
        left: addLeftMargin('28vw'),
      },
      description: {
        top: addTopMargin('17vh'),
        left: addLeftMargin('36vw'),
        right: addRightMargin('19.5vw'),
        maxHeight: '50vh',
        minWidth: '25vw',
      },
    },
  },
  kalopsia: {
    name: 'Kalopsia',
    designers: ['Mikey DiGiovanna, Maya Galindo Benson'],
    image: line_img_10,
    mobile_image: kalopsia_mobile,
    description:
      "the delusion of things being more beautiful than they really are.<br /><br />Our line attempts to portray the short but intense lifespan of young love being in love makes it easy to romanticize the world around you and ignore negative aspects of daily life. Funny moments like these, in which one can't see beyond their love are the ones we wish to capture forever. Our line uses repeated symbols of nature and flowers to represent a blooming Young love, and blues and violets are used to represent once newfound maturity after coming out the other side.",
    positioning: {
      name: {
        top: addTopMargin('9vh'),
        left: addLeftMargin('48vw'),
      },
      description: {
        top: addTopMargin('35vh'),
        left: addLeftMargin('55.5vw'),
        right: addRightMargin('2vw'),
      },
    },
  },
  lapinata: {
    name: 'La Piñata',
    designers: ['Oscar Monarrez'],
    image: line_img_12,
    mobile_image: lapinata_mobile,
    description:
      'La Piñata is an emblem of Mexican tradition and culture that has existed for hundreds of years. In it, embodies the bright color culture of Mexico and emphasizes the importance of friends and family gathering around the singular object. As we transition to the desire to capture a fleeting experience, the piñata has always symbolized to me what felt like a fleeting experience as I visited my extended family and relatives in Mexico. Taking these ideas into fashion, la Piñata is an embodiment of the culture with which I grew up around with my family and its changes into what I see it as now.',
    positioning: {
      name: {
        top: addTopMargin('9vh'),
        left: addLeftMargin('47vw'),
      },
      description: {
        top: addTopMargin('20vh'),
        left: addLeftMargin('50vw'),
        right: addRightMargin('2vw'),
      },
    },
  },
  limbic: {
    name: 'Limbic',
    designers: ['Madi Davis'],
    image: line_img_1,
    mobile_image: limbic_mobile,
    description:
      "The human brain is the fundamental mechanism that allows us to experience and process what we perceive as moments. Specifically, the neural circuitry of the limbic system facilitates the construction of memories and the expression of emotional responses.<br /><br />Limbic seeks to engage in an exploration of the neurological basis for human perception through an artistic lens. From neuroanatomist Ramon y Cajal's early exploration of the neuron, to the recent appropriation of neural activity for computation, the collection chronologically focuses on different neurological discoveries and how they have altered our understanding of cognition. Incorporating a combination of voluminous silhouettes, mixed media details and romantic finishes, Limbic captures the essence of intricacy and delicateness underlying systems of the brian.",
    positioning: {
      name: {
        top: addTopMargin('9vh'),
        left: addLeftMargin('4vw'),
      },
      description: {
        top: addTopMargin('20vh'),
        left: addLeftMargin('6vw'),
        right: addRightMargin('50vw'),
        minWidth: '20vw',
      },
      background: {
        backgroundPosition: 'left',
      },
    },
  },
  noxmemoria: {
    name: 'Nox Memoria',
    designers: ['Amy Hu', 'Angela Huang', 'Sydney Sun'],
    image: line_img_8,
    mobile_image: noxmemoria_mobile,
    description:
      "Nox Memoria, or “Memory of Night”, is the embodiment of that which we try to make permanent, but ultimately fail. These are thoughts and happenings that we can only grasp at, inevitably fading away. Nature proves this to us in the Queen of the Night flower, a rare beauty hardly seen, as it blooms only once a year for a few hours before withering away, This leaves behind a tangle of vines, leaves and us to wander through a haze of memories until the next time one may catch a brief glimpse of the flower's ephemeral beauty.<br /><br />The collection attempts to pluck these fleeting moments from the cycle of impermanence and visualize them through the use of materials varying in opacity and stiffness, and how they can alter forms. The pieces are composed of varying amounts of sheer and solid fabrics representing the flower in different states of clarity.",
    positioning: {
      name: {
        top: addTopMargin('9vh'),
        left: addLeftMargin('4vw'),
      },
      description: {
        top: addTopMargin('20vh'),
        left: addLeftMargin('8vw'),
        right: addRightMargin('39vw'),
      },
    },
  },
  paperdolls: {
    name: 'Paper Dolls',
    designers: ['Isabella Boleng'],
    image: line_img_22,
    mobile_image: paperdolls_mobile,
    description:
      'For those who played with paper dolls in their youth, the feeling of popping a crisp dress out brings back a surge of nostalgia. These dolls were delightful to play with, but it was always bitter sweet. The paper inevitably wore down, the petite tabs fell off, and everything disintegrated until the dolls, and their charming fashions, were gone. While the experience of playing with paper dolls is fleeting, the joy they bring lasts much longer than the paper itself.<br /><br />Paper Dolls is inspired by the innocence of enjoying a delicate, beautiful thing, knowing that it is fleeting from this moment in time. This collection evokes the sensation you have when holding onto the fragile paper, praying for it not to rip, all just so you can enjoy the delightful garments for a little while longer.',
    positioning: {
      name: {
        top: addTopMargin('9vh'),
        left: addLeftMargin('4vw'),
      },
      description: {
        top: addTopMargin('20vh'),
        left: addLeftMargin('6vw'),
        right: addRightMargin('45vw'),
      },
    },
  },
  rewind: {
    name: 'Rewind',
    designers: ['Michelle Yue'],
    image: line_img_20,
    mobile_image: rewind_mobile,
    description:
      "Memories are our way of capturing fleeting moments, but they are far from perfect. Even our most cherished memories can become distorted with the passage of time, making it impossible to exactly replicate the moments we experience. When I recall my favorite moments, I'm saddened as I realize how little details, like how the wind felt on my face or the exact joke that was shared, have been lost.<br /><br />For me, yarn has always been a comforting and familiar presence, reminding me of when I learned how to knit from my grandmother as a child. With my all-yarn line, I hope to invite others to revisit some of the beautiful moments captured by my memories. Through the soft and fuzzy medium, I aim not to replicate the moments but to recreate the comfort and warmth of these memories, preserving them even as time continues to pass.",
    positioning: {
      name: {
        top: addTopMargin('9vh'),
        left: addLeftMargin('49vw'),
      },
      description: {
        top: addTopMargin('20vh'),
        left: addLeftMargin('51.5vw'),
        right: addRightMargin('3.25vw'),
        minWidth: '15vw',
      },
    },
    midWidth: {
      position: 'right', //make background-position-y right, description left auto
      width: '25vw', // description width
      name: '35vw', // name offset
    },
  },
  selcouth: {
    name: 'SELCOUTH',
    designers: ['Amanda Wen', 'Minsung Kang', 'Thon Promlikitchai'],
    image: line_img_6,
    mobile_image: selcouth_mobile,
    description:
      'A translucent, misty, blanket fogs over your thoughts when you think of a moment, you have encountered an epiphany of hope after an unending, dreadful experience of sudden disappointment. You cannot describe this phenomenon, the seemingly unorthodox emotions, even though you have experienced it countless times: a broken heart, loss of a loved one, or even something as simple as spilled coffee — these moments create hiccups in our lives, spiraling, and unclear. Perhaps these occurrences are blurry because they are fleeting moments. During this time of despair, time is stretched, and each day seems infinite. Then, a change. A light within the negativity. Unnoticeable at first, your mind commands you to pick yourself up, to improvise, and to work your way through the dark; all in an instantaneous moment.',
    positioning: {
      name: {
        top: addTopMargin('10vh'),
        left: addLeftMargin('40vw'),
      },
      description: {
        top: addTopMargin('20vh'),
        left: addLeftMargin('45vw'),
        right: addRightMargin('4vw'),
      },
    },
  },
  weilai: {
    name: 'Wei•Lai',
    designers: ['Sihan Wu', 'April Wu', 'Sarah Kwok'],
    image: line_img_2,
    mobile_image: weilai_mobile,
    description:
      'Wei•Lai (未来) is the future, encapsulating what has yet to come and what has yet to be created. This line subverts western fashion conventions by drawing inspiration from a distinctively East Asian identity, particularly our Chinese heritage. We seek to amplify the resonance of Asian-ness, in a traditionally Eurocentric space where western silhouettes are omnipresent.<br /><br />We question the western hegemony that afflicts not only the fashion realm, but also modern culture and society. Wei•Lai connotes an unborn reality in which no single identity is prevailing; where East Asian culture is not defaulted to exoticism, but exists in tandem with different cultures and identities, actively functioning in dialogue with one another. In a world that is changing at unprecedented speeds, we pause and reflect on what the future entails in retrospect of our past. We aim to disrupt the spaces we exist in—by considering the past, present and future all at once.',
    positioning: {
      name: {
        top: addTopMargin('9vh'),
        left: addLeftMargin('43vw'),
      },
      description: {
        top: addTopMargin('20vh'),
        left: addLeftMargin('46vw'),
        right: addRightMargin('5.5vw'),
        minHeight: '50vh',
        overflow: 'auto',
      },
    },
  },
  xiaoshi: {
    name: 'xiao•shi',
    designers: ['Leslie Lin', 'Audrey Zhao', 'Joanna Ni', 'Mason Wang'],
    image: line_img_3,
    mobile_image: xiaoshi_mobile,
    description:
      "XIAO SHI explores the chronological deterioration of one's culture in a society that misappropriates and misrepresents it. It follows the opposing desires of the immigrant experience – one to preserve the self and another to assimilate in an unforgiving environment, ultimately capturing the fleeting nature of one's cultural identity. Each look draws upon motifs reinforced throughout our childhoods, often as an act by elders to preserve traditional cultural mindsets. Narratives are told through the lens of Chinese mythology, the eight virtues, and satirical takes on western media influence; all ways in which language forms and shapes outward perceptions of culture. As the collection evolves, innocence and nostalgia eventually unravel into a caricature of what is left of one's authentic self, taking tangible experiences to construct a subversive patchwork between the traditional and the contemporary.",
    positioning: {
      name: {
        top: addTopMargin('8vh'),
        left: addLeftMargin('42vw'),
      },
      description: {
        top: addTopMargin('20vh'),
        left: addLeftMargin('37vw'),
        right: addRightMargin('2vw'),
      },
    },
  },
};

export const FILTERS = {
  doodles:
    'https://www.instagram.com/ar/601634935151893/?ch=YTBmNzM4NzAwN2VjY2M5NjNkMjA4YjI1ODYzMmE5OWY%3D',
  arriba: 'https://www.instagram.com/ar/596866588981295',
  rewind:
    'https://www.instagram.com/ar/135523399212936/?ch=OTMzZDcxZjA1OTQxOWM5N2JiYjE1MzhmNWY0ZDRhYzc%3D',
  paper_dolls:
    'https://www.instagram.com/ar/1215136162727083/?ch=ZTFmZGFjOGMzNmU2MTM1MzMyZjFjMDgyMjRhZjJmNDk%3D',
  limbic:
    'https://www.instagram.com/ar/562050992569276/?ch=MTIzYTE0OGNkNDY5NGU3NTE2YWI5NTMyYTcyNjRjNTk%3D',
  atrophy:
    'https://www.instagram.com/ar/211207521430948/?ch=MjNmYTdjNjE1NzQzZTI3ZTM4NmMzMGNjOGU5YmIzYTY%3D',
  la_pinata:
    'https://www.instagram.com/ar/528406916107921/?ch=YjY3NDgxMGU5MWIyODFlOWM2MWEwNjJhZTZjMmIwODg%3D',
  wei_lai: 'https://www.instagram.com/ar/131394316542248',
  delicacy: 'https://www.instagram.com/ar/169494875904163',
  selcouth:
    'https://www.instagram.com/ar/598448225636471/?ch=NmRkODE2Y2Q1YjE1NWRhN2RlMWZkNzM1NjFmYTMxZWU%3D',
  nox_memoria:
    'https://www.instagram.com/ar/714036333842454/?ch=ZGM4M2Q0MWMyMjhiMzdjZDRjNzI2OWIzNDE3OGQ3YzU%3D',
  kalopsia: 'https://www.instagram.com/ar/151798934449464',
  xiao_shi:
    'https://www.instagram.com/ar/2989753991332644/?ch=YjI0NjZkM2VlYzA4NGRjZjJlN2IxYTliNzE4NDljMGM%3D',
};
