import port1 from '../../assets/images/kidsCycle-image.png';
import port2 from '../../assets/images/BandSite-image.png';
import port3 from '../../assets/images/BrainFlix.png';
import port4 from '../../assets/images/InStock-image.png';
import port5 from '../../assets/images/port6.jpg'
import port6 from '../../assets/images/port6.jpg';
import port7 from '../../assets/images/port6.jpg';

const PortfolioList = [
  {
    id: 1,
    category: 'FullStack',
    link1: 'https://kidscycle.herokuapp.com/',
    link2: 'https://github.com/Sabzs/kidscycle',
    icon1: 'Website',
    icon2: 'GitHub',
    image: port1,
    title: 'KidsCycle',
    description: "KidsCycle is an application for parents to give or exchange kids related items while aiding and fostering a freecycle community through generous acts of giving. This project was inspired by my wife and the idea was developed, designed and built by me.",
    techStacks: [
      {
        stack1: "React.js",
        stack2: "CSS/SCSS",
        stack3: "Node.js",
        stack4: "Express",
        stack5: "MySQL",
        stack6: "Sequelize",
        stack7: "Heroku",
      }
    ]
  },
  {
    id: 2,
    category: 'HTML',
    link2: 'https://github.com/Sabzs/sabo-jise-bandsite/tree/master/sprint-3',
    icon2: 'GitHub',
    image: port2,
    title: 'BandSite',
    description: "BandSite is a responsive HTML and CSS/SCSS website and my first introduction to React.js. This project is for an up-and-coming band with a focused on the implementation of the BEM methodology to keep a clean and DRY approach to code implementation.",
    techStacks: [
      {
        stack1: "HTML5",
        stack2: "CSS/SCSS",
        stack3: "React.js",
      }
    ]
  },
  {
    id: 3,
    category: 'FullStack',
    link1: "https://brainflix-sabzs.herokuapp.com",
    link2: 'https://github.com/Sabzs/brainflix-sabo-jise/tree/master/sprint-three',
    icon1: 'Website',
    icon2: 'GitHub',
    image: port3,
    title: 'BrainFlix',
    description: "BrainFlix, my first fully responsive FullStack project. A functioning prototype for a new video streaming platform.",
    techStacks: [
      {
        stack1: "React.js",
        stack2: "CSS/SCSS",
        stack3: "Node.js",
        stack4: "Express",
        stack5: "Data-API",
      }
    ]
  },
  {
    id: 4,
    category: 'FullStack',
    link2: 'https://github.com/Sabzs/inStock',
    icon2: 'GitHub',
    image: port4,
    title: 'InStock',
    description: "This is a group project with two other developers, following an Agile working environment using Jira Scrum board for tasked requirements. We were tasked to deliver an Inventory Management System for a Fortune 500 client as their existing system is not scalable",
    techStacks: [
      {
        stack1: "React.js",
        stack2: "CSS/SCSS",
        stack3: "Node.js",
        stack4: "Express",
        stack5: "Data-API",
        stack6: "Jira",
        stack7: "Figma",
      }
    ]
  },
  {
    id: 5,
    category: 'React Js',
    link2: 'www.youtube.com',
    icon2: 'GitHub',
    image: port5,
    title: 'MyTodo',
    description: "",
    techStacks: [
      {
        stack1: "React.js",
        stack2: "CSS/SCSS",
      }
    ]
  },
  {
    id: 6,
    category: 'React Js',
    link2: 'www.youtube.com',
    icon2: 'GitHub',
    image: port6,
    title: 'Income Tracker',
    description: "",
    techStacks: [
      {
        stack1: "React.js",
        stack2: "CSS/SCSS",
      }
    ]
  },
  {
    id: 7,
    category: 'React Js',
    link2: 'www.youtube.com',
    icon2: 'GitHub',
    image: port7,
    title: 'Contact Listing',
    description: "",
    stack: ""
  },

]

export default PortfolioList;
