import claimpage from '../images/claimpage.png';
import swappage from '../images/swappage.png';
import mobile from '../images/mobile.png';
import bank from '../images/bank.png'

const portfolios = [
  {
    id: "01",
    imgUrl: claimpage,
    category: "Web Design",
    title: "Token Claim Website",
    description:
      "This website uses for rewarding students, after the event they joined. All they have to do is copy and paste their wallet addresses.",
    technologies: ["ReactJS", "HTML/CSS", "Node.js", "JavaScript"],
    siteUrl: "https://iu-swap.vercel.app/",
  },
  {
    id: "02",
    imgUrl: swappage,
    category: "Web Design",
    title: "IUSwap Website",
    description:
      "This is a combination of a Decentralized Exchange (DEX) with An Automated Market Maker (AMM) wherein organization tokens can be traded for behavior score tokens. Blockchain allows you to readily view the transaction history of tokens without the need for centralized computer storage. In addition, students have access to and can control the token that represents their behavior grade.",
    technologies: ["ReactJS", "Tailwind CSS", "Node.js", "JavaScript", "Blockchain"],
    siteUrl: "https://iuswap.netlify.app",
  },
  {
    id: "03",
    imgUrl: mobile,
    category: "Ux",
    title: "AR Shopping App",
    description: 
    "AR shopping apps allow users to visualize products in a real-world environment before making a purchase. For example, a user could use the app to see how a piece of furniture would look in their living room, or how a new pair of shoes would look on their feet. The app can also provide additional product information, such as size, color, and price, when the user points the camera at the product.",
    technologies: ["Swift", "Unity 3D", "C#"],
    siteUrl: "https://github.com/MiQannn/RealOne-App",
  },
  {
    id: "04",
    imgUrl: bank,
    category: "Web Design",
    title: "Bank Web Application",
    description: 
    'MDQT Bank Web Application has always been a medium for customer and employee of MDQT Bank to exchange and perform management. The transaction has been manually operated throughout the year with many difficulties. Along with the ever-growing trend of development of technology, mobile, laptop, computer are more and more powerful and convenient to aid users in many everyday tasks. One of the many web application that we can put into good use is that of Banking Web Application. MDQT Banking WebApp idea was created with the goals of electronics devices like mobile, laptop,… with many optimized real-time feature.',
    technologies: ["React", "HTML/CSS", "Node.js", "MySQL"],
    siteUrl: "#",
  },
];

export default portfolios;
