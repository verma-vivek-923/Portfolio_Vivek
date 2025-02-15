const projects = [
  {
    id: 1,
    title: "CoolBlog.com (MERN)",
    image: `${import.meta.env.BASE_URL}Projects/images/Coolblog.png`,
    video: `${import.meta.env.BASE_URL}Projects/videos/Coolblog.mp4`,
    description: `I'm thrilled to introduce CoolBlog, a dynamic web application designed to connect people through their thoughts and stories. 
  This platform enables users to read and share blogs effortlessly, fostering a vibrant community of readers and writers.

  ✨ Key Features:
  - User-Friendly Design: Seamlessly navigate and enjoy a clean, intuitive interface.
  - Login/Signup Functionality: Secure your account to unlock advanced features.
  - Dedicated Blog Pages: Dive into specific blogs with beautifully crafted pages for an immersive reading experience.
  - Contact Us Section: A direct channel for user support and feedback.
  - Admin Control: Manage and moderate content effectively.
  - Responsive Design: Optimized for devices of all sizes, ensuring a smooth experience everywhere.

  💡 Highlights:
  - Read Without Limits: Browse and enjoy blogs without the need to sign up.
  - Express Yourself: Create an account as an admin to share your thoughts and contribute to the community.`,

    github: "https://github.com/verma-vivek-923/CoolBlogs.com.git",
    demo :"https://cool-blogs-com.vercel.app/",
  },

  {
    id: 2,
    title: "Library.com (MERN))",
    image: `${import.meta.env.BASE_URL}Projects/images/Library.png`,
    video: `${import.meta.env.BASE_URL}Projects/videos/Library.mp4`,
    description: `a full-stack bookstore web app built using the MERN stack! This platform allows users to explore, read, and purchase books online seamlessly. Books that are available for free are prominently featured on the homepage, while users can also browse the complete collection of books effortlessly.

      Key Features:
      User Authentication: Login and signup functionality secured with email-based authentication to ensure a safe and personalized user experience.
      Dark Mode Toggle: A sleek and modern dark mode feature for a visually appealing and comfortable reading experience, perfect for night-time browsing.
      
      Technologies Used:
      Frontend: React.js with Tailwind CSS for a responsive and dynamic user interface.
      Backend: Node.js and Express.js for a robust and scalable server-side architecture.
      Database: MongoDB for efficient data storage and management.
      Authentication: JSON Web Tokens (JWT) and bcrypt for secure user sessions and data protection.`,
    github: "https://github.com/verma-vivek-923/BookStore_Webapp.git",
  },
  {
    id: 3,
    title: "Docx To Pdf Converter",
    image: `${import.meta.env.BASE_URL}Projects/images/DocToPdf.png`,
    video: `${import.meta.env.BASE_URL}Projects/videos/DocToPdf.mp4`,
    description:
      "A fun interactive bubble game where users match numbers to score points.",
    github: "https://github.com/verma-vivek-923/Word_To_PDF-Converter.git",
  },
  {
    id: 4,
    title: "Currency Converter",
    image: `${import.meta.env.BASE_URL}Projects/images/Currency_Converter.png`,
    video: `${import.meta.env.BASE_URL}Projects/videos/currency.mp4`,
    description: ` a fully responsive Currency Converter Web App!

      This app allows users to input an amount and convert it to a specified currency. Users can select their currencies using the "From" and "To" dropdown menus. After selecting both currencies, simply click the "Exchange" button, and the converted amount will be displayed in the message box.
      
      The app also features country flags corresponding to the selected currencies, displayed just before the currency value. Additionally, users can easily swap the "From" and "To" currencies by clicking the change icon.
      I'd love to hear your feedback on this project! 😊`,
    github: "https://github.com/verma-vivek-923/Currency_Converter.git",
  },
  {
    id: 5,
    title: "To-Do List",
    image: `${import.meta.env.BASE_URL}Projects/images/ToDo.png`,
    video: `${import.meta.env.BASE_URL}Projects/videos/ToDo.mp4`,
    description: ` a fully responsive To-Do Web App built with JavaScript!

      This app allows users to easily manage their tasks. You can create a new task by typing it into the input bar and either clicking the "Add" button or pressing the "Enter" key. Once a task is completed, you can mark it as done by checking the checkbox, and you can also delete tasks from the list by clicking the delete icon.
      
      One of the best features is that your tasks are saved and accessible even after you reload the page or exit the app. Whenever you return to your To-Do list, your tasks will be just as you left them.
      `,
    github: "https://github.com/verma-vivek-923/To-Do_App",
  },
  {
    id: 6,
    title: "Tic-Tac-Toe game",
    image: `${import.meta.env.BASE_URL}Projects/images/Tic_Tac_Toe.png`,
    video: `${import.meta.env.BASE_URL}Projects/videos/Tic_Tac_Toe.mp4`,
    description: ` a fully responsive Tic-Tac-Toe game built with HTML, CSS, and JavaScript!

      This game is easy to play and features a user-friendly interface. It starts in dual-player mode by default, so you can enjoy a match with a friend. If you prefer to play solo, simply check the "Play with Computer" checkbox, and you'll be able to challenge the computer.
      
      The game also includes a "Reset/New Game" button, which displays "Reset" during gameplay and changes to "New Game" once the game is complete. This makes it easy to quickly start a new round.`,
    github: "https://github.com/verma-vivek-923/Tic-Tac-Toe_Game",
  },
  {
    id: 7,
    title: "Rock-Paper-Scissor game",
    image: `${import.meta.env.BASE_URL}Projects/images/RockPaperScissor.png`,
    video: `${import.meta.env.BASE_URL}Projects/videos/RockPaperScissor.mp4`,
    description:
      `a fully responsive Rock-Paper-Scissors game built with HTML, CSS, and JavaScript!
      In this game, the player selects one of the three options: rock, paper, or scissors. The computer then makes its choice. If your choice beats the computer's, you win, and your score increases by 1, with a green message displayed at the bottom of the screen. If the computer wins, its score increases by 1, and a red message appears. If both choose the same, it's a draw, and a message in a blackish color is shown.`,
    github: "https://github.com/verma-vivek-923/Rock-Paper-Scissor_Game",
  },
  // {
  //   id: 8,
  //   title: "Food_Order.com",
  //   image: `${import.meta.env.BASE_URL}Projects/images/FoodOrder.png`,
  //   video: `${import.meta.env.BASE_URL}Projects/videos/FoodOrder.mp4`,
  //   description: `a fully responsive Rock-Paper-Scissors game built with HTML, CSS, and JavaScript!
  //     In this game, the player selects one of the three options: rock, paper, or scissors. The computer then makes its choice. If your choice beats the computer's, you win, and your score increases by 1, with a green message displayed at the bottom of the screen. If the computer wins, its score increases by 1, and a red message appears. If both choose the same, it's a draw, and a message in a blackish color is shown.`,
  //   github: "https://github.com/yourusername/tic-tac-toe",
  // },
  {
    id: 9,
    title: "Bubble Game",
    image: `${import.meta.env.BASE_URL}Projects/images/bubble_game.png`,
    video: `${import.meta.env.BASE_URL}Projects/videos/bubble_game.mp4`,
    description: `a fully responsive Bubble Game web app, created with HTML, CSS, and JavaScript.

      The game generates different random numbers in each bubble and also produces a random "Hit" number. The player needs to click on the bubble that matches the "Hit" number. When the numbers match, the score increases by 10 points, and new random numbers are generated for the bubbles and the "Hit" number.
      
      Players have a 30-second time limit to play the game. Once the time runs out, the game ends and displays the final score on the screen.
      
      The game also features a "Pause" button to pause the game and a "Reset" button at the bottom of the screen, allowing players to reset the game at any time.`,
    github: "https://github.com/verma-vivek-923/Bubble-Game",
  },
];

export default projects;
