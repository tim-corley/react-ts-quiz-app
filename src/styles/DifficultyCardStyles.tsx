import tw, { styled } from 'twin.macro';

export const DifficultySelect = styled.div`
  ${tw`max-w-screen-lg px-10 py-4 border-2 border-primary_light rounded-md text-2xl text-secondary_light`}

  .radio-wrapper {
    ${tw`flex flex-col items-start`}
  }

  .row {
    ${tw`flex w-full first:border-t-0 border-t border-primary_light`}
  }

  label {
    ${tw`flex items-center cursor-pointer capitalize text-xl my-4`}
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
