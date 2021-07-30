import styled, { createGlobalStyle } from 'styled-components';
import hollywood from './img/hollywood.jpg';

export const GlobalStyle = createGlobalStyle`
html {
    height: 100%;
}

body {
    background-image: url(${hollywood});
    background-size: cover;
    margin: 0;
    padding: 0 20px;
    display: flex;
    justify-content: center;
}

* {
    box-sizing: border-box;
    font-family: 'Catamaran', sans-serif;
}
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    > p {
        color: #fff
    }

    .score {
        color: #fff
        font-size: 2rem;
        margin: 0
    }

    h1 {
        font-family: 'Staatliches', sans-serif;
        background-image: linear-gradient(180deg, #fff, #87f1ff);
        background-size: 100%;
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        -moz-background-clip: text;
        -moz-text-fill-color: transparent;
        filter: drop-shadow(2px 2px #0085a3);
        font-size: 70px;
        font-weight: 400;
        text-align: center;
        margin: 20px;
    }

    .start, .next {
        cursor: pointer;
        background: linear-gradient(180deg, #fff, #ffcc91);
        border: 2px solid #d38558;
        box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
        border-radius: 10px;
        height: 40px;
        margin: 20px 0;
        padding: 0 40px;
    }

    .start {
        max-width: 200px;
    }
`;

export const DifficultySelect = styled.div`
  max-width: 1100px;
  background: #ebfeff;
  border-radius: 10px;
  border: 2px solid #0085a3;
  padding: 10px 35px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
  text-align: center;

  .radio-buttons {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    min-width: 225px;
  }

  p {
    font-size: 1rem;
  }
`;

export const Loading = styled.div`
  .loading-ripple {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
    margin: 20px;
  }
  .loading-ripple div {
    position: absolute;
    border: 4px solid #fff;
    opacity: 1;
    border-radius: 50%;
    animation: loading-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }
  .loading-ripple div:nth-child(2) {
    animation-delay: -0.5s;
  }
  @keyframes loading-ripple {
    0% {
      top: 36px;
      left: 36px;
      width: 0;
      height: 0;
      opacity: 1;
    }
    100% {
      top: 0px;
      left: 0px;
      width: 72px;
      height: 72px;
      opacity: 0;
    }
  }
`;
