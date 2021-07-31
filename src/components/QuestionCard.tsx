import React from 'react';
import { AnswerObject } from '../App';
import { Wrapper, ButtonWrapper } from '../styles/QuestionCardStyles';

type Props = {
  question: string;
  answers: string[];
  checkAnswer: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObject | undefined;
  questionNum: number;
  totalQuestions: number;
};

const QuestionCard: React.FC<Props> = ({
  question,
  answers,
  checkAnswer,
  userAnswer,
  questionNum,
  totalQuestions,
}) => (
  <Wrapper>
    <h2>
      Question: {questionNum} / {totalQuestions}
    </h2>
    <p dangerouslySetInnerHTML={{ __html: question }} />
    <div>
      {answers.map((answer) => (
        <ButtonWrapper
          key={answer}
          correct={userAnswer?.correctAnswer === answer}
          userClicked={userAnswer?.answer === answer}
        >
          <button
            disabled={userAnswer ? true : false}
            value={answer}
            onClick={checkAnswer}
          >
            <span dangerouslySetInnerHTML={{ __html: answer }} />
          </button>
        </ButtonWrapper>
      ))}
    </div>
  </Wrapper>
);
export default QuestionCard;
