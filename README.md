<!-- PROJECT HEADER -->
<br />
<p align="center">
  <a href="https://tim-corley.github.io/react-ts-quiz-app/">
    <img src="sr/../src/img/clapper.png" alt="Logo" width="100" height="100">
  </a>

  <h2 align="center">React & TypeSript Movie Trivia App</h2>

  <p align="center">
    Put your movie knowledge to the test!
    <br />
    <br />
    <a href="https://github.com/tim-corley/react-ts-quiz-app/issues">Report Bug</a>
  </p>
    <div align="center">
    <h3>Built with:<h3>
          <a href="https://www.typescriptlang.org/docs/">
    <img src="src/img/typescript.svg" alt="Logo" width="60" height="60">
  </a>
      <a style="margin-left: 50px" href="https://reactjs.org/docs/getting-started.html">
    <img src="src/img/react.svg" alt="Logo" width="60" height="60">
  </a>
        <a style="margin-left: 50px" href="https://github.com/ben-rogerson/twin.macro">
    <img src="src/img/twin.png" alt="Logo" width="60" height="60">
  </a>
    
  </div>
</p>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
        <li>
      <a href="#dev-notes">Dev Notes</a>
      <ul>
        <li><a href="#api">API</a></li>
      </ul>
    </li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

The movie trivia app showcases TypeScript within a React project. The application also leverages asynchronous JavaScript in order to fetch data from a 3<sup>rd</sup> party API ([Open Trivia Database](https://opentdb.com/)). Lastly, the styled-components library is utilized for CSS-in-JS styling.

[Visit Demo](https://tim-corley.github.io/react-ts-quiz-app/)

### Built With

- [TypeScript](https://www.typescriptlang.org/docs/)
- [React](https://reactjs.org/docs/getting-started.html)
- [Open Trivia Database API](https://opentdb.com/)
- [Twin](https://github.com/ben-rogerson/twin.macro)
<!-- GETTING STARTED -->

## Getting Started

Follow the steps below to get a local development instance up & running.

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/tim-corley/react-ts-quiz-app.git
   ```
2. Install packages
   ```sh
   yarn install
   ```
3. Start the development server
   ```sh
   yarn start
   ```

### Testing

Unit testing is achieved by using React Testing Library and Mock Service Worker.

1. Run tests
   ```sh
   yarn test
   ```

### Deployment

1. Create build & deploy to Github Pages
   ```sh
   yarn deploy
   ```

### API

This application leverages the [Open Trivia Database API](https://opentdb.com/) with a category query parameter set for Entertainment - Film questions.

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->

## Contact

Tim Corley - [@tcor215](https://twitter.com/tcor215) - contact@tim-corley.dev
