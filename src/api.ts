import { shuffleArray } from './utils';

export type Question = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
};

export type QuestionState = Question & { answers: string[] };

export enum Difficulty {
  EASY = 'easy',
  MEDIUM = 'medium',
  HARD = 'hard',
}

export const fetchQuizQuestions = async (
  amount: number,
  difficulty: Difficulty
) => {
  // const endpoint = 'https://httpstat.us/404';
  const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty${difficulty}&category=11&type=multiple`;
  const response = await fetch(endpoint);
  if (!response.ok) {
    const message = `Oops, something went wrong. Status: ${response.status}`;
    throw new Error(message);
  }
  const data = await response.json();
  return data.results.map((question: Question) => ({
    ...question,
    answers: shuffleArray([
      ...question.incorrect_answers,
      question.correct_answer,
    ]),
  }));
};
