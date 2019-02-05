import Reddit from "../assets/reddit.png";
import Cell from "../assets/cell.png";
import Flutter from "../assets/flutter.png";
import Auth from "../assets/authenticator.jpg";
import Algo from "../assets/algo.jpg";
import Coolit from "../assets/Coolit.png";

const Projects = [
  {
    title: "Cool It!",
    name: "Cool It!",
    desc:
      "Developed cross-platform, real-time application using React, Redux, Electron, and Firebase that allows users to chat and create their own groups.",
    languages: [
      ["javascript", "JavaScript"],
      ["react", "ReactJs"],
      ["atom", "ElectronJs"]
    ],
    img: Coolit,
    url: "https://github.com/onlyserenity/cool-it"
  },
  {
    title: "Manufacturing Multi-purpose Application",
    name: "Cell Productivity",
    desc:
      "This application is currently under development and it's 99% completed. It features real-time analytics, order management and tracking features. It also has in-app messaging system for supervisors and works at workstations and integrated with Workday API to show real-time employee location through out the facility.",
    languages: [
      ["csharp", "C#"],
      ["amazonwebservices", "MVC"],
      ["mysql", "Microsoft SQL"],
      ["webpack", "API"]
    ],
    img: Cell,
    url: ""
  },
  {
    title: "Cross-platform Weather App",
    name: "Flutter Weather",
    desc:
      "Weather app developed using Google's newest framework, Flutter. It is designed to target Android and iOS. It uses a free API to fetch weather data and display it to the user.",
    languages: [
      ["android", "Android"],
      ["apple", "iOS"],
      ["dart", "Dart"],
      ["google", "Flutter"],
      ["webpack", "API"]
    ],
    img: Flutter,
    url: "https://github.com/onlyserenity/FlutterWeather"
  },
  {
    title: "Backend Authenticator for Node.js",
    name: "Authenticator.js",
    desc:
      "Backend authentication api that works with nodejs and expressjs. It encrypts relevant information into MongoDB and can retrieve and compare encrypted information such as login for verification.",
    languages: [
      ["javascript", "ES6"],
      ["nodejs", "Node.js"],
      ["mongodb", "MongoDB"]
    ],
    img: Auth,
    url: "https://github.com/onlyserenity/authenticator-expressjs"
  },
  {
    title: "Data Structures and Algorithms in C++",
    name: "C++ Algorithms",
    desc:
      "Implementation of different data structures and algorithms in real world project without the use of any external library.",
    languages: [["cplusplus", "C++"]],
    img: Algo,
    url: "https://github.com/onlyserenity/CS260_DATA_STRUCTURES"
  },
  {
    title: "Reddit Client",
    name: "Reddictron",
    desc:
      "This application is cross-platform and is currently in the alpha stage. New features are added on a daily-basis.",
    languages: [
      ["javascript", "JavaScript"],
      ["react", "ReactJs"],
      ["atom", "ElectronJs"]
    ],
    img: Reddit,
    url: "https://github.com/onlyserenity/Relectron-reddit"
  }
];

export default Projects;
