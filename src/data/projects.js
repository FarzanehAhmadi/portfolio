import tantakuyImg from "../assets/projects/tantakuy.png";
import movieDiaryImg from "../assets/projects/Movie.png";
import mealSharingImg from "../assets/projects/meal.png";
import memoryGameImg from "../assets/projects/memory.png";
import adviceImg from "../assets/projects/advice.png";
import rpsImg from "../assets/projects/rps.png";

const projects = [
  {
    title: "Tantakuy",
    description:
      "Web platform for image competitions. Companies create contests; participants submit and vote.",
    image: tantakuyImg,
    demo: "https://tantakuy-hyf.vercel.app/",
    github: "https://github.com/Lupescua/tantakuy-hyf",
  },
  {
    title: "Movie Diary",
    description:
      "Search movies via TMDB API, view details and trailers, comment, and save favorites.",
    image: movieDiaryImg,
    demo: "https://react-project-2025-ecru.vercel.app/",
    github: "https://github.com/unik24/React-Project-2025",
  },
  {
    title: "Meal Sharing",
    description:
      "Web app with Node.js backend, React/Next.js frontend, MySQL DB, and Material UI design.",
    image: mealSharingImg,
    github: "https://github.com/FarzanehAhmadi/meal-sharing",
  },
  {
    title: "Memory Game",
    description:
      "Memory card game built with HTML, CSS, JavaScript, deployed on GitHub.",
    image: memoryGameImg,
    demo: "https://farzanehahmadi.github.io/HYF-Memory-Game/",
    github: "https://github.com/FarzanehAhmadi/HYF-Memory-Game",
  },
  {
    title: "Rock Paper Scissors",
    description:
      "Classic ROCK, PAPER, SCISSORS game in the browser using JavaScript.",
    image: rpsImg,
    demo: "https://game-rps-javascript.netlify.app/",
    github: "https://github.com/yourusername/rock-paper-scissors",
  },
  {
    title: "Advice Generator",
    description: "Fetch and display random advice dynamically from an API.",
    image: adviceImg,
    demo: "https://farzanehahmadi.github.io/Advice-Generator-App/",
    github: "https://github.com/FarzanehAhmadi/Advice-Generator-App",
  },
];

export default projects;
