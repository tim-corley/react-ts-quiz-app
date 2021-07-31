import tw, { styled } from 'twin.macro';

export const Wrapper = styled.div`
  ${tw`flex flex-col items-center`}

  h1 {
    ${tw`mt-4 font-staatliches text-6xl text-transparent bg-clip-text bg-gradient-to-br from-secondary_dark to-secondary_light`}
  }

  .start,
  .next {
    ${tw`flex items-center h-6 my-8 px-10 py-8 cursor-pointer shadow-lg bg-gradient-to-b from-accent_light to-accent_dark border-2 border-white rounded-md text-xl text-white`}
  }

  .score {
    ${tw`my-6 text-accent text-2xl`}
  }
`;

export const DifficultySelect = styled.div`
  ${tw`max-w-screen-lg px-10 py-4 border-2 border-primary_light rounded-md text-2xl text-secondary_light`}

  .radio-wrapper {
    ${tw`flex flex-col items-start`}
  }

  .row {
    ${tw`flex w-full border-t border-primary_light`}
  }

  label {
    ${tw`flex items-center cursor-pointer text-xl my-4`}
  }

  span {
    ${tw`w-8 h-8 inline-block mr-2 rounded-full border border-gray-500`}
  }

  .hidden {
    ${tw`hidden`}
  }

  input[type='radio'] + label span {
    transition: background 0.2s, transform 0.2s;
  }

  input[type='radio'] + label span:hover,
  input[type='radio'] + label:hover span {
    transform: scale(1.2);
  }

  input[type='radio']:checked + label span {
    background-color: #4db6ac; //secondary
    box-shadow: 0px 0px 0px 2px white inset;
  }

  input[type='radio']:checked + label {
    color: #4db6ac; //secondary
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
    border: 4px solid #ffb300;
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
