import tw, { styled } from 'twin.macro';

export const Wrapper = styled.div`
  ${tw`max-w-screen-lg mx-2 px-6 py-4 border-2 text-center border-primary_light rounded-md text-2xl text-secondary_light`}

  h2 {
    ${tw` my-2 text-lg text-accent_dark`}
  }

  p {
    ${tw`mb-4 text-lg text-secondary`}
  }
`;

type ButtonWrapperProps = {
  correct: boolean;
  userClicked: boolean;
};

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
  ${tw`transform hover:transition duration-500 hover:scale-105 animate-fade-in-down`}

  button {
    ${tw`cursor-pointer select-none text-white text-sm w-full h-10 my-4 bg-transparent border-2 border-white rounded-md`}
    ${({ correct, userClicked }) =>
      correct
        ? tw`bg-gradient-to-r from-green-300 to-green-600`
        : !correct && userClicked
        ? tw`bg-gradient-to-r from-red-300 to-red-600`
        : tw`bg-transparent`}
  }
`;
