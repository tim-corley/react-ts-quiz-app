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
