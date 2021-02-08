import bijliIcon from 'Icons/project-icon-bijli.png';
import wakencyIcon from 'Icons/project-icon-wakency.png';
import nykaaIcon from 'Icons/project-icon-nykaa.png';
import benefactoryIcon from 'Icons/Jarvis.jpg';

export const projectsListValue = {
  snapteam: {
    name: 'Imessage clone',
    tech: ['react'],
    involvement: 'Major',
    icon: bijliIcon,
    link: {
      type: 'Source Code',
      value: 'https://github.com/Rozen2007/Imessage-clone'
    },
    description: [
      {
        type: 'text',
        highlight: 'green',
        value: 'This is a clone of one of the real-time app called Imessage clone.'
      },
      {
        type: 'points',
        highlight: 'green',
        title: 'The intension was for chatting pupose for my class about group projects, for discussing assembly,etc ',
        value: [
          'Google Authentication',
          'Real-time Data-base',
          'REal time messages',
          'Public Server',
          'You can use Emojis'
        ]
      }
    ]
  },
  
  wakency: {
    name: 'Slack-clone',
    tech: ['react'],
    icon: wakencyIcon,
    involvement: 'Major',
    link: {
      type: 'Source Code',
      value: 'https://github.com/Rozen2007/Slack-Clone'
    },
    description: [
      {
        type: 'text',
        highlight: 'green',
        value: 'This is a clone of one of the real-time app called Slack clone.'
      },
      {
        type: 'header',
        value: 'My Contribution :',        
      },
      {
        type: 'text',
        value: 'The intension was for chatting pupose for my class about group projects, for discussing assembly,etc  '
      },
      {
        type: 'points',
        value: [
          'Google Authentication',
          'Real-time Data-base',
          'REal time messages',
          'Public Server',
          'You can use Emojis'
        ]
      }
    ]
  },
  nykaa: {
    name: 'Starbucks',
    tech: ['Html,css,java'],
    icon: nykaaIcon,
    link: {
      type: 'Source code',
      value: 'https://github.com/Rozen2007/Starbucks-clone'
    },
    description: [
      {
        type: 'text',
        highlight: 'green',
        value: "This a Rozen's Starbucks(my persnol projects:)) this is a website which I started using animation and I got my firsy internship using this website :)"
      },
      {
        type: 'header',
        value: 'My Contribution :',        
      },
      {
        type: 'text',
        value: 'I was actively involved in building new features like animating the products,giving new look to the landing page,adding transition in sign in and sign up page,etc.'
      },
    ]
  },
  lighthouse: {
    name: 'Netflix',
    tech: ['React.js'],
    icon: benefactoryIcon,
    involvement: 'Major',
    link: {
      type: 'Source Code',
      value: 'https://github.com/Rozen2007/Netflix'
    },
    description: [
      {
        type: 'text',
        highlight: 'green',
        value: 'This is a clone of one of the real-time app called Netflix clone.'
      },
      {
        type: 'Major',
        value: 'My Contribution :',        
      },
      {
        type: 'points',
        value: [
          'React.js',
          'Redux',
          'React hooks',
          'Firebase for Database, Hosting and Deploy',
          'This is just a frontend, there would be no movies',
        ]
      }
    ]
  },
  benefactory: {
    name: 'Jarvis',
    tech: ['Python'],
    icon: benefactoryIcon,
    involvement: 'Major',
    link: {
      type: 'Source Code',
      value: 'https://github.com/Rozen2007/Voice-assistance'
    },
    description: [
      {
        type: 'text',
        highlight: 'green',
        value: 'This is my Jarvis project which u can also refer as my desktop voice assistant.'
      },
      {
        type: 'header',
        value: 'My Contribution :',        
      },
      {
        type: 'text',
        value: 'This can : Converses, barely. Rhythmbox: Play, Pause, Open.  Tells time.  Suggests Googling for all unrecognized interrogative questions.  Plays any song, first search result in youtube',
      },
      {
        type: 'Dependencies I have used are :',
        value: [
          'SpeechRecognition',
          'jsonlib',
          'pyttsx3',
          'wikipedia',
          'pyjokes',
          'pyautogui',
          'cv2',

        ]
      }
    ]
  },
};
