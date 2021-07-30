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
    transition: all 0.3s ease;

    :hover {
        opacity 0.8;
    }

    button {
        cursor: pointer;
        user-select: none;
        font-size: 0.8rem;
        width: 100%;
        height: 40px;
        margin: 5px 0;
        background: ${({ correct, userClicked }) =>
          correct
            ? 'linear-gradient(90deg, #56ffa4, #59bc86)'
            : !correct && userClicked
            ? 'linear-gradient(90deg, #ff5656, #c16868)'
            : 'linear-gradient(90deg, #56ccff, #6eafb4)'};
        border: 3px solid #fff;
        box-shadow: 1px 2px 0px rgba(0, 0, 0, 0.1);
        border-radius: 10px;
        color: #fff;
        text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25);
    }
`;
