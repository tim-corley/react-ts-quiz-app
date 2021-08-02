import React, { useState } from 'react';
import { fetchQuizQuestions } from './api';
import QuestionCard from './components/QuestionCard';
import DifficultyCard from './components/DifficultyCard';
import { QuestionState, Difficulty } from './api';
import * as Styled from './styles/AppStyles';

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

const TOTAL_QUESTIONS = 10;

const App = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);
  const [difficulty, setDifficulty] = useState<string>(Difficulty.EASY);

  const startTrivia = async () => {
    setLoading(true);
    setGameOver(false);
    try {
      const newQuestions = await fetchQuizQuestions(
        TOTAL_QUESTIONS,
        difficulty
      );
      setQuestions(newQuestions);
    } catch (err) {
      setError(err);
    }
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  };

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      const answer = e.currentTarget.value;
      const correct = questions[number].correct_answer === answer;
      if (correct) setScore((prev) => prev + 1);
      const answerObj = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      };
      setUserAnswers((prev) => [...prev, answerObj]);
    }
  };

  const nextQuestion = () => {
    const nextQuestion = number + 1;
    if (nextQuestion === TOTAL_QUESTIONS) {
      setGameOver(true);
    } else {
      setNumber(nextQuestion);
    }
  };

  return (
    <Styled.Wrapper>
      <h1>MOVIE TRIVIA</h1>
      {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
        <>
          <button className='start' onClick={startTrivia}>
            Start
          </button>
          <DifficultyCard
            difficulty={difficulty}
            setDifficulty={setDifficulty}
          />
        </>
      ) : null}

      {!gameOver ? <p className='score'>Score: {score}</p> : null}
      {loading && (
        <Styled.Loading>
          <div className='loading-ripple'>
            <div></div>
            <div></div>
          </div>
        </Styled.Loading>
      )}
      {error && <div className='score'>{error.toString()}</div>}
      {!loading && !error && !gameOver && (
        <QuestionCard
          questionNum={number + 1}
          totalQuestions={TOTAL_QUESTIONS}
          question={questions[number].question}
          answers={questions[number].answers}
          userAnswer={userAnswers ? userAnswers[number] : undefined}
          checkAnswer={checkAnswer}
        />
      )}
      {!gameOver &&
        !loading &&
        userAnswers.length === number + 1 &&
        number !== TOTAL_QUESTIONS - 1 && (
          <button className='next' onClick={nextQuestion}>
            Next
          </button>
        )}
    </Styled.Wrapper>
  );
};

export default App;
