import reactIcon from 'Icons/technology/react-tech-icon.png';
import reactNativeIcon from 'Icons/technology/react-native-tech-icon.png';
import laravelIcon from 'Icons/technology/laravel-tech-icon.png';
import electronIcon from 'Icons/technology/electron-tech-icon.png';

import reactBackgroundImage from 'Images/technology/react-background-image.png';
import reactNativeBackgroundImage from 'Images/technology/react-native-background-image.png';
import laravelBackgroundImage from 'Images/technology/laravel-background-image.png';
import electronBackgroundImage from 'Images/technology/electron-background-image.png';

export const techList = [
  {
    id: 'react',
    name: 'React',
    firstLogo: reactIcon,
    backgroundImage: reactBackgroundImage,
    description: `I have the most as well as recent experience in React compared to other technology in my list. I have created and architected web projects from scratch as well as jumped on ongoing projects.
    <br/><br/>I am familiar with recent techniques and libraries used in react like code-splitting, Hooks, React-Router, Final-Form, Redux, Redux-api-middleware, css in js, etc.`,
    projects: ['snapteam', 'wakency','lighthouse'],
  },
  {
    id: 'laravel',
    name: 'Html,CSS,Js',
    firstLogo: laravelIcon,
    backgroundImage: laravelBackgroundImage,
    description: `I have fallen love these 3 languages. I have intermediate in these languages. The important reason these are my favorite because of the magical animation 😊`,
    projects: ['nykaa']
  },
  {
    id: 'electron',
    name: 'Python',
    firstLogo: electronIcon,
    backgroundImage: electronBackgroundImage,
    description: 'Tech Giants like Cisco, IBM, Mozilla, Google, Quora, Hewlett-Packard, Dropbox, and Qualcomm are using this language owing to its simplicity and elegance. Most developers prefer Python over the plethora of programming languages out there because of its emphasis on readability and efficiency.And being frank I like it because of the Artificial intelligence,it so magical to learn Artificial intelligence 😊 and in my POV it is the most preferd languages😙',
    projects: ['benefactory']
  }
];
