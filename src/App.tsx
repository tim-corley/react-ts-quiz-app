import React, { useState } from 'react';
import { fetchQuizQuestions } from './api';
import QuestionCard from './components/QuestionCard';
import { QuestionState, Difficulty } from './api';
import { GlobalStyle, Wrapper, Loading, DifficultySelect } from './App.styles';

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
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);
  const [difficulty, setDifficulty] = useState(Difficulty.EASY);

  const startTrivia = async () => {
    setLoading(true);
    setGameOver(false);
    const newQuestions = await fetchQuizQuestions(TOTAL_QUESTIONS, difficulty);
    setQuestions(newQuestions);
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
    <>
      <GlobalStyle />
      <Wrapper>
        <h1>MOVIE TRIVIA</h1>
        {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
          <>
            <button className='start' onClick={startTrivia}>
              Start
            </button>
            <DifficultySelect>
              <p>Select Question Difficulty:</p>
              <div className='radio-buttons'>
                <div>
                  <input
                    type='radio'
                    id='easy'
                    name='easy'
                    value='easy'
                    checked={difficulty === Difficulty.EASY}
                    onChange={() => setDifficulty(Difficulty.EASY)}
                  ></input>
                  <label htmlFor='easy'>Easy</label>
                </div>
                <div>
                  <input
                    type='radio'
                    id='medium'
                    name='medium'
                    value='medium'
                    checked={difficulty === Difficulty.MEDIUM}
                    onChange={() => setDifficulty(Difficulty.MEDIUM)}
                  ></input>
                  <label htmlFor='medium'>Medium</label>
                </div>
                <div>
                  <input
                    type='radio'
                    id='hard'
                    name='hard'
                    value='hard'
                    checked={difficulty === Difficulty.HARD}
                    onChange={() => setDifficulty(Difficulty.HARD)}
                  ></input>
                  <label htmlFor='hard'>Hard</label>
                </div>
              </div>
            </DifficultySelect>
          </>
        ) : null}

        {!gameOver ? <p className='score'>Score: {score}</p> : null}
        {loading && (
          <Loading>
            <div className='loading-ripple'>
              <div></div>
              <div></div>
            </div>
          </Loading>
        )}
        {!loading && !gameOver && (
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
      </Wrapper>
    </>
  );
};

export default App;
